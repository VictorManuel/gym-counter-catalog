import {mkdirSync,copyFileSync,readFileSync,cpSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {validate} from './lib.mjs';
export function build(out='dist',snapshot='data/status.json'){
 validate(JSON.parse(readFileSync(snapshot,'utf8')));mkdirSync(out,{recursive:true});
 for(const f of ['index.html','styles.css','app.mjs','model.mjs','manual.mjs'])copyFileSync('src/'+f,out+'/'+f);
 cpSync('src/manual-assets',out+'/manual-assets',{recursive:true});
 copyFileSync(snapshot,out+'/status.json');copyFileSync('src/favicon.svg',out+'/favicon.svg');
 console.log('Build estático validado.');
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))build();
