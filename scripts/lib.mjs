import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
export const git=(dir,...args)=>execFileSync('git',['--git-dir='+dir,...args],{encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:20e6}).trim();
export function definitions(text){const m=text.match(/```json\n([\s\S]+?)\n```/);if(!m)throw Error('Faltan definiciones JSON en Markdown');const data=JSON.parse(m[1]);const ids=new Set();for(const f of data){if(!/^GC-\d{3}$/.test(f.id)||ids.has(f.id))throw Error('ID inválido o duplicado');ids.add(f.id);for(const r of Object.values(f.reviews)){if(!/^[a-f0-9]{40}$/.test(r.commit)||!['implemented','partial','pending','unverified'].includes(r.status))throw Error('Review inválida');if(!r.guards.length||!r.evidence.length)throw Error('Review sin evidencia');if(r.status==='implemented'&&!r.evidence.some(e=>e.kind==='code'))throw Error('Un plan no demuestra implementación');}}return data;}
export function validate(s){
 if(s.schemaVersion!==1||!s.snapshotAt||!Array.isArray(s.features)||!Array.isArray(s.timeline))throw Error('Snapshot inválido');
 const keys=new Set();for(const f of s.features){for(const branch of ['staging','main']){const b=f.branches[branch];if(!b||!['implemented','partial','pending','unverified'].includes(b.status))throw Error('Estado inválido');if(b.status==='implemented'&&!b.evidence.some(e=>e.kind==='code'))throw Error('Implementación sin código');for(const e of b.evidence)if(!e.url.includes('/blob/'+b.commit+'/')||!/#L\d+-L\d+$/.test(e.url)||e.start>e.end)throw Error('Evidencia no fijada');}}
 for(const e of s.timeline){const k=e.capabilityId+':'+e.branch;if(keys.has(k)||!['main','staging'].includes(e.branch)||!((e.baseline&&e.detectedAt===null)||(!e.baseline&&Number.isFinite(Date.parse(e.detectedAt)))))throw Error('Timeline inválida');keys.add(k);}return true;
}
export function reviewBranch(dir,commit,f,branch,config){
 const base={status:'unverified',commit:commit??null,verification:'Sin verificar',integration:commit?'Referencia remota analizada':'Referencia remota ausente',publication:'Sin verificar',deployment:'Sin verificar',evidence:[],reviewRequired:true,reason:commit?'Sin revisión curada para esta rama.':'No existe refs/heads/'+branch+'.'};
 if(!commit)return base;const r=f.reviews[branch];if(!r)return base;
 const valid=r.guards.every(g=>{try{return git(dir,'rev-parse',commit+':'+g.path)===g.object;}catch{return false;}});
 if(!valid)return {...base,reason:'Cambió evidencia o contexto: requiere revisión manual. No se infiere el estado.'};
 const evidence=r.evidence.map(e=>{const lines=git(dir,'show',commit+':'+e.path).split('\n').length;if(e.start<1||e.end>lines||git(dir,'rev-parse',commit+':'+e.path)!==e.blob)throw Error('Líneas u objeto inválidos: '+f.id+' '+e.path);return {...e,url:config.webUrl+'/blob/'+commit+'/'+e.path+'#L'+e.start+'-L'+e.end,requiresAccess:config.private};});
 return {...base,status:r.status,verification:r.verification,integration:'Código/documentación presente en '+branch+' remoto',evidence,reviewRequired:r.status==='unverified',reason:'Revisión curada; objetos de evidencia y contexto sin cambios.'};
}
export const loadJSON=p=>JSON.parse(readFileSync(p,'utf8'));
