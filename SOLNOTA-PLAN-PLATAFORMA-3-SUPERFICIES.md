# SOLNOTA — Plan Maestro de Plataforma (3 superficies) · 17 jun 2026

**TU DINERO · A LA LUZ** · Sol Music Corp · tools.solnota.com
*Análisis profundo + roadmap de construcción para lanzar al público 100% listo.*

> Este documento es el plan de CONSTRUCCIÓN. La visión vive en [SOLNOTA-MAESTRO](../00-EMPIEZA-AQUI/SOLNOTA-MAESTRO.md); el foso técnico en [el cerebro](../04-BACKEND/SOLNOTA-cerebro-modelo-datos.md).

---

## 0. EL HALLAZGO (por qué ganamos)

Investigamos 13+ competidores. **Nadie ocupa el centro de Solnota.**

- **Notes.fm** (Tim Luckow, ex-Stem) = nuestro espejo: 0%, no-custodial, escanea y recupera. **Pero solo inglés, US/UK, artistas grandes.** No tiene español, ni WhatsApp, ni PROs latinas, ni vende el CWR como mecanismo.
- **Mogul** ($5M Yamaha) = audita→valúa→financia. Gringo, catálogos grandes, IA opaca, no no-custodial real.
- **Songtrust** = el grande, pero **$100 + 15%/20% comisión**, custodial del dinero, pagos trimestrales, soporte pésimo, inglés.
- **Unison/SOLO** (España) = el único en español, pero custodial y con comisión.
- **Claimy** (París) = IA que auto-genera reclamos, pero B2B y con comisión.

**La intersección vacía = nuestro foso:** recuperar dinero perdido + generar CWR + 0% + no-custodial + **español/cultura latina + WhatsApp** + para el artista chiquito desatendido.

> ⚠️ Corrección: **"Soundtracks" no existe** como competidor. Era confusión con **Songtrust** (o con "Soundtrack Your Brand", música de fondo B2B, sin relación).

**Lo que hay que copiar de los mejores:**
1. Gancho con cifra en dólares ("encontramos $X que te deben"). Notes.fm convierte con promedio **$15,500/artista**.
2. Dashboard único que agrega 100+ fuentes (Mogul).
3. Vista de dinero en tiempo real (ataca la mayor debilidad de Songtrust: trimestral, sin transparencia).
4. Contenido educativo en español ("¿qué es el black box / MLC / SoundExchange?") — SEO que nadie tiene en español.

---

## 1. DÓNDE ESTAMOS HOY (estado real)

**3 superficies ya existen visualmente, pero el bloqueador #1 es que NO HAY LOGIN.**

### 🟢 PÚBLICO (lo que ve cualquiera) — ~90% listo de diseño
- `index.html` / `index-pro.html` — landing (pro está más pulida)
- `precios.html` — 3 planes (Artista $19.99 · Manager $49.99 · Publisher $99.99)
- `legal.html` — términos/privacidad (4 idiomas)
- `empezar.html` — onboarding educativo de 5 pasos
- `escaner.html` / `solnota-escaner.html` — escáner gratis (llama a Supabase `/scan`)
- `luz.html` — página narrativa premium
- `unclaimed.html` · `contrato.html` · `visor.html` — herramientas educativas
- ⚠️ **`solnota-waitlist.html` NO guarda los emails** (se pierden en una variable JS).

### 🟡 ADMIN / CEO (tu torre de control) — ~70%
- `solnota-dashboard.html` — KPIs en vivo (llama `/stats`), muestra 2 artistas.
- **Falta:** pipeline kanban (escaneó→contactó→firmó→reclamando→cobrando), vista "qué me toca hoy", semáforos de registro por artista, **y login**.

### 🔴 ARTISTA / PRODUCTOR (la app privada) — ~40%, es un mock
- `solnota-app.html` — 7 pantallas (Inicio, Catálogo, Mi Dinero, Splits, Registrar, Pagos, Regalías) **hardcodeadas a "La Gabi"**.
- **Falta TODO lo de producción:** login, sesión, cargar datos del artista real, editar splits, ver reclamos, conectar banco.

### Backend (Supabase `bdjjalwlcuhfzjeqxtwi`) — sólido
- Tablas: artists, tracks, scans, waitlist (RLS, JWT).
- Edge functions vivas: `rescate`, `stats`, `scan`, `isrc`, `cwr`, `catalog`, `apple` (+ ai, composer, producer, audiobook, demo, lod).
- Datos reales: 77 obras (La Gabi 46 + Sandy Mo 31), 100% con ISRC.

---

## 2. LAS 3 SUPERFICIES (qué es cada una y a dónde va)

### A) PÚBLICO — "El imán" (atrae y convierte)
**Meta:** que un artista latino entienda en 10 segundos y escanee.
- Landing una-promesa-un-botón → escáner → resultado con cifra → captura WhatsApp/email → onboarding.
- Centro de aprendizaje en español (el SEO que nadie tiene).
- **Éxito = leads que entran a la waitlist/WhatsApp.**

### B) ARTISTA / PRODUCTOR — "El espejo" (la confianza diaria)
**Meta:** el artista ve SU dinero a la luz, en vivo, en su idioma.
- Login → su catálogo → su dinero (estimado→preciso→cobrado) → sus splits → estado de cada reclamo → sus pagos (directo a su banco).
- Productor = mismo motor, vista de sus roles (beats, co-escritura).
- **Éxito = el artista entra solo, ve su dinero y confía.**

