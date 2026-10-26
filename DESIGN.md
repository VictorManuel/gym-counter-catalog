# Diseño — catálogo de Gym Counter

Modo lectura y comparación, no comercial. Hereda identidad oscura y lima del portal
existente. No se necesita la paleta alternativa porque existe una identidad fuente.

Fondo #0b0d0c; superficies #141a16; texto #edf2ed; secundario #a4afa6;
separadores #2b332d; acento #b9f227; pendientes #efb5c6; parciales #f5d890.
Tipografía del sistema; IDs y commits monoespaciados. Sin animaciones.
Apertura editorial con fecha y referencias; tabla central con ambas ramas también
en móvil. Estado con símbolo y texto; foco visible y controles nativos de teclado.

## Extensión de lectura: manual

El manual al final de la página extiende la superficie editorial existente; no
introduce otra identidad ni modifica sus tokens, tipografía o controles. Conserva
fondo oscuro, superficies y separadores tonales, acento lima para navegación y
pasos, y el tratamiento rosado de advertencia para límites y cuidado de datos.
El listado completo reutiliza los IDs y estados por rama del inventario, sin
depender de los filtros de la tabla.

Las imágenes son cuatro capturas reales del portal local con API simulada y datos
ficticios: resumen, invitaciones, editor y asignación. No son imágenes generadas
ni prueba de producción, integración, envío de correo o sesión end-to-end. Cada
captura conserva texto alternativo, pie contextual y enlace a tamaño completo;
la procedencia, dimensiones y hashes están en
`src/manual-assets/provenance.json`. Esta edición no incluye capturas Android ni
iOS: la guía móvil es textual y explicita esa diferencia.

Las capturas conservan su proporción y ocupan el ancho disponible junto a la
explicación; pasan a una columna hasta (800px). Los tres flujos son listas
ordenadas semánticas dentro de figuras con títulos: sus conexiones se dibujan
con CSS, no con imágenes ni animaciones. Se organizan en cuatro columnas, dos
hasta (800px) y una hasta (540px); las flechas cambian según la disposición sin
sustituir el orden de lectura. A ese último ancho, la guía y los estados del
listado también se reorganizan para lectura móvil.

Mantener navegación interna nativa, foco visible y explicaciones que distingan
demostración sintética de estado verificado. No añadir capturas con personas
reales, secretos o datos de alumnos; tampoco presentar las pantallas del portal
como evidencia visual de Android.
