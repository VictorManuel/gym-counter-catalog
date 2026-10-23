import {test} from 'node:test';import assert from 'node:assert/strict';import {mkdtempSync,mkdirSync,cpSync,writeFileSync,readFileSync,rmSync} from 'node:fs';import {join} from 'node:path';import {tmpdir} from 'node:os';import {execFileSync,spawnSync} from 'node:child_process';
test('CLI aislada: no-op, dry-run, timeline persistente, revisión, lock y fallo conservador',()=>{
 const root=mkdtempSync(join(tmpdir(),'catalog-cli-'));const source=join(root,'source'),catalog=join(root,'catalog');mkdirSync(source);mkdirSync(catalog);
 const git=(...a)=>execFileSync('git',['-C',source,...a],{encoding:'utf8'}).trim();
 const update=(...args)=>spawnSync(process.execPath,['scripts/update-project-status.mjs',...args],{cwd:catalog,encoding:'utf8'});
 const get=()=>readFileSync(join(catalog,'data/status.json'),'utf8');
 try{
  git('init','-q','--initial-branch=main');git('config','user.name','Fixture');git('config','user.email','test@example.invalid');writeFileSync(join(source,'feature.txt'),'connected implementation\n');git('add','.');git('commit','-qm','fixture');const commit=git('rev-parse','HEAD'),blob=git('rev-parse','HEAD:feature.txt');
  for(const p of ['scripts','src','test'])cpSync(p,join(catalog,p),{recursive:true});mkdirSync(join(catalog,'data'));
  writeFileSync(join(catalog,'project.json'),JSON.stringify({name:'Fixture',repository:source,webUrl:'https://github.com/fixture/private',private:true,branches:['staging','main']}));
  const review=status=>({commit,status,verification:'Static',guards:[{path:'feature.txt',object:blob}],evidence:[{path:'feature.txt',blob,start:1,end:1,kind:'code'}]});
  const defs=[{id:'GC-001',name:'Baseline',description:'Fixture',category:'Fixture',phase:'Base',notes:'Fixture',reviews:{main:review('implemented')}},{id:'GC-002',name:'Later',description:'Fixture',category:'Fixture',phase:'Base',notes:'Fixture',reviews:{main:review('pending')}}];
  const save=()=>writeFileSync(join(catalog,'capabilities.md'),'```json\n'+JSON.stringify(defs)+'\n```');save();
  let r=update();assert.equal(r.status,0,r.stderr+r.stdout);const initial=get();assert.equal(JSON.parse(initial).timeline[0].detectedAt,null);
  r=update();assert.equal(r.status,0,r.stderr);assert.equal(get(),initial);assert.equal(JSON.parse(readFileSync(join(catalog,'.cache/last-update.json'))).changed,false);
  defs[1].reviews.main.status='implemented';save();r=update('--dry-run');assert.equal(r.status,0,r.stderr);assert.equal(get(),initial);r=update();assert.equal(r.status,0,r.stderr);const next=JSON.parse(get());assert.equal(next.timeline.length,2);assert.ok(next.timeline[1].detectedAt);assert.equal(next.timeline[0].detectedAt,null);
  writeFileSync(join(source,'feature.txt'),'changed context\n');git('add','.');git('commit','-qm','context change');r=update();assert.equal(r.status,0,r.stderr);const invalidated=JSON.parse(get());assert.equal(invalidated.features[0].branches.main.status,'unverified');assert.deepEqual(invalidated.timeline,next.timeline);
  const safe=get();mkdirSync(join(catalog,'.cache/update.lock'));r=update();assert.equal(r.status,1);assert.equal(get(),safe);rmSync(join(catalog,'.cache/update.lock'),{recursive:true});
  writeFileSync(join(catalog,'project.json'),JSON.stringify({name:'Fixture',repository:join(root,'missing.git'),branches:['staging','main']}));r=update();assert.equal(r.status,1);assert.equal(get(),safe);assert.ok(readFileSync(join(catalog,'.cache/last-error.txt'),'utf8').includes('ERROR')||r.stderr.includes('ERROR'));
 }finally{rmSync(root,{recursive:true,force:true});}
});