### C) ADMIN / CEO — "La torre" (tú lo manejas todo)
**Meta:** que veas el pipeline completo y sepas qué te toca hoy.
- Pipeline kanban de cada artista, semáforos de registro (MLC/BMI/SoundExchange), cola KYA, generador CWR, conciliación de pagos, KPIs de dinero rescatado.
- **Éxito = operar 50 artistas sin perder el hilo.**

---

## 3. QUÉ CONECTAR (integraciones) — MVP vs Fase 2

> Verdad incómoda: en publishing **casi nada es API**. El estándar real es **subir archivos CWR** (texto plano de CISAC) + portales. La única lectura útil es la API del MLC.

### 🟥 IMPRESCINDIBLE para lanzar (MVP)
1. **Generador CWR 2.2 (fallback 2.1) + submitter code CISAC + IPI.** Es el tubo universal: MLC + PROs US (vía MusicMark) + CMOs latinos. Ya tienes base (`cwr`).
2. **The MLC** — API de búsqueda (lectura) + CWR/portal para registrar.
3. **MusicMark** — un solo CWR registra en ASCAP + BMI a la vez (portal/FTP).
4. **Datos de catálogo:** **MusicBrainz** (gratis, único con ISRC+ISWC) + **Deezer** (gratis) + **Apple Music** ($99/año). Ya usas Apple.
5. **Pago no-custodial 0%:** **Stripe Connect** (Standard + direct charges → el dinero cae en la cuenta del propio artista, tú solo barres fee 0%). + **Stripe Identity** para KYC ($1.50/verificación).
6. **Conciliación:** ingesta de **DDEX DSR** (reportes de uso) para cruzar contra lo registrado.

### 🟨 FASE 2 (cuando escalemos)
7. **Trolley** — capa fiscal (W-8BEN / 1042-S) para artistas extranjeros (LatAm). Es custodial → definir postura no-custodial con abogado antes.
8. **CMOs latinos** (ECAD, SACM, SGAE, SGACEDOM, SADAIC, SAYCO) vía **sub-publishing** (no hay registro directo; se llega por acuerdos locales/reciprocidad).
9. **Agregador de streams** (Songstats/Soundcharts) para datos multi-plataforma reales.
10. **ISWC-Net (CISAC)** + **SoundExchange ISRC** para enriquecer identificadores.

> ⚠️ **SoundExchange paga la GRABACIÓN, no la composición.** Solo cobramos ahí si representamos también el máster (parte del artista). Aclararlo en el producto.

> ⚖️ **Decisión legal previa:** "no-custodial" tiene dos versiones (A: el dinero nunca pasa por nosotros · B: un socio licenciado lo retiene un instante). Define cuál con abogado — cambia toda la arquitectura de pagos y splits.

---

## 4. EL BLOQUEADOR #1: AUTENTICACIÓN

Hoy la app del artista y el dashboard CEO **no tienen login**: cualquiera con la URL ve todo. Sin esto no hay producto real.

**Plan:** Supabase Auth (email + magic link, ideal para artistas no técnicos) →
- Tabla `profiles` con rol (`artist` / `producer` / `admin`).
- Guard de ruta en frontend + RLS por `auth.uid()` en el backend.
- La app del artista carga **sus** datos; el CEO ve todos.

---

## 5. ROADMAP PASO POR PASO (orden con lógica)

### FASE A — Cimientos (sin esto nada es real)
1. **Auth + roles** (artista/productor/admin) con Supabase Auth.
2. **Modelo de datos canónico** WORK/PARTY/SPLIT/CLAIM/SOURCE sobre lo que ya hay (sin romper lo vivo).
3. **Arreglar waitlist** → que guarde emails de verdad en Supabase.

### FASE B — Superficie PÚBLICA lista para tráfico
4. Unificar landing (elegir `index-pro` como oficial, marca nueva CD-en-la-O).
5. Escáner → resultado con cifra en dólares → captura WhatsApp/email funcional.
6. Centro educativo en español (3-5 artículos: black box, MLC, SoundExchange, splits, CWR).

### FASE C — App ARTISTA real (de mock a producto)
7. Login del artista → dashboard "Mi Dinero" en vivo (estimado→preciso→cobrado).
8. Mi Catálogo (obras + grabaciones), Mis Splits (editar con regla ≤100%), Estado de Reclamos.
9. Vista Productor (roles de beats/co-escritura).

### FASE D — Torre CEO completa
10. Pipeline kanban + "qué me toca hoy" + semáforos de registro.
11. Cola KYA (verificar propiedad antes de reclamar) + generador CWR integrado.

### FASE E — Conectar el dinero (no-custodial)
12. Stripe Connect + Identity (pago directo + KYC).
13. Ingesta DSR + conciliación (lo estimado se vuelve real).

### FASE F — Lanzamiento
14. 2FA en todo, repo privado, rate-limit en APIs pagadas, validación legal no-custodial.
15. 10 betas (empezando por La Gabi) → medir dinero rescatado → abrir al público.

---

## 6. QUÉ CONSTRUIMOS PRIMERO (recomendación)

El orden lógico arranca por **FASE A (auth + roles)** porque desbloquea las otras dos superficies. Pero lo más **visible y motivador** es ver la app del artista cobrar vida con login real.

**Mi recomendación:** empezar por **Auth + la app del Artista real** (Fases A→C juntas), porque convierte el mock en producto y es lo que el cliente toca. En paralelo arreglamos la waitlist (5 min) para no perder leads.

---

*Generado: 17 jun 2026 · SOLNOTA · Tu dinero · A la luz*
</content>
</invoke>
