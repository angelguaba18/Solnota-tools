/* SOLNOTA — tema compartido (claro por defecto + botón 🌙/☀️).
 * Úsalo en cualquier página pública con UNA línea en el <head>:
 *   <script src="/solnota-theme.js"></script>
 * Recuerda la elección en localStorage 'sn-theme' (igual que la app y el dashboard). */
(function () {
  // 1) aplicar el tema guardado ANTES de pintar (evita parpadeo)
  try { if (localStorage.getItem('sn-theme') === 'dark') document.documentElement.classList.add('dark'); } catch (e) {}

  // 2) overrides de modo oscuro — cubre los nombres de variables usados en el sitio
  var css =
    "html.dark{--bg:#0D0D0F;--bg2:#15140f;--bg3:#1b1913;--card:#15140f;--panel:#15140f;--panel2:#1b1913;" +
    "--ink:#EDE6D6;--cream:#EDE6D6;--mut:#9b927f;--muted:#9b927f;--line:#2a2620;" +
    "--gold:#FFB02E;--gold2:#FFCF6B;--green:#13B981;--green2:#13B981;--greenbg:#0f2419;--goldbg:#241f15;--purplebg:#1a1426;" +
    "--sh:0 18px 50px rgba(0,0,0,.5);--sh2:0 8px 26px rgba(0,0,0,.45)}" +
    "html.dark body{background:var(--bg);color:var(--ink,var(--cream))}" +
    "html.dark header{background:rgba(13,13,15,.82)!important}" +
    // por defecto flotante (páginas sin barra de idiomas)
    ".sn-themebtn{position:fixed;top:14px;right:14px;z-index:9998;width:40px;height:40px;border-radius:50%;" +
    "border:1px solid var(--line,#e5e5e5);background:var(--card,#fff);color:var(--gold,#E08A00);font-size:17px;" +
    "cursor:pointer;box-shadow:0 6px 18px rgba(36,30,15,.16);display:flex;align-items:center;justify-content:center}" +
    ".sn-themebtn:hover{transform:translateY(-1px)}" +
    // dentro de la barra de idiomas: primer botón, mismo estilo
    ".sn-lang .sn-themebtn{position:static;width:auto;height:auto;min-width:0;border:none;background:none;" +
    "box-shadow:none;padding:6px 8px;font-size:15px;border-radius:999px;line-height:1;color:#FFB02E}";
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // 3) botón de tema — al inicio de la barra de idiomas (o flotante si no hay)
  var btn = null;
  function makeBtn() {
    var b = document.createElement('button');
    b.className = 'sn-themebtn'; b.setAttribute('aria-label', 'Cambiar claro/oscuro'); b.title = 'Cambiar claro/oscuro';
    function sync() { b.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙'; }
    sync();
    b.addEventListener('click', function () {
      document.documentElement.classList.toggle('dark');
      try { localStorage.setItem('sn-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light'); } catch (e) {}
      sync();
    });
    return b;
  }
  function place() {
    if (!btn) btn = document.querySelector('.sn-themebtn') || makeBtn();
    var bar = document.querySelector('.sn-lang');
    if (bar) { if (btn.parentElement !== bar) bar.insertBefore(btn, bar.firstChild); }
    else if (!btn.parentElement && document.body) document.body.appendChild(btn);
  }
  function start() {
    place();
    var n = 0, iv = setInterval(function () {
      n++; place();
      var bar = document.querySelector('.sn-lang');
      if ((bar && btn && btn.parentElement === bar) || n > 25) clearInterval(iv);
    }, 200);
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);

  // 4) PWA: registrar el service worker (instalable + offline)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js').catch(function () {}); });
  }
})();
