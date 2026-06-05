# SOLNOTA · Herramientas

Mediación de regalías para artistas latinos independientes. Tarifa plana, 0% comisión. El dinero va directo a la cuenta del artista.

**En vivo:** https://solnota-tools.angelsolmusic18.workers.dev
**Lema de marca:** TU DINERO · A LA LUZ

## Páginas
| Ruta | Archivo | Qué hace |
|------|---------|----------|
| `/` | index.html | Portada |
| `/split` `/cwr` | splitsheet.html | Split Sheet + generador CWR |
| `/dinero` | unclaimed.html | Dinero sin reclamar (SoundExchange/MLC/PRO) |
| `/lod` `/productor` | lod.html | Letter of Direction (AMP Act) |
| `/visor` | visor.html | Visor de catálogo multi-rol + CSV |

## Idiomas (ES · EN · PT · FR)
Todo el sitio se traduce con UN solo motor: `i18n.js`.
- El HTML está en español (base). El motor traduce al vuelo según un diccionario.
- Detecta el idioma del navegador y recuerda la elección del visitante.
- El botón ES/EN/PT/FR se inyecta solo en cada página.
- La marca (clase `brand-tag`, ej. "TU DINERO · A LA LUZ") nunca se traduce.

### Añadir un idioma nuevo (ej. italiano "it")
1. En `i18n.js`, agrega el código a `LANGS` → `["es","en","pt","fr","it"]`
2. Agrega su etiqueta en `LABEL` → `it: "IT"`
3. Agrega la clave `it:` con la traducción a cada frase del diccionario `DICT`.
No hay que tocar ningún HTML.

## Deploy
Hosting: Cloudflare Pages/Workers. Auto-deploy: cada push a `main` en
github.com/angelguaba18/Solnota-tools republica solo (gratis, ilimitado).
`wrangler.toml` (en el repo) define `[assets] directory "./"`. `_redirects` define las rutas limpias.

## Backend
Supabase (functions/v1/): apple, audiobook, isrc (Deezer), composer/producer (MusicBrainz), cwr (generador CWR 2.1).
