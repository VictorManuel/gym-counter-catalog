import {test,expect} from '@playwright/test';
test('comparación, métricas, búsqueda, filtros, teclado y CSV',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');await expect(page.locator('#result-count')).toContainText('20 de 20');
 await expect(page.locator('thead th')).toHaveText(['Funcionalidad','staging','main']);
 const s=await (await page.request.get('/status.json')).json();
 for(const branch of ['staging','main']){const counts=['implemented','partial','pending','unverified'].map(state=>s.features.filter(f=>f.branches[branch].status===state).length);await expect(page.getByRole('article',{name:`Resumen ${branch}`}).locator('.counts b')).toHaveText(counts.map(String));}
 await page.getByLabel('Buscar en el catálogo').fill('SINCRONIZACION');await expect(page.locator('#result-count')).not.toContainText('0 de 20');
 await page.getByRole('button',{name:'Limpiar filtros ↗'}).click();await page.getByLabel('Categoría',{exact:true}).selectOption('Cuenta y acceso');await page.getByLabel('Estado',{exact:true}).selectOption('pending');await page.getByLabel('Buscar estado en').selectOption('main');await expect(page.locator('#result-count')).toContainText('2 de 20');
 const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Exportar CSV'}).click();const download=await downloadPromise;const stream=await download.createReadStream();let text='';for await(const chunk of stream)text+=chunk;expect(text).toContain('Recuperar contraseña');expect(text).not.toContain('Widget de entrenamiento');expect(text).toContain(s.snapshotAt);expect(text.split('\r\n')).toHaveLength(6);
 await page.getByLabel('Buscar estado en').selectOption('staging');const stagingMatches=s.features.filter(f=>f.category==='Cuenta y acceso'&&f.branches.staging.status==='pending').length;await expect(page.locator('#result-count')).toContainText(`${stagingMatches} de 20`);await page.getByLabel('Buscar en el catálogo').fill('capacidad-inexistente-000');await expect(page.getByText('No hay capacidades con estos filtros')).toBeVisible();await page.getByRole('button',{name:'Limpiar filtros',exact:true}).click();await expect(page.locator('#result-count')).toContainText('20 de 20');
 const summary=page.locator('#GC-001 summary');await summary.focus();await page.keyboard.press('Enter');await expect(page.locator('#GC-001')).toHaveAttribute('open','');await expect(page.getByRole('region',{name:'Detalle main de GC-001'})).toContainText('Revisión estática');
 await expect(page.locator('#GC-001 a').first()).toHaveAttribute('href',new RegExp('/blob/'+s.branches.main.commit+'/.*#L\\d+-L\\d+'));
 await expect(page.locator('#timeline-list')).toContainText('Sin fecha histórica registrada');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 await page.screenshot({path:`test-results/${test.info().project.name}.png`,fullPage:true});expect(errors).toEqual([]);
});
test('fallo de datos no produce estados ficticios',async({page})=>{await page.route('**/status.json',route=>route.fulfill({status:503,body:'unavailable'}));await page.goto('/');await expect(page.getByRole('alert')).toContainText('No se pudo leer el inventario');await expect(page.locator('#export')).toBeDisabled();});
