import {execFileSync} from 'node:child_process';import {mkdirSync,rmSync,writeFileSync} from 'node:fs';import {dirname,join} from 'node:path';import {fileURLToPath} from 'node:url';import {deploy} from './deploy-pages.mjs';import {verify} from './verify-pages.mjs';
process.chdir(join(dirname(fileURLToPath(import.meta.url)),'..'));
const run=(cmd,args)=>execFileSync(cmd,args,{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
mkdirSync('.cache',{recursive:true});try{mkdirSync('.cache/update.lock');}catch{console.error('Actualización o publicación en curso; no se toca su lock.');process.exit(1);}
try{
 const changes=run('git',['status','--porcelain=v1','--untracked-files=all']).split('\n').filter(Boolean);
 // Do not trim leading porcelain status spaces before parsing paths.
 const raw=execFileSync('git',['status','--porcelain=v1','--untracked-files=all'],{encoding:'utf8'}).split('\n').filter(Boolean);
 if(raw.some(l=>l.slice(3)!=='data/status.json'||l.slice(0,2).includes('D')||l.slice(0,2).includes('R')))throw Error('Hay cambios ajenos a data/status.json. Revisión y commit explícito requeridos; no se publican.');
 if(run('git',['branch','--show-current'])!=='main')throw Error('Publicación solo desde main del catálogo.');
 const remote=run('git',['remote','get-url','origin']);if(!/^https:\/\/github\.com\/VictorManuel\/gym-counter-catalog(?:\.git)?$/.test(remote))throw Error('Remoto no autorizado.');
 const remoteMain=run('git',['ls-remote','origin','refs/heads/main']).split(/\s+/)[0];const head=run('git',['rev-parse','HEAD']);
 if(head!==remoteMain){
  // Only recover one previous generated-data commit after a failed push.
  const parent=run('git',['rev-parse','HEAD^']);const files=run('git',['diff-tree','--no-commit-id','--name-only','-r','HEAD']);
  if(parent!==remoteMain||files!=='data/status.json')throw Error('main no coincide con remoto; resolver manualmente sin sobrescribir cambios.');
 }
 for(const script of ['test','build','test:e2e'])execFileSync('npm',['run',script],{stdio:'inherit'});
 if(changes.length){run('git',['add','--','data/status.json']);run('git',['-c','user.name=Gym Counter Catalog','-c','user.email=1231352+VictorManuel@users.noreply.github.com','commit','-m','Update verified project status snapshot']);}
 if(changes.length||head!==remoteMain)run('git',['push','origin','HEAD:refs/heads/main']);
 deploy();await verify();
}catch(e){writeFileSync('.cache/last-error.txt',new Date().toISOString()+'\n'+e.message+'\n');console.error(e.message);process.exitCode=1;}
finally{rmSync('.cache/update.lock',{recursive:true});}
