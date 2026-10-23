import {mkdirSync,copyFileSync,readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {validate} from './lib.mjs';
export function build(out='dist',snapshot='data/status.json'){
 validate(JSON.parse(readFileSync(snapshot,'utf8')));mkdirSync(out,{recursive:true});
 for(const f of ['index.html','styles.css','app.mjs','model.mjs'])copyFileSync('src/'+f,out+'/'+f);
 copyFileSync(snapshot,out+'/status.json');copyFileSync('src/favicon.svg',out+'/favicon.svg');
 console.log('Build estático validado.');
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))build();
