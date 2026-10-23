export const states = {implemented:'Implementado',partial:'Parcial',pending:'Pendiente',unverified:'Sin verificar'};
export const symbols = {implemented:'✓',partial:'◐',pending:'○',unverified:'?'};
export const normalize = s => String(s).normalize('NFD').replace(/\p{Diacritic}/gu,'').toLocaleLowerCase('es');
export function select(items,{query='',category='',status='',branch='either'}={}) {
  const q=normalize(query.trim());
  return items.filter(f => (!q || normalize([f.id,f.name,f.description,f.notes,f.category,f.phase].join(' ')).includes(q)) && (!category||f.category===category) && (!status || (branch==='either'?Object.values(f.branches):[f.branches[branch]]).some(b=>b.status===status)));
}
export function metrics(items,branch){return Object.fromEntries(Object.keys(states).map(s=>[s,items.filter(f=>f.branches[branch].status===s).length]));}
export function timeline(previous,items,at,baseline=false){
  const out=structuredClone(previous);
  for(const f of items) for(const [branch,b] of Object.entries(f.branches)) {
    if(b.status==='implemented' && !out.some(e=>e.capabilityId===f.id&&e.branch===branch)) out.push({capabilityId:f.id,branch,detectedAt:baseline?null:at,baseline,commit:b.commit});
  }
  return out;
}
const cell=s=>'"'+String(s??'').replace(/^[=+@\-\t\r]/,"'$&").replaceAll('"','""')+'"';
export function csv(items,snapshot){
  const rows=[['ID','Funcionalidad','Categoría','Hito','Rama','Estado','Verificación','Integración','Publicación aplicación','Despliegue aplicación','Snapshot','Commit','Primera detección','Notas','Evidencia']];
  for(const f of items) for(const [branch,b] of Object.entries(f.branches)){
    const e=snapshot.timeline.find(e=>e.capabilityId===f.id&&e.branch===branch);
    rows.push([f.id,f.name,f.category,f.phase,branch,states[b.status],b.verification,b.integration,b.publication,b.deployment,snapshot.snapshotAt,b.commit,e?(e.detectedAt??'Sin fecha histórica registrada'):'Sin detección de implementación',f.notes,b.evidence.map(e=>e.url).join(' | ')]);
  }
  return '\uFEFF'+rows.map(r=>r.map(cell).join(',')).join('\r\n')+'\r\n';
}
