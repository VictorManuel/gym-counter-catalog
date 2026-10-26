import {test,expect} from '@playwright/test';
test('comparación, métricas, búsqueda, filtros, teclado y CSV',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');const s=await (await page.request.get('/status.json')).json();const total=s.features.length;await expect(page.locator('#result-count')).toContainText(`${total} de ${total}`);
 await expect(page.locator('thead th')).toHaveText(['Funcionalidad','staging','main']);

 for(const branch of ['staging','main']){const counts=['implemented','partial','pending','unverified'].map(state=>s.features.filter(f=>f.branches[branch].status===state).length);await expect(page.getByRole('article',{name:`Resumen ${branch}`}).locator('.counts b')).toHaveText(counts.map(String));}
 await page.getByLabel('Buscar en el catálogo').fill('SINCRONIZACION');await expect(page.locator('#result-count')).not.toContainText(`0 de ${total}`);
 await page.getByRole('button',{name:'Limpiar filtros ↗'}).click();await page.getByLabel('Categoría',{exact:true}).selectOption('Cuenta y acceso');await page.getByLabel('Estado',{exact:true}).selectOption('pending');await page.getByLabel('Buscar estado en').selectOption('main');await expect(page.locator('#result-count')).toContainText(`${s.features.filter(f=>f.category==='Cuenta y acceso'&&f.branches.main.status==='pending').length} de ${total}`);
 const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Exportar CSV'}).click();const download=await downloadPromise;const stream=await download.createReadStream();let text='';for await(const chunk of stream)text+=chunk;expect(text).toContain('Recuperar contraseña');expect(text).not.toContain('Widget de entrenamiento');expect(text).toContain(s.snapshotAt);expect(text.split('\r\n')).toHaveLength(2+2*s.features.filter(f=>f.category==='Cuenta y acceso'&&f.branches.main.status==='pending').length);
 await page.getByLabel('Buscar estado en').selectOption('staging');const stagingMatches=s.features.filter(f=>f.category==='Cuenta y acceso'&&f.branches.staging.status==='pending').length;await expect(page.locator('#result-count')).toContainText(`${stagingMatches} de ${total}`);await page.getByLabel('Buscar en el catálogo').fill('capacidad-inexistente-000');await expect(page.getByText('No hay capacidades con estos filtros')).toBeVisible();await page.getByRole('button',{name:'Limpiar filtros',exact:true}).click();await expect(page.locator('#result-count')).toContainText(`${total} de ${total}`);
 const summary=page.locator('#GC-001 summary');await summary.focus();await page.keyboard.press('Enter');await expect(page.locator('#GC-001')).toHaveAttribute('open','');await expect(page.getByRole('region',{name:'Detalle main de GC-001'})).toContainText('Revisión estática');
 for(const branch of ['staging','main']) await expect(page.getByRole('region',{name:`Detalle ${branch} de GC-001`}).getByRole('link').first()).toHaveAttribute('href',s.features.find(f=>f.id==='GC-001').branches[branch].evidence[0].url);
 await expect(page.locator('#timeline-list')).toContainText('Sin fecha histórica registrada');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 await page.screenshot({path:`test-results/${test.info().project.name}.png`,fullPage:true});expect(errors).toEqual([]);
});
test('fallo de datos no produce estados ficticios',async({page})=>{await page.route('**/status.json',route=>route.fulfill({status:503,body:'unavailable'}));await page.goto('/');await expect(page.getByRole('alert')).toContainText('No se pudo leer el inventario');await expect(page.locator('#export')).toBeDisabled();});

test('manual visual, capturas y acceso al inventario sin depender de filtros',async({page})=>{
 await page.goto('/');const snapshot=await (await page.request.get('/status.json')).json();
 await page.getByRole('link',{name:'Manual',exact:true}).click();
 await expect(page.getByRole('heading',{name:'Manual de la aplicación',exact:true})).toBeVisible();
 await expect(page.locator('#manual-feature-list [data-manual-feature]')).toHaveCount(snapshot.features.length);
 await expect(page.locator('#manual .flow-track')).toHaveCount(3);
 for(const image of await page.locator('#manual .manual-screen img').all()){await image.scrollIntoViewIfNeeded();await expect.poll(()=>image.evaluate(e=>e.complete&&e.naturalWidth>0)).toBe(true);}
 await page.getByLabel('Buscar en el catálogo').fill('capacidad-inexistente-000');
 await expect(page.locator('#manual-feature-list [data-manual-feature]')).toHaveCount(snapshot.features.length);
 await page.locator('#manual-feature-list [data-manual-feature="GC-002"]').click();
 await expect(page.locator('#GC-002')).toHaveAttribute('open','');
 await expect(page.locator('#result-count')).toContainText(`${snapshot.features.length} de ${snapshot.features.length}`);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
});
