# SOLNOTA — Herramientas

Mediación de regalías para artistas latinos independientes. Tarifa plana, 0% comisión.
El dinero cae directo en la cuenta del artista. Entidad: **Sol Music Corp** (Florida).

**Tagline:** TU DINERO · A LA LUZ

## Sitio en vivo
https://solnota-tools.netlify.app

## Herramientas
| Ruta | Qué hace |
|---|---|
| `/split` | Split Sheet + generador CWR 2.1 |
| `/dinero` | Escáner de dinero sin reclamar (SoundExchange / MLC / BMI) |
| `/lod` | Letter of Direction (productor → SoundExchange, AMP Act) |
| `/visor` | 5 roles → su flujo real de registro |

## Deploy
Auto-deploy vía Netlify (cada `push` a `main` republica solo).
Backend: Supabase `bdjjalwlcuhfzjeqxtwi` · funciones en `/functions/v1/`
