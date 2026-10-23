# Gym Counter — catálogo verificable

Sitio estático independiente. No despliega la aplicación ni copia sus fuentes privadas.

## Ejecutar y verificar

Node >=22, npm (gestor establecido en la fuente) y Chrome para E2E.

```sh
npm ci
npm run update-project-status -- --dry-run
npm run update-project-status
npm test
npm run build
npm run dev
# http://127.0.0.1:4173
npm run test:e2e
```

## Fuente de verdad y evidencia

- `capabilities.md`: inventario Markdown curado; bloque JSON editable y validado.
- `project.json`: repo y ramas remotas, sin credenciales.
- `data/status.json`: snapshot público y timeline acumulativa.
- `src/`: presentación separada de generación.
- `.cache/last-update.json` y `.cache/last-error.txt`: reportes ignorados, nunca publicar.

El actualizador consulta ls-remote y descarga cada SHA a un Git bare temporal. No lee
cambios locales ni modifica fuentes o bases de datos. Autenticación por helper Git o
entorno, jamás por secretos en archivos. Se fija cada revisión a objetos de evidencia
más contexto (`guards`). Si cualquier objeto cambia, pasa a Sin verificar: no se infiere
implementación ni regresión. No se descubren capacidades nuevas automáticamente.

Para una revisión nueva: leer código e integración en cada rama, actualizar notas y
roadmap, y recién después fijar commit, blobs, rangos y guards de la revisión. No basta
renovar hashes. Ampliar guards al árbol de rutas/contexto para detectar archivos nuevos.
Los enlaces generados usan SHA remoto cuyos objetos siguen coincidiendo con la revisión.
Nunca copiar fragmentos privados. Pendiente requiere inspección del punto de entrada;
un roadmap solo no demuestra presencia ni ausencia de implementación.

Implementado significa implementación estáticamente revisada, no pruebas funcionales.
Verificación, integración, publicación y despliegue son independientes. No se consultó
producción ni tiendas: su disponibilidad queda Sin verificar.

## Timeline y no-op

El primer snapshot registra cada capacidad ya implementada con fecha histórica null,
por rama. Primeras detecciones posteriores usan fecha de observación, nunca fecha real
de implementación ni fecha Git. Eventos sobreviven a retiros, renombres y regresiones.
No borrar snapshot ni reciclar IDs. Sin cambios se conservan fecha y bytes anteriores.

--dry-run corre reglas, validaciones, tests y build temporal; no escribe snapshot,
timeline ni dist y no hace commit/despliegue. Solo escribe reporte local ignorado.
Un error conserva datos anteriores y last-error.txt. Rama ausente no es fallo de red:
queda ausente y Sin verificar. Un error de acceso/red aborta, no simula ausencia.
Lock de exclusión mutua entre actualización y publicación; nunca limpiar cambios del usuario.

## Publicar gratis en GitHub Pages

Repo público independiente VictorManuel/gym-counter-catalog. Pages sirve solo assets de
la raíz gh-pages: HTML, CSS/JS, favicon, .nojekyll y status.json. main contiene únicamente
fuentes del catálogo y resúmenes públicos; no hay código privado de la aplicación.
Sin cron, planes pagos ni secretos en Actions.

Inicial: verificar; crear repo público con gh repo create; push main;
`node scripts/deploy-pages.mjs`; habilitar Pages por API (source gh-pages, path /);
`node scripts/verify-pages.mjs`. Si exige pago, detener y consultar.

Actualización autorizada de datos:

```sh
npm run update-project-status
npm run publish:snapshot
```

Publicador rechaza cambios distintos a datos generados, corre tests/build/E2E,
confirma base remota, hace commit solo del snapshot y despliega assets mediante Git
temporal. Verifica igualdad exacta del JSON servido antes de afirmar éxito.
No force push ni checkout/reset/clean del árbol del usuario. Si no cambió nada, no
hace commit ni despliegue; si falló publicación previa, permite recuperar solo assets
faltantes/diferentes. Código/definiciones requieren revisión y commit explícitos.
La autorización futura cubre datos generados y despliegue Pages resultante, no apps.
Ver AGENTS.md: obligación de cierre incluida la tarea que queda solamente local.

## Pendientes conocidos

- staging remota ausente; ninguna rama de trabajo la sustituye.
- Auditoría estática, sin nueva aceptación funcional de las aplicaciones.
- Evidencia privada requiere acceso.
- Avances locales y de otras ramas no cuentan como integrados en main.
- Publicación y despliegue de aplicaciones sin verificar.
