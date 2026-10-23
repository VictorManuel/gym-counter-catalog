import {mkdtempSync,cpSync,writeFileSync,rmSync,readdirSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';import {join,resolve} from 'node:path';import {execFileSync} from 'node:child_process';import {fileURLToPath} from 'node:url';
const remote='https://github.com/VictorManuel/gym-counter-catalog.git';
export function deploy(){
 const dir=mkdtempSync(join(tmpdir(),'gym-pages-'));const run=(...args)=>execFileSync('git',['-C',dir,...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
 try{
  run('init','-q','--initial-branch=gh-pages');run('config','user.name','Gym Counter Catalog');run('config','user.email','1231352+VictorManuel@users.noreply.github.com');
  run('remote','add','origin',remote);
  const refs=run('ls-remote','--heads','origin','refs/heads/gh-pages');let parent;
  if(refs){parent=refs.split(/\s+/)[0];run('fetch','--quiet','--depth=1','origin',parent);}
  cpSync('dist',dir,{recursive:true});writeFileSync(join(dir,'.nojekyll'),'');
  run('add','--','.nojekyll',...readdirSync('dist'));
  const tree=run('write-tree');
  if(parent&&tree===run('rev-parse',parent+'^{tree}')){console.log('Assets sin diferencias: no se publica.');return false;}
  const snapshot=JSON.parse(readFileSync('data/status.json','utf8'));
  const commit=run('commit-tree',tree,...(parent?['-p',parent]:[]),'-m','Publish catalog snapshot '+snapshot.snapshotAt);
  run('push','origin',commit+':refs/heads/gh-pages');console.log('Assets publicados en gh-pages: '+commit);return true;
 }finally{rmSync(dir,{recursive:true,force:true});}
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))deploy();
