# Manual visual de Gym Counter

El manual público se encuentra al final del catálogo, en `#manual`.
Su propósito es explicar el uso sin convertir una demostración en prueba de producción.

## Contenido de esta edición

- Cuatro capturas reales del portal ejecutado localmente con una API simulada:
  resumen, invitaciones, editor de borrador y asignación desde el perfil.
- Explicaciones de controles y pasos junto a cada captura, con enlace a resolución completa.
- Guía textual Android: descargar/activar, registrar, pausar, finalizar, historial y sincronización.
- Tres gráficos semánticos: profesor→alumno; borrador→asignación; offline→sincronización.
- Listado completo desde el mismo snapshot del inventario, sin depender de filtros.
- Límites actuales: cambio de cuenta Android, iOS, correo aún local y ciclo de cuenta pendiente.

No se muestran ni se publican cuentas reales, contraseñas, tokens, enlaces de invitación,
código privado, secretos o datos de producción. Las personas y emails `.invalid` son ficticios.
La fecha mostrada en los formularios es ilustrativa, no un hito histórico del producto.
No hay capturas Android/iOS en esta edición; no se presentan gráficos como si fueran capturas.

## Procedencia y mantenimiento

`src/manual-assets/provenance.json` registra baseline de interfaz, dimensiones y SHA256 de cada PNG.
Cada imagen también lleva su procedencia en metadata PNG. Son capturas CUA de interfaz real,
con conversión de formato sin alterar contenido; no imágenes generadas por IA.
La API sintética de captura no se publica y no consulta ninguna base de datos.

La guía está redactada en `src/index.html`; estilos y estados del listado se implementan en
`src/styles.css` y `src/manual.mjs`. Los estados no se escriben a mano en el manual:
proceden de `data/status.json`, generado desde `capabilities.md` tras revisión por rama.
El código local de una aplicación no se promueve automáticamente a implementado en main/staging.

Al actualizar una pantalla:

1. Capturar la interfaz real con datos ficticios en un entorno documental separado.
2. No usar una sesión real de profesor/alumno ni instalar tests sobre dispositivos con datos.
3. Comprobar contenido visual, formato PNG, tamaño, alt y correspondencia con la explicación.
4. Actualizar metadata y manifest de integridad, sin copiar código privado al catálogo.
5. Repetir tests, build y E2E escritorio/móvil; solicitar revisión independiente del diff final.

## Publicación verificada

El build copia las imágenes, el manifest y el módulo del manual.
El verificador de Pages compara el snapshot y todos los assets del manual con los archivos locales.
Las pruebas de navegador no asumen un número fijo de funciones ni igualdad de SHA entre ramas.
Cualquier publicación debe pasar el publicador con árbol limpio o solo cambios del snapshot;
los cambios curados/de código se revisan y versionan explícitamente antes, bajo autorización.

Publicar el catálogo no despliega Gym Counter, Resend ni una base de datos.
