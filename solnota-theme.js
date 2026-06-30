/* SOLNOTA — tema compartido (claro por defecto + botón 🌙/☀️).
 * Úsalo en cualquier página pública con UNA línea en el <head>:
 *   <script src="/solnota-theme.js"></script>
 * Recuerda la elección en localStorage 'sn-theme' (igual que la app y el dashboard). */
(function () {
  // 1) aplicar el tema guardado ANTES de pintar (evita parpadeo)
  try { if (localStorage.getItem('sn-theme') === 'dark') document.documentElement.classList.add('dark'); } catch (e) {}

  // 2) overrides de modo oscuro — cubre los nombres de variables usados en el sitio
  var css =
    "html.dark{--bg:#06080C;--bg2:#0A0C12;--bg3:#0E1016;--card:#101019;--panel:#101019;--panel2:#0E1016;" +
    "--ink:#E7E4D7;--cream:#E7E4D7;--txt:#E7E4D7;--mut:#A39C8C;--muted:#A39C8C;--line:#23222C;" +
    "--gold:#D4AF37;--gold2:#E9C66B;--green:#D4AF37;--green2:#D4AF37;--greenbg:#1A1712;--goldbg:#1A1712;--purplebg:#1A1210;" +
    "--sh:0 18px 50px rgba(0,0,0,.5);--sh2:0 8px 26px rgba(0,0,0,.45)}" +
    "html.dark body{background:var(--bg);color:var(--ink,var(--cream))}" +
    "html.dark header{background:rgba(6,8,12,.82)!important}" +
    // por defecto flotante (páginas sin barra de idiomas)
    ".sn-themebtn{position:fixed;top:14px;right:14px;z-index:9998;width:40px;height:40px;border-radius:50%;" +
    "border:1px solid var(--line,#e5e5e5);background:var(--card,#fff);color:#D4AF37;font-size:17px;" +
    ".sn-themebtn svg{display:block}" +
    "cursor:pointer;box-shadow:0 6px 18px rgba(36,30,15,.16);display:flex;align-items:center;justify-content:center}" +
    ".sn-themebtn:hover{transform:translateY(-1px)}" +
    // dentro de la barra de idiomas: primer botón, mismo estilo
    ".sn-lang .sn-themebtn{position:static;width:auto;height:auto;min-width:0;border:none;background:none;" +
    "box-shadow:none;padding:6px 8px;font-size:15px;border-radius:999px;line-height:1;color:#D4AF37}" +
    ".lang .sn-themebtn{position:static;width:auto;height:auto;min-width:0;border:none;background:none;" +
    "box-shadow:none;padding:6px 10px;font-size:15px;border-radius:8px;line-height:1;color:#D4AF37}" +
    // arreglos universales de modo oscuro (logo, botones ghost, inputs) — para TODO Solnota
    "html.dark .sn-wm{color:#E7E4D7!important;-webkit-text-fill-color:#E7E4D7!important}" +
    "html.dark .sn-disc::after{background:#06080C}" +
    "html.dark button.ghost,html.dark .ghost{color:#EDE6D6;border-color:var(--line)}" +
    "html.dark input,html.dark textarea,html.dark select{color:#EDE6D6;border-color:var(--line)}" +
    "html.dark select{background:#101019}" +
    "html.dark ::placeholder{color:#9b927f}";
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // 3) botón de tema — al inicio de la barra de idiomas (o flotante si no hay)
  var btn = null;
  function makeBtn() {
    var b = document.createElement('button');
    b.className = 'sn-themebtn'; b.setAttribute('aria-label', 'Cambiar claro/oscuro'); b.title = 'Cambiar claro/oscuro';
    var SUN = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.3" fill="#D4AF37" stroke="none"/><line x1="12" y1="2" x2="12" y2="4.3"/><line x1="12" y1="19.7" x2="12" y2="22"/><line x1="2" y1="12" x2="4.3" y2="12"/><line x1="19.7" y1="12" x2="22" y2="12"/><line x1="4.9" y1="4.9" x2="6.6" y2="6.6"/><line x1="17.4" y1="17.4" x2="19.1" y2="19.1"/><line x1="4.9" y1="19.1" x2="6.6" y2="17.4"/><line x1="17.4" y1="6.6" x2="19.1" y2="4.9"/></svg>';
    var MOON = '<svg width="16" height="16" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" fill="#E7E4D7"/></svg>';
    function sync() { b.innerHTML = document.documentElement.classList.contains('dark') ? SUN : MOON; }
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
    if (!bar) { // barra propia .lang: solo la que tiene botones (no los bloques de contenido lang-es/en/…)
      var ls = document.querySelectorAll('.lang');
      for (var i = 0; i < ls.length; i++) { if (ls[i].querySelector('button')) { bar = ls[i]; break; } }
    }
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
