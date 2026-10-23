# Catálogo verificable de Gym Counter

## Límites
- `capabilities.md` es la fuente Markdown curada. No usar ClickUp ni otro gestor.
- Nunca publicar código privado, texto interno, secretos ni datos personales de la aplicación.
- Fuente privada solo se lee en Git temporal aislado; nunca checkout/reset/clean/commit/push/migraciones allí.
- staging ausente queda ausente. Código local no equivale a integración; main no equivale a producción.

## Obligación al cerrar cada tarea
1. Revisar cambios a funcionalidades, limitaciones, flags, dependencias o roadmap. Si cambian, auditar código/documentación remotos y revisar manualmente `capabilities.md`: IDs estables, evidencia por rama, rangos y objetos Git. No renovar hashes sin leer cambios. Nuevas capacidades siempre requieren alta humana.
2. Si la tarea fuente queda solo local, ejecutar `npm run update-project-status -- --dry-run` desde este catálogo. Informar que NO se refleja en el catálogo público; sincronización pendiente hasta integración/publicación autorizada. Nunca subir la aplicación para actualizar el catálogo.
3. Si está integrada, ejecutar `npm run update-project-status`, `npm test`, `npm run build`, `npm run test:e2e`. Revisar `.cache/last-update.json`; resolver o informar pendientes de revisión sin falsear estados.
4. Si solo cambia `data/status.json`, están autorizados commit/push de ese archivo y Pages gratuito con `npm run publish:snapshot`. No incluir cambios ajenos. Código y definiciones curadas siguen revisión/permisos del proyecto; no autoaprobarlos.
5. Sin diferencias no generar commits ni despliegues. Verificar URL servida e igualdad exacta del snapshot. Si falla acceso, validación o publicación, conservar error y reportar pendiente. Separar verificado localmente / publicado en catálogo / desplegado en aplicaciones.

Sin cron ni automatizaciones periódicas. Lock compartido entre actualización y publicación; nunca borrar locks ajenos. Tras aborto, verificar que no haya proceso activo antes de recuperación manual.

## Veracidad
- implemented exige código e integración estática revisada, no solo plan. partial conserva limitaciones. pending exige plan e inspección del punto de entrada; ante duda, unverified.
- Cambios en objetos guard/evidencia invalidan revisión; detectar cambio no demuestra regresión ni implementación.
- Timeline append-only por ID/rama; baseline con fecha null. No reciclar IDs ni sustituir fechas por fechas Git.
