import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {manualInventory} from '../src/manual.mjs';
const data=JSON.parse(readFileSync('data/status.json','utf8'));
test('el listado del manual conserva todas las funcionalidades y ambas ramas',()=>{
 const html=manualInventory(data.features);
 assert.equal((html.match(/data-manual-feature=/g)||[]).length,data.features.length);
 for(const f of data.features){assert.ok(html.includes(f.id));assert.ok(html.includes(f.name));}
 assert.equal((html.match(/<b>staging<\/b>/g)||[]).length,data.features.length);
 assert.equal((html.match(/<b>main<\/b>/g)||[]).length,data.features.length);
});
test('el manual escapa texto del snapshot en vez de inyectar HTML',()=>{
 const base=data.features[0];const html=manualInventory([{...base,name:'<img src=x onerror=alert(1)>',description:'<script>bad</script>',category:'<test>'}]);
 assert.ok(html.includes('&lt;img'));assert.ok(!html.includes('<img'));assert.ok(!html.includes('<script>'));assert.ok(html.includes('&lt;test&gt;'));
});
test('capturas publicables tienen procedencia e integridad y dimensiones reales',()=>{
 const p=JSON.parse(readFileSync('src/manual-assets/provenance.json','utf8'));assert.equal(p.images.length,4);
 for(const image of p.images){assert.match(image.file,/^portal-[a-z]+\.png$/);const b=readFileSync('src/manual-assets/'+image.file);assert.deepEqual([...b.subarray(0,8)],[137,80,78,71,13,10,26,10]);assert.ok(image.width>0&&image.width<=2560);assert.ok(image.height>0&&image.height<=4000);assert.equal(createHash('sha256').update(b).digest('hex'),image.sha256);assert.equal(b.readUInt32BE(16),image.width);assert.equal(b.readUInt32BE(20),image.height);assert.match(image.origin,/datos ficticios/);}
});
test('manual al final incluye advertencias, gráficos, captura y listado',()=>{
 const html=readFileSync('src/index.html','utf8');
 assert.ok(html.indexOf('id="manual"')>html.indexOf('id="metodologia"'));
 assert.equal((html.match(/class="manual-screen"/g)||[]).length,4);
 assert.equal((html.match(/class="flow-track"/g)||[]).length,3);
 assert.ok(html.includes('No alternes alumnos'));assert.ok(html.includes('no está desplegado'));
 assert.ok(html.includes('id="manual-feature-list"'));
});

test('verificación actual no afirma igualdad de ramas con SHAs distintos',()=>{
 if(data.branches.staging.commit!==data.branches.main.commit){
  for(const f of data.features) assert.doesNotMatch(f.branches.staging.verification,/coinciden exactamente|mismo commit que main/i);
 }
});
