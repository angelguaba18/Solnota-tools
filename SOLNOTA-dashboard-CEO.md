# SOLNOTA — Dashboard del CEO (DISEÑO, en papel) · Fase 4

*15 jun 2026. Tu torre de control: dónde caen los leads del funnel y cómo los manejas. Es un CRM de regalías.*

> **Propósito:** que Angel nunca maneje artistas en la cabeza ni en Excel. Un vistazo cada mañana = sabes qué pasa y qué hacer.

---

## 1. LA VISTA DE 5 SEGUNDOS (lo primero que ves al abrir)
Barra superior con 5 números:
- **Leads hoy** (escanearon) · **Nuevos contactos** (dejaron WhatsApp)
- **$ potencial en pipeline** (suma de estimados de todos)
- **Firmados** · **$ rescatado real** (la estrella)

---

## 2. EL PIPELINE (el corazón — tablero tipo kanban)
Cada artista = una tarjeta que se mueve por columnas:

```
ESCANEÓ → CONTACTO → FIRMÓ → RECLAMANDO → COBRANDO
```

**La tarjeta del artista muestra:**
- Nombre + foto + país
- $ estimado · # obras · # con dinero suelto
- Última acción + días sin moverse (alerta si se estanca)
- Botón directo: **WhatsApp** + ver detalle

---

## 3. DETALLE DEL ARTISTA (al hacer clic)
- **Datos:** nombre legal, IPI, PRO, email/WhatsApp, banco (sí/no).
- **Catálogo:** obras con estado por obra (grupo A/B/C, % split, claim MLC/PRO/SoundExchange — semáforos).
- **KYA:** verificado / bloqueado (y por qué — ej. Grupo B capturado).
- **Dinero:** estimado vs. rescatado real, por fuente.
- **Historial:** firma, correos, reclamos, pagos.
- **Acciones rápidas:** mandar WhatsApp, enviar firma, generar CWR, marcar reclamo.

---

## 4. "QUÉ ME TOCA HOY" (lista de acciones)
El dashboard te dice qué hacer, priorizado:
- Leads nuevos sin contactar (>24h) → escribir.
- Firmados sin reclamo iniciado.
- Reclamos en estado "overclaim" o trabados.
- Registros pendientes (banco MLC, SoundExchange).
- Renovaciones / pagos de suscripción.

---

## 5. EMBUDO Y MÉTRICAS (la salud del negocio)
- **Conversión por etapa:** escaneó → contacto → firmó → cobrando (los %).
- **De dónde vienen** (qué Reel/red trajo más leads).
- **$ rescatado acumulado** (la métrica madre pública).
- **MRR** (artistas × $19.99) + ingresos por black box.

---

## 6. SEMÁFOROS DE REGISTRO (por artista y global)
| Fuente | Estado |
|---|---|
| MLC | 🟢/🟡/🔴 |
| BMI/PRO | 🟢/🟡/🔴 |
| SoundExchange | 🟢/🟡/🔴 |
Vista global: cuántos artistas están 100% registrados vs. pendientes.

---

## 7. DE DÓNDE SALEN LOS DATOS
- **Leads:** del escáner/captura del funnel (Supabase: scans, waitlist, artists).
- **Catálogo/$:** motor `rescate` (Apple/Deezer + clasificación).
- **Estados de registro:** se actualizan al reclamar (manual al inicio, luego automático).
- Todo ya vive en Supabase (`bdjjalwlcuhfzjeqxtwi`) — el dashboard es la cara.

---

## LO QUE YA EXISTE vs. FALTA
| Pieza | Estado |
|---|---|
| Base de datos (artists/tracks/scans/waitlist) | ✅ Existe |
| `solnota-dashboard.html` (demo) | ✅ Existe (base a evolucionar) |
| Pipeline kanban con etapas | ⏳ Construir |
| Vista "qué me toca hoy" | ⏳ Construir |
| Conexión leads del funnel → tarjetas | ⏳ Conectar |
| Semáforos de registro por artista | ⏳ Construir |

---

## PRÓXIMO PASO (cuando toque construir)
1. Definir las 5 etapas del pipeline en la base (campo `status`).
2. Evolucionar `solnota-dashboard.html` a vista kanban + detalle.
3. Conectar la captura del funnel para crear tarjetas automáticas.
4. Agregar "qué me toca hoy" + semáforos.
