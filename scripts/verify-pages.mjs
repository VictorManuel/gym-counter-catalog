import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';import {createHash} from 'node:crypto';import {resolve} from 'node:path';import {fileURLToPath} from 'node:url';
export const url='https://victormanuel.github.io/gym-counter-catalog/';
export async function verify(){
 const expected=readFileSync('data/status.json','utf8');const hash=x=>createHash('sha256').update(x).digest('hex');
 for(let attempt=0;attempt<24;attempt++){
  try{
   const bust='?snapshot='+hash(expected).slice(0,12)+'&attempt='+attempt;
   const [html,json]=await Promise.all([fetch(url+bust,{signal:AbortSignal.timeout(20000)}),fetch(url+'status.json'+bust,{signal:AbortSignal.timeout(20000)})]);
   const text=await json.text();if(html.ok&&json.ok&&hash(text)===hash(expected)){
    // Verify all served presentation assets too: no false success with stale UI.
    const checks=await Promise.all(['index.html','styles.css','app.mjs','model.mjs','favicon.svg'].map(async f=>{const response=await fetch(url+f+bust,{signal:AbortSignal.timeout(20000)});return response.ok&&hash(Buffer.from(await response.arrayBuffer()))===hash(readFileSync('dist/'+f));}));
    if(checks.every(Boolean)){const result={url,verifiedAt:new Date().toISOString(),snapshotAt:JSON.parse(text).snapshotAt,sha256:hash(text),assetsVerified:true};mkdirSync('.cache',{recursive:true});writeFileSync('.cache/last-publication.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));return result;}
   }
  }catch{/* Record terminal failure below, allow bounded Pages propagation. */}
  if(attempt<23)await new Promise(r=>setTimeout(r,10000));
 }
 throw Error('Pages no sirve los assets y snapshot esperados. No afirmar publicación; reintentar verificación.');
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{await verify();}catch(e){mkdirSync('.cache',{recursive:true});writeFileSync('.cache/last-error.txt',new Date().toISOString()+'\n'+e.message+'\n');console.error(e.message);process.exitCode=1;}}
