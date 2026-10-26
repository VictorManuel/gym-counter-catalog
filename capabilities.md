# Inventario curado — Gym Counter

Fuente de verdad del catálogo: este Markdown. Descripciones redactadas para publicación;
no reproduce documentación privada. IDs permanentes; no reciclar ni borrar historial.
Cada review solo aplica a una rama y a los objetos Git revisados. Un cambio invalida
la revisión, no demuestra implementación ni regresión. La revisión de código no es
una prueba de funcionamiento. Pendiente exige plan más inspección de puntos de entrada.
El roadmap privado gobierna prioridades; los hitos siguientes son resúmenes públicos,
no fechas comprometidas. Para nuevas capacidades hace falta auditoría y alta manual.

## Alcance de staging

Rama creada desde main remoto a pedido del usuario. Se usa para comparación de
código; todavía no se realizan despliegues sobre staging. Igualdad de commit
permite revisar el mismo código, no acredita un entorno disponible. Las primeras
detecciones de staging registran la observación del catálogo, no una fecha histórica
de implementación. El historial anterior de main se conserva.

## Definiciones estructuradas

```json
[
  {
    "id": "GC-001",
    "name": "Acceso con cuenta",
    "description": "Inicio, renovación y cierre de sesión.",
    "category": "Cuenta y acceso",
    "phase": "Base actual",
    "notes": "API y portal conectados. No implica auditoría integral de seguridad ni acceso público.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "backend/src/routes/auth.ts",
            "start": 26,
            "end": 68,
            "kind": "code",
            "blob": "d3b84d9307fe6e3ad20142cff5d2abf7d00d44cf"
          },
          {
            "path": "apps/coach-web/src/auth.tsx",
            "start": 1,
            "end": 42,
            "kind": "code",
            "blob": "a88145402acdb1b69eac10b5fc40fd8059bec5f5"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "apps/coach-web/src/auth.tsx",
            "object": "a88145402acdb1b69eac10b5fc40fd8059bec5f5"
          },
          {
            "path": "backend/src/auth-service.ts",
            "object": "b72352e8ac64df3147cea35e046659de39a68ee1"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes/auth.ts",
            "object": "d3b84d9307fe6e3ad20142cff5d2abf7d00d44cf"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "backend/src/routes/auth.ts",
            "start": 26,
            "end": 68,
            "kind": "code",
            "blob": "d3b84d9307fe6e3ad20142cff5d2abf7d00d44cf"
          },
          {
            "path": "apps/coach-web/src/auth.tsx",
            "start": 1,
            "end": 42,
            "kind": "code",
            "blob": "a88145402acdb1b69eac10b5fc40fd8059bec5f5"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "apps/coach-web/src/auth.tsx",
            "object": "a88145402acdb1b69eac10b5fc40fd8059bec5f5"
          },
          {
            "path": "backend/src/auth-service.ts",
            "object": "b72352e8ac64df3147cea35e046659de39a68ee1"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes/auth.ts",
            "object": "d3b84d9307fe6e3ad20142cff5d2abf7d00d44cf"
          }
        ]
      }
    }
  },
  {
    "id": "GC-002",
    "name": "Invitaciones a deportistas",
    "description": "Vinculación entre profesor y alumno mediante invitación.",
    "category": "Cuenta y acceso",
    "phase": "Base actual",
    "notes": "Activación y aceptación presentes. El envío de correo transaccional no está acreditado.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "backend/src/routes/coach.ts",
            "start": 53,
            "end": 89,
            "kind": "code",
            "blob": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          },
          {
            "path": "backend/src/routes/athlete.ts",
            "start": 9,
            "end": 33,
            "kind": "code",
            "blob": "b129f21de81a1661a6a4a6154faa86a10c6107a4"
          },
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 41,
            "end": 68,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          }
        ],
        "guards": [
          {
            "path": "backend/src/routes/athlete.ts",
            "object": "b129f21de81a1661a6a4a6154faa86a10c6107a4"
          },
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes/coach.ts",
            "object": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "backend/src/routes/coach.ts",
            "start": 53,
            "end": 89,
            "kind": "code",
            "blob": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          },
          {
            "path": "backend/src/routes/athlete.ts",
            "start": 9,
            "end": 33,
            "kind": "code",
            "blob": "b129f21de81a1661a6a4a6154faa86a10c6107a4"
          },
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 41,
            "end": 68,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          }
        ],
        "guards": [
          {
            "path": "backend/src/routes/athlete.ts",
            "object": "b129f21de81a1661a6a4a6154faa86a10c6107a4"
          },
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes/coach.ts",
            "object": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          }
        ]
      }
    }
  },
  {
    "id": "GC-003",
    "name": "Recuperar contraseña",
    "description": "Restablecimiento seguro de una contraseña olvidada.",
    "category": "Cuenta y acceso",
    "phase": "Antes del lanzamiento",
    "notes": "Pendiente en el roadmap y sin ruta de recuperación en el registro de API revisado.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "pending",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "ROADMAP.md",
            "start": 94,
            "end": 99,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/routes/auth.ts",
            "start": 8,
            "end": 70,
            "kind": "code",
            "blob": "d3b84d9307fe6e3ad20142cff5d2abf7d00d44cf"
          }
        ],
        "guards": [
          {
            "path": "backend/src/routes/auth.ts",
            "object": "d3b84d9307fe6e3ad20142cff5d2abf7d00d44cf"
          },
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes",
            "object": "776eaabdcd9245a11146c6d6b06c4a859c448961"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "pending",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "ROADMAP.md",
            "start": 94,
            "end": 99,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/routes/auth.ts",
            "start": 8,
            "end": 70,
            "kind": "code",
            "blob": "d3b84d9307fe6e3ad20142cff5d2abf7d00d44cf"
          }
        ],
        "guards": [
          {
            "path": "backend/src/routes/auth.ts",
            "object": "d3b84d9307fe6e3ad20142cff5d2abf7d00d44cf"
          },
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes",
            "object": "776eaabdcd9245a11146c6d6b06c4a859c448961"
          }
        ]
      }
    }
  },
  {
    "id": "GC-004",
    "name": "Eliminar la cuenta",
    "description": "Solicitud de eliminación y tratamiento de datos asociados.",
    "category": "Cuenta y acceso",
    "phase": "Antes del lanzamiento",
    "notes": "No hay eliminación completa en la API revisada. No confundir logout con borrado.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "pending",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "ROADMAP.md",
            "start": 100,
            "end": 109,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/routes/me.ts",
            "start": 3,
            "end": 18,
            "kind": "code",
            "blob": "4f65000508bd916e3a00222a48bb4230474e3b88"
          }
        ],
        "guards": [
          {
            "path": "backend/src/routes/me.ts",
            "object": "4f65000508bd916e3a00222a48bb4230474e3b88"
          },
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes",
            "object": "776eaabdcd9245a11146c6d6b06c4a859c448961"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "pending",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "ROADMAP.md",
            "start": 100,
            "end": 109,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/routes/me.ts",
            "start": 3,
            "end": 18,
            "kind": "code",
            "blob": "4f65000508bd916e3a00222a48bb4230474e3b88"
          }
        ],
        "guards": [
          {
            "path": "backend/src/routes/me.ts",
            "object": "4f65000508bd916e3a00222a48bb4230474e3b88"
          },
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes",
            "object": "776eaabdcd9245a11146c6d6b06c4a859c448961"
          }
        ]
      }
    }
  },
  {
    "id": "GC-005",
    "name": "Lista de deportistas",
    "description": "Consultar alumnos vinculados y sus asignaciones.",
    "category": "Planificación con profesores",
    "phase": "Base actual",
    "notes": "El portal consume la lista y el detalle de la API. Aislamiento y aceptación integral requieren pruebas adicionales.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "backend/src/routes/coach.ts",
            "start": 12,
            "end": 50,
            "kind": "code",
            "blob": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          },
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 93,
            "end": 147,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes/coach.ts",
            "object": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "backend/src/routes/coach.ts",
            "start": 12,
            "end": 50,
            "kind": "code",
            "blob": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          },
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 93,
            "end": 147,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes/coach.ts",
            "object": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          }
        ]
      }
    }
  },
  {
    "id": "GC-006",
    "name": "Editor de rutinas",
    "description": "Crear ejercicios, series, repeticiones y circuitos.",
    "category": "Planificación con profesores",
    "phase": "Base actual",
    "notes": "El editor de main solo carga y guarda la primera sesión y bloque; no acredita edición sin pérdida de campos avanzados.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "partial",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 156,
            "end": 193,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "start": 44,
            "end": 78,
            "kind": "code",
            "blob": "737affde57777d578f5e72eb104721f511eae785"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "object": "737affde57777d578f5e72eb104721f511eae785"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "partial",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 156,
            "end": 193,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "start": 44,
            "end": 78,
            "kind": "code",
            "blob": "737affde57777d578f5e72eb104721f511eae785"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "object": "737affde57777d578f5e72eb104721f511eae785"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          }
        ]
      }
    }
  },
  {
    "id": "GC-007",
    "name": "Publicar y asignar rutinas",
    "description": "Publicar un borrador y asignarlo a un alumno.",
    "category": "Planificación con profesores",
    "phase": "Base actual",
    "notes": "Publicación de rutina es una acción de producto, no publicación del software. Requiere alumno vinculado y versión publicada.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "backend/src/routes/routines.ts",
            "start": 81,
            "end": 113,
            "kind": "code",
            "blob": "737affde57777d578f5e72eb104721f511eae785"
          },
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 130,
            "end": 147,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "object": "737affde57777d578f5e72eb104721f511eae785"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "backend/src/routes/routines.ts",
            "start": 81,
            "end": 113,
            "kind": "code",
            "blob": "737affde57777d578f5e72eb104721f511eae785"
          },
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 130,
            "end": 147,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "object": "737affde57777d578f5e72eb104721f511eae785"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          }
        ]
      }
    }
  },
  {
    "id": "GC-008",
    "name": "Nuevas versiones y duplicación",
    "description": "Continuar una rutina publicada o reutilizarla como plantilla.",
    "category": "Planificación con profesores",
    "phase": "Próximas mejoras",
    "notes": "En main el editor exige un nuevo borrador, pero las rutas revisadas no crean versiones nuevas ni duplicados. Avances de otras ramas no se cuentan.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "pending",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 174,
            "end": 184,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "start": 12,
            "end": 44,
            "kind": "code",
            "blob": "737affde57777d578f5e72eb104721f511eae785"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "object": "737affde57777d578f5e72eb104721f511eae785"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes",
            "object": "776eaabdcd9245a11146c6d6b06c4a859c448961"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "pending",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "start": 174,
            "end": 184,
            "kind": "code",
            "blob": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "start": 12,
            "end": 44,
            "kind": "code",
            "blob": "737affde57777d578f5e72eb104721f511eae785"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "backend/src/routes/routines.ts",
            "object": "737affde57777d578f5e72eb104721f511eae785"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes",
            "object": "776eaabdcd9245a11146c6d6b06c4a859c448961"
          }
        ]
      }
    }
  },
  {
    "id": "GC-009",
    "name": "Entrenar sin conexión",
    "description": "Registrar una sesión, pesos y series en Android.",
    "category": "Entrenamiento Android",
    "phase": "Base actual",
    "notes": "Persistencia local Android. Esta revisión no acredita una nueva prueba de modo avión ni aislamiento entre cuentas.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 640,
            "end": 664,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 1180,
            "end": 1225,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "start": 23,
            "end": 35,
            "kind": "code",
            "blob": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "start": 252,
            "end": 289,
            "kind": "code",
            "blob": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/",
            "object": "9833b88e17a1246cd4c7adb5baae6618529e1831"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 640,
            "end": 664,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 1180,
            "end": 1225,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "start": 23,
            "end": 35,
            "kind": "code",
            "blob": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "start": 252,
            "end": 289,
            "kind": "code",
            "blob": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/",
            "object": "9833b88e17a1246cd4c7adb5baae6618529e1831"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          }
        ]
      }
    }
  },
  {
    "id": "GC-010",
    "name": "Vista previa de la rutina",
    "description": "Ver los ejercicios del día antes de iniciar el reloj.",
    "category": "Entrenamiento Android",
    "phase": "Base actual",
    "notes": "La vista previa consulta sin crear sesión; alcance actual de días 1 a 3.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 721,
            "end": 749,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/App.tsx",
            "start": 232,
            "end": 250,
            "kind": "code",
            "blob": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 721,
            "end": 749,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/App.tsx",
            "start": 232,
            "end": 250,
            "kind": "code",
            "blob": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      }
    }
  },
  {
    "id": "GC-011",
    "name": "Pausar y finalizar",
    "description": "Controlar el tiempo de la sesión sin perder el registro.",
    "category": "Entrenamiento Android",
    "phase": "Base actual",
    "notes": "Pausa, reanudación y finalización en almacenamiento nativo; falta revalidación en dispositivo en este snapshot.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 777,
            "end": 819,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "start": 25,
            "end": 29,
            "kind": "code",
            "blob": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 777,
            "end": 819,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "start": 25,
            "end": 29,
            "kind": "code",
            "blob": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      }
    }
  },
  {
    "id": "GC-012",
    "name": "Widget de entrenamiento",
    "description": "Series y pesos desde la pantalla de inicio Android.",
    "category": "Entrenamiento Android",
    "phase": "Base actual",
    "notes": "Temporizador opcional; el código lo detiene y oculta al finalizar. Sin verificación de instalación actual.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymWidgetProvider.kt",
            "start": 27,
            "end": 43,
            "kind": "code",
            "blob": "08a1071c6aa220d34ef42356aa8e89d6c1804e8c"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymWidgetProvider.kt",
            "start": 64,
            "end": 127,
            "kind": "code",
            "blob": "08a1071c6aa220d34ef42356aa8e89d6c1804e8c"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/AndroidManifest.xml",
            "object": "80d1bf078b3e015cf047c32db018647a8112a818"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymWidgetProvider.kt",
            "object": "08a1071c6aa220d34ef42356aa8e89d6c1804e8c"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymWidgetProvider.kt",
            "start": 27,
            "end": 43,
            "kind": "code",
            "blob": "08a1071c6aa220d34ef42356aa8e89d6c1804e8c"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymWidgetProvider.kt",
            "start": 64,
            "end": 127,
            "kind": "code",
            "blob": "08a1071c6aa220d34ef42356aa8e89d6c1804e8c"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/AndroidManifest.xml",
            "object": "80d1bf078b3e015cf047c32db018647a8112a818"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymWidgetProvider.kt",
            "object": "08a1071c6aa220d34ef42356aa8e89d6c1804e8c"
          }
        ]
      }
    }
  },
  {
    "id": "GC-013",
    "name": "Historial y estadísticas",
    "description": "Revisar sesiones, volumen y correcciones de pesos.",
    "category": "Historial y progreso",
    "phase": "Base actual",
    "notes": "Cálculos y edición local Android. No equivale a un panel completo de adherencia para profesores.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 821,
            "end": 988,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "start": 76,
            "end": 104,
            "kind": "code",
            "blob": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "start": 374,
            "end": 455,
            "kind": "code",
            "blob": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 821,
            "end": 988,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "start": 76,
            "end": 104,
            "kind": "code",
            "blob": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "start": 374,
            "end": 455,
            "kind": "code",
            "blob": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      }
    }
  },
  {
    "id": "GC-014",
    "name": "Importar y exportar registros",
    "description": "Importar rutinas y compartir historial en CSV o JSON.",
    "category": "Historial y progreso",
    "phase": "Base actual",
    "notes": "Importación de rutinas JSON para días 1 a 3. Exportación de historial local; no es exportación completa de la cuenta.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 1002,
            "end": 1058,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 1259,
            "end": 1302,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "start": 108,
            "end": 162,
            "kind": "code",
            "blob": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "implemented",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 1002,
            "end": 1058,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 1259,
            "end": 1302,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "start": 108,
            "end": 162,
            "kind": "code",
            "blob": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymStorageModule.kt",
            "object": "7ff65d5b899c6fd48f777aca86e2a660d5be2d81"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      }
    }
  },
  {
    "id": "GC-015",
    "name": "Sincronizar al reconectar",
    "description": "Enviar registros pendientes y descargar asignaciones.",
    "category": "Sincronización y plataformas",
    "phase": "Base actual",
    "notes": "Hay outbox, reintentos y conflictos. Almacenamiento por instalación, sin aislamiento por alumno: no asumir cambio de cuenta seguro.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "partial",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymSyncWorker.kt",
            "start": 19,
            "end": 73,
            "kind": "code",
            "blob": "6b0b276bc9ff276d74cb5e4ac72ce3d0a57a7624"
          },
          {
            "path": "backend/src/routes/sync.ts",
            "start": 9,
            "end": 35,
            "kind": "code",
            "blob": "ed4f8cd1769f163ba193c4f1c5b7196d4002fe71"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 146,
            "end": 153,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 293,
            "end": 330,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymSyncWorker.kt",
            "object": "6b0b276bc9ff276d74cb5e4ac72ce3d0a57a7624"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/",
            "object": "9833b88e17a1246cd4c7adb5baae6618529e1831"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes/sync.ts",
            "object": "ed4f8cd1769f163ba193c4f1c5b7196d4002fe71"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "partial",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymSyncWorker.kt",
            "start": 19,
            "end": 73,
            "kind": "code",
            "blob": "6b0b276bc9ff276d74cb5e4ac72ce3d0a57a7624"
          },
          {
            "path": "backend/src/routes/sync.ts",
            "start": 9,
            "end": 35,
            "kind": "code",
            "blob": "ed4f8cd1769f163ba193c4f1c5b7196d4002fe71"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 146,
            "end": 153,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "start": 293,
            "end": 330,
            "kind": "code",
            "blob": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymDatabase.kt",
            "object": "f1050d4500ed12c03663db6fbe271cdda0676d61"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/GymSyncWorker.kt",
            "object": "6b0b276bc9ff276d74cb5e4ac72ce3d0a57a7624"
          },
          {
            "path": "apps/mobile/android/app/src/main/java/com/gymcounter/",
            "object": "9833b88e17a1246cd4c7adb5baae6618529e1831"
          },
          {
            "path": "backend/src/app.ts",
            "object": "2efd8c9d37f5323b5713399f311bd76dc0e07249"
          },
          {
            "path": "backend/src/routes/sync.ts",
            "object": "ed4f8cd1769f163ba193c4f1c5b7196d4002fe71"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          }
        ]
      }
    }
  },
  {
    "id": "GC-016",
    "name": "Paridad en iPhone",
    "description": "Usar almacenamiento y sincronización equivalentes en iOS.",
    "category": "Sincronización y plataformas",
    "phase": "Después de Android",
    "notes": "Existe proyecto base iOS; sin GymStorage nativo equivalente. El fallback devuelve resultados vacíos.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "partial",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/mobile/App.tsx",
            "start": 143,
            "end": 172,
            "kind": "code",
            "blob": "37ef7b1cea33466df8d6a40b9bea148503599243"
          },
          {
            "path": "ROADMAP.md",
            "start": 40,
            "end": 43,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ],
        "guards": [
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          },
          {
            "path": "apps/mobile/ios",
            "object": "0d8689f7122ea783337b1ffcd7358982f5d4ba01"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "partial",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/mobile/App.tsx",
            "start": 143,
            "end": 172,
            "kind": "code",
            "blob": "37ef7b1cea33466df8d6a40b9bea148503599243"
          },
          {
            "path": "ROADMAP.md",
            "start": 40,
            "end": 43,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ],
        "guards": [
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "apps/mobile/App.tsx",
            "object": "37ef7b1cea33466df8d6a40b9bea148503599243"
          },
          {
            "path": "apps/mobile/ios",
            "object": "0d8689f7122ea783337b1ffcd7358982f5d4ba01"
          }
        ]
      }
    }
  },
  {
    "id": "GC-017",
    "name": "Complemento para reloj",
    "description": "Seguimiento del entrenamiento desde un wearable.",
    "category": "Sincronización y plataformas",
    "phase": "Exploración",
    "notes": "Solo se encontró documentación del complemento; no alcanza para verificar una aplicación funcional.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "unverified",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/watch/README.md",
            "start": 1,
            "end": 15,
            "kind": "plan",
            "blob": "6bf0ed0654f8f2d67cd488e09d084aa0a1813d0f"
          }
        ],
        "guards": [
          {
            "path": "apps/watch/README.md",
            "object": "6bf0ed0654f8f2d67cd488e09d084aa0a1813d0f"
          },
          {
            "path": "apps/watch",
            "object": "8ea7f922c63670c34f87735c1a8f6c62dfc58d00"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "unverified",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/watch/README.md",
            "start": 1,
            "end": 15,
            "kind": "plan",
            "blob": "6bf0ed0654f8f2d67cd488e09d084aa0a1813d0f"
          }
        ],
        "guards": [
          {
            "path": "apps/watch/README.md",
            "object": "6bf0ed0654f8f2d67cd488e09d084aa0a1813d0f"
          },
          {
            "path": "apps/watch",
            "object": "8ea7f922c63670c34f87735c1a8f6c62dfc58d00"
          }
        ]
      }
    }
  },
  {
    "id": "GC-018",
    "name": "Distribución Android",
    "description": "Generar un release apto para distribuir en la tienda.",
    "category": "Publicación y operación",
    "phase": "Antes del lanzamiento",
    "notes": "La configuración release usa firma de debug. No hay publicación en tienda acreditada.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "partial",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/build.gradle",
            "start": 90,
            "end": 107,
            "kind": "code",
            "blob": "c186508cbd9abe2da2d7b8268a1c51bc15435f19"
          },
          {
            "path": "ROADMAP.md",
            "start": 40,
            "end": 48,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/build.gradle",
            "object": "c186508cbd9abe2da2d7b8268a1c51bc15435f19"
          },
          {
            "path": ".github/workflows",
            "object": "ad0e792461e9ca9874c60cd4bceaecdc7a1954d6"
          },
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "partial",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "apps/mobile/android/app/build.gradle",
            "start": 90,
            "end": 107,
            "kind": "code",
            "blob": "c186508cbd9abe2da2d7b8268a1c51bc15435f19"
          },
          {
            "path": "ROADMAP.md",
            "start": 40,
            "end": 48,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ],
        "guards": [
          {
            "path": "apps/mobile/android/app/build.gradle",
            "object": "c186508cbd9abe2da2d7b8268a1c51bc15435f19"
          },
          {
            "path": ".github/workflows",
            "object": "ad0e792461e9ca9874c60cd4bceaecdc7a1954d6"
          },
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ]
      }
    }
  },
  {
    "id": "GC-019",
    "name": "Servicio público y recuperación",
    "description": "API y portal públicos con respaldo y restauración comprobados.",
    "category": "Publicación y operación",
    "phase": "Antes del lanzamiento",
    "notes": "Hay guías e infraestructura como código. No se consultaron servidores ni bases; despliegue y restauración no verificados.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "unverified",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "docs/progress.md",
            "start": 32,
            "end": 38,
            "kind": "plan",
            "blob": "0f4304d5603e7e933d7c167a32e59726daed27b3"
          }
        ],
        "guards": [
          {
            "path": "docs/progress.md",
            "object": "0f4304d5603e7e933d7c167a32e59726daed27b3"
          },
          {
            "path": "deploy",
            "object": "341d092ec72140f6a1527b3d98a5df5653e02282"
          },
          {
            "path": ".github/workflows",
            "object": "ad0e792461e9ca9874c60cd4bceaecdc7a1954d6"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "unverified",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "docs/progress.md",
            "start": 32,
            "end": 38,
            "kind": "plan",
            "blob": "0f4304d5603e7e933d7c167a32e59726daed27b3"
          }
        ],
        "guards": [
          {
            "path": "docs/progress.md",
            "object": "0f4304d5603e7e933d7c167a32e59726daed27b3"
          },
          {
            "path": "deploy",
            "object": "341d092ec72140f6a1527b3d98a5df5653e02282"
          },
          {
            "path": ".github/workflows",
            "object": "ad0e792461e9ca9874c60cd4bceaecdc7a1954d6"
          }
        ]
      }
    }
  },
  {
    "id": "GC-020",
    "name": "Privacidad y soporte",
    "description": "Políticas públicas y canales de ayuda accesibles.",
    "category": "Publicación y operación",
    "phase": "Antes del lanzamiento",
    "notes": "El roadmap los mantiene pendientes. No se verificó ningún sitio legal público.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "pending",
        "verification": "Revisión estática; no se ejecutó la aplicación en este snapshot.",
        "evidence": [
          {
            "path": "ROADMAP.md",
            "start": 115,
            "end": 130,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "apps/coach-web/src/router.tsx",
            "object": "a9c222c0a2eaf919aa58feff6fb56b041c4d31cc"
          }
        ]
      },
      "staging": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "pending",
        "verification": "Revisión estática por objetos de evidencia y contexto conservados desde el commit auditado; no implica igualdad de referencias main/staging. Sin prueba funcional nueva; staging no tiene despliegue habilitado por este trabajo.",
        "evidence": [
          {
            "path": "ROADMAP.md",
            "start": 115,
            "end": 130,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ],
        "guards": [
          {
            "path": "apps/coach-web/src/App.tsx",
            "object": "6e4c1c3c32df5cea617cddf1fd33fbefd5d5a699"
          },
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "apps/coach-web/src/router.tsx",
            "object": "a9c222c0a2eaf919aa58feff6fb56b041c4d31cc"
          }
        ]
      }
    }
  },
  {
    "id": "GC-021",
    "name": "Correo transaccional (Resend)",
    "description": "Envío de invitaciones por correo y activación segura mediante proveedor configurable.",
    "category": "Cuenta y acceso",
    "phase": "Antes del lanzamiento",
    "notes": "Resend previsto como proveedor. El avance local de invitaciones aún no está integrado ni desplegado; requiere dominio/remitente verificados y prueba real. Recuperación y eliminación tienen seguimiento separado. Aceptación del proveedor no garantiza entrega.",
    "reviews": {
      "main": {
        "commit": "08305c455f9caa552ecf5c84bdc5d59f92690c27",
        "status": "pending",
        "verification": "Revisión estática por rama: el roadmap prevé correo transaccional y la ruta de invitaciones revisada devuelve enlace/token sin envío. El avance local de Resend no está incluido en esta referencia. Sin prueba de entrega real.",
        "evidence": [
          {
            "path": "ROADMAP.md",
            "start": 98,
            "end": 99,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ],
        "guards": [
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/routes/coach.ts",
            "object": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          }
        ]
      },
      "staging": {
        "commit": "a65cefd93a85ff0b9c9cd90022ca07b387ec7bf4",
        "status": "pending",
        "verification": "Revisión estática por rama: el roadmap prevé correo transaccional y la ruta de invitaciones revisada devuelve enlace/token sin envío. El avance local de Resend no está incluido en esta referencia. Sin prueba de entrega real.",
        "evidence": [
          {
            "path": "ROADMAP.md",
            "start": 98,
            "end": 99,
            "kind": "plan",
            "blob": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          }
        ],
        "guards": [
          {
            "path": "ROADMAP.md",
            "object": "aec46a85511d3fa27a7f223f8813ce40b58d3399"
          },
          {
            "path": "backend/src/routes/coach.ts",
            "object": "59e78eb0ca7f3b35668301b341b6353c0b9d8897"
          }
        ]
      }
    }
  }
]
```
