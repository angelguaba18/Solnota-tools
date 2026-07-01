/* SOLNOTA — tema compartido. OSCURO por defecto (marca premium) + modo CLARO real con el botón ☀️/🌙.
 * Una línea en el <head>:  <script src="/solnota-theme.js?v=5"></script>
 * Recuerda la elección en localStorage 'sn-theme' ('light' = claro; cualquier otro = oscuro). */
(function () {
  // 1) aplicar el modo guardado ANTES de pintar (evita parpadeo). OSCURO es el default.
  try { if (localStorage.getItem('sn-theme') === 'light') document.documentElement.classList.add('light'); } catch (e) {}

  // 2) MODO CLARO — paleta marfil cálido + overrides de las superficies oscuras hardcodeadas
  var css =
    // logo "SOLNOTA": oro metálico como el board (degradado brillo→profundo), no plano — aplica en claro y oscuro
    ".sn-logo-text{background-image:linear-gradient(180deg,#F0D48C 0%,#E1BE5C 30%,#D2A464 60%,#B58238 100%)!important;-webkit-background-clip:text!important;background-clip:text!important;-webkit-text-fill-color:transparent!important;color:#C99751}" +
    "html.light{--bg:#F4EFE4;--bg2:#FAF7F0;--bg3:#ECE4D5;--card:#FFFFFF;--panel:#FFFFFF;--panel2:#F4EFE4;" +
    "--ink:#1A1611;--cream:#1A1611;--txt:#1A1611;--mut:#6E6657;--muted:#6E6657;--line:#E4DCCB;" +
    "--gold:#D4AF37;--gold2:#D4AF37;--gold3:#B8901F;--green:#D4AF37;--green2:#B8901F;--greenbg:#F3ECD9;--goldbg:#F3ECD9;--purplebg:#F3ECD9;" +
    "--grad:linear-gradient(165deg,#E6C977,#CCA451 55%,#A8763C);--gradg:linear-gradient(165deg,#D4AF37,#A8763C);" +
    "--sh:0 18px 50px rgba(120,90,30,.12);--sh2:0 8px 26px rgba(120,90,30,.08)}" +
    "html.light body{background:radial-gradient(1200px 800px at 50% -8%,#FBF8F1,#F4EFE4 55%)!important;color:#1A1611}" +
    "html.light header{background:rgba(247,243,235,.86)!important;border-bottom:1px solid #E4DCCB!important}" +
    "html.light .hero{background:radial-gradient(900px 540px at 84% -14%,rgba(212,175,55,.16),transparent 56%),#F4EFE4!important}" +
    "html.light .cf{background:#ECE4D5!important}" +
    "html.light .final{background:radial-gradient(680px 420px at 50% 122%,rgba(188,29,36,.08),transparent 60%),#FAF7F0!important}" +
    "html.light .h-eyebrow{background:rgba(212,175,55,.12)!important;border-color:rgba(212,175,55,.4)!important;color:#B8901F!important}" +
    "html.light .sn-wm{color:#D4AF37!important;-webkit-text-fill-color:#D4AF37!important}" +
    "html.light .sn-logo-text{color:#D4AF37!important}" +
    "html.light .hero-sub,html.light .mut,html.light .lead{color:#6E6657}" +
    "html.light input,html.light textarea,html.light select{color:#1A1611!important;border-color:#E4DCCB!important;background:#fff!important}" +
    "html.light ::placeholder{color:#9b927f}" +
    "html.light button.ghost,html.light .ghost{color:#1A1611;border-color:#E4DCCB}" +
    // botón de tema — flotante por defecto (páginas sin barra de idiomas)
    ".sn-themebtn{position:fixed;top:14px;right:14px;z-index:9998;width:40px;height:40px;border-radius:50%;" +
    "border:1px solid var(--line,#e5e5e5);background:var(--card,#fff);font-size:17px;cursor:pointer;" +
    "box-shadow:0 6px 18px rgba(36,30,15,.16);display:flex;align-items:center;justify-content:center}" +
    ".sn-themebtn svg{display:block}" +
    ".sn-themebtn:hover{transform:translateY(-1px)}" +
    // dentro de la barra de idiomas: primer botón, sin recuadro
    ".sn-lang .sn-themebtn,.lang .sn-themebtn{position:static;width:auto;height:auto;min-width:0;border:none;" +
    "background:none;box-shadow:none;padding:6px 9px;border-radius:999px;line-height:1}";
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // 3) botón de tema — al inicio de la barra de idiomas (o flotante si no hay)
  var SUN = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.3" fill="#D4AF37" stroke="none"/><line x1="12" y1="2" x2="12" y2="4.3"/><line x1="12" y1="19.7" x2="12" y2="22"/><line x1="2" y1="12" x2="4.3" y2="12"/><line x1="19.7" y1="12" x2="22" y2="12"/><line x1="4.9" y1="4.9" x2="6.6" y2="6.6"/><line x1="17.4" y1="17.4" x2="19.1" y2="19.1"/><line x1="4.9" y1="19.1" x2="6.6" y2="17.4"/><line x1="17.4" y1="6.6" x2="19.1" y2="4.9"/></svg>';
  var MOON = '<svg width="16" height="16" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" fill="#E7E4D7"/></svg>';
  var btn = null;
  function makeBtn() {
    var b = document.createElement('button');
    b.className = 'sn-themebtn'; b.setAttribute('aria-label', 'Cambiar claro/oscuro'); b.title = 'Cambiar claro/oscuro';
    // el ícono muestra el modo ACTUAL (así siempre se ve): CLARO→sol dorado, OSCURO→luna platino
    function sync() { b.innerHTML = document.documentElement.classList.contains('light') ? SUN : MOON; }
    sync();
    b.addEventListener('click', function () {
      document.documentElement.classList.toggle('light');
      try { localStorage.setItem('sn-theme', document.documentElement.classList.contains('light') ? 'light' : 'dark'); } catch (e) {}
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
