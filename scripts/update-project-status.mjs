import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,renameSync,rmSync,existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {definitions,reviewBranch,validate,loadJSON,git} from './lib.mjs';
import {timeline} from '../src/model.mjs';
import {build} from './build.mjs';
process.chdir(join(dirname(fileURLToPath(import.meta.url)),'..'));
const dry=process.argv.includes('--dry-run');
if(process.argv.slice(2).some(x=>x!=='--dry-run'))throw Error('Única opción permitida: --dry-run');
mkdirSync('.cache',{recursive:true});
try{mkdirSync('.cache/update.lock');}catch{console.error('Ya hay una actualización o publicación en curso. No se eliminará su lock.');process.exit(1);}
const temp=mkdtempSync(join(tmpdir(),'gym-catalog-'));const dir=join(temp,'source.git');
try{
 const config=loadJSON('project.json'),defs=definitions(readFileSync('capabilities.md','utf8'));
 execFileSync('git',['init','--bare','--quiet',dir]);
 const raw=execFileSync('git',['ls-remote','--heads',config.repository],{encoding:'utf8',stdio:['ignore','pipe','pipe']});
 const refs=Object.fromEntries(raw.trim().split('\n').filter(Boolean).map(l=>{const [sha,ref]=l.split(/\s+/);return [ref,sha];}));
 const branches={};
 for(const branch of config.branches){const commit=refs['refs/heads/'+branch]??null;if(commit)git(dir,'fetch','--quiet','--depth=1',config.repository,commit);branches[branch]={ref:'refs/heads/'+branch,commit,available:Boolean(commit)};}
 const previous=existsSync('data/status.json')?loadJSON('data/status.json'):null;
 const at=new Date().toISOString();
 const features=defs.map(f=>({id:f.id,name:f.name,description:f.description,category:f.category,phase:f.phase,notes:f.notes,branches:Object.fromEntries(config.branches.map(b=>[b,reviewBranch(dir,branches[b].commit,f,b,config)]))}));
 const candidate={schemaVersion:1,project:config.name,repository:config.webUrl,privateSource:config.private,snapshotAt:at,branches,features,timeline:timeline(previous?.timeline??[],features,at,!previous)};
 validate(candidate);
 // A no-op retains the previous timestamp and bytes: no invented new snapshot.
 const same=previous&&JSON.stringify({...previous,snapshotAt:null})===JSON.stringify({...candidate,snapshotAt:null});
 if(same)candidate.snapshotAt=previous.snapshotAt;
 const file=join(temp,'status.json');writeFileSync(file,JSON.stringify(candidate,null,2)+'\n');
 execFileSync(process.execPath,['--test','test/model.test.mjs','test/updater.test.mjs'],{stdio:'inherit'});
 build(join(temp,'dist'),file);
 const report={dryRun:dry,changed:!same,snapshotAt:candidate.snapshotAt,branches,manualReview:features.flatMap(f=>Object.entries(f.branches).filter(([,b])=>b.reviewRequired).map(([branch,b])=>({id:f.id,branch,reason:b.reason}))),changes:features.flatMap(f=>Object.entries(f.branches).filter(([branch,b])=>previous?.features.find(p=>p.id===f.id)?.branches[branch]?.status!==b.status).map(([branch,b])=>({id:f.id,branch,status:b.status}))),publication:'No ejecutada. Usar npm run publish:snapshot tras verificación.'};
 writeFileSync('.cache/last-update.json',JSON.stringify(report,null,2)+'\n');
 if(!dry&&!same){writeFileSync('data/status.json.next',readFileSync(file));renameSync('data/status.json.next','data/status.json');build();}
 console.log(JSON.stringify(report,null,2));
}catch(e){writeFileSync('.cache/last-error.txt',new Date().toISOString()+'\n'+e.message+'\n');console.error('ERROR: actualización no aplicada. Ver .cache/last-error.txt. '+e.message);process.exitCode=1;}
finally{rmSync(temp,{recursive:true,force:true});rmSync('.cache/update.lock',{recursive:true});}
