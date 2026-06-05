/* SOLNOTA i18n — motor universal de idiomas
   Cómo funciona: el HTML está en español (base). Este script traduce
   automáticamente cualquier texto que esté en el diccionario, inyecta el
   botón de idioma en todas las páginas, detecta el idioma del visitante y
   recuerda su elección. Para añadir otro idioma (ej. portugués) solo agrega
   'pt' a LANGS y la clave pt: a cada frase del diccionario. */
(function () {
  var LANGS = ["es", "en"]; // añadir "pt" aquí para portugués
  var LABEL = { es: "ES", en: "EN", pt: "PT" };

  // Diccionario: clave = texto en español (base) → traducciones
  var DICT = {
    // ---------- Portada ----------
    "Herramientas para identificar, registrar y reclamar regalías. Captura una vez, cobra en todo el mundo.": { en: "Tools to identify, register and claim your royalties. Capture once, collect worldwide." },
    "Dinero sin reclamar": { en: "Unclaimed money" },
    "Escanea el catálogo y verifica dónde hay regalías pendientes: SoundExchange, MLC, PRO.": { en: "Scan the catalog and check where royalties are pending: SoundExchange, The MLC, PRO." },
    "Visor de catálogo": { en: "Catalog viewer" },
    "Escáner multi-rol (cantante, productor, compositor, audiolibro) con exportación CSV.": { en: "Multi-role scanner (singer, producer, songwriter, audiobook) with CSV export." },
    "Abrir →": { en: "Open →" },
    "Sol Music Corp · SOLNOTA · Firma → Registra → Monitorea → Cobra": { en: "Sol Music Corp · SOLNOTA · Sign → Register → Monitor → Collect" },
    "Escanea la obra por ISRC, reparte splits y genera el archivo CWR byte-perfect para PROs y MLC.": { en: "Scan the work by ISRC, split shares and generate the byte-perfect CWR file for PROs and The MLC." },
    "Carta para que SoundExchange pague al productor su % del máster (AMP Act). Lista para firmar.": { en: "Letter so SoundExchange pays the producer their % of the master (AMP Act). Ready to sign." },

    // ---------- Split Sheet ----------
    "1 · La Obra": { en: "1 · The Work" },
    "🔎 Autocompletar desde el escáner (Apple Music)": { en: "🔎 Autocomplete from the scanner (Apple Music)" },
    "Buscar grabaciones": { en: "Search recordings" },
    "+ Agregar ISRC": { en: "+ Add ISRC" },
    "Título de la obra *": { en: "Work title *" },
    "ISWC (composición)": { en: "ISWC (composition)" },
    "Duración": { en: "Duration" },
    "Fecha de creación": { en: "Creation date" },
    "Otros títulos / alias": { en: "Other titles / aliases" },
    "ISRC(s) de la obra — puede tener varios (original, remix, en vivo):": { en: "ISRC(s) of the work — can have several (original, remix, live):" },
    "2 · Escritores y Splits": { en: "2 · Writers & Splits" },
    "➕ Agregar escritor": { en: "➕ Add writer" },
    "Total split:": { en: "Total split:" },
    "⚖️ Repartir igual": { en: "⚖️ Split evenly" },
    "3 · Preparado por": { en: "3 · Prepared by" },
    "Nombre de quien prepara": { en: "Name of preparer" },
    "Fecha": { en: "Date" },
    "⚠️ La firma digital legal (DocuSign) va en la siguiente fase. El ISRC no es obligatorio para registrar; ayuda al emparejamiento.": { en: "⚠️ Legal e-signature (DocuSign) comes in the next phase. ISRC is not required to register; it helps matching." },
    "4 · Config CWR (submitter)": { en: "4 · CWR config (submitter)" },
    "Nombre del submitter (publisher)": { en: "Submitter name (publisher)" },
    "Sender ID (asignado por la sociedad)": { en: "Sender ID (assigned by the society)" },
    "IPI del publisher": { en: "Publisher IPI" },
    "El Sender ID lo da MusicMark/MLC cuando te aprueban como submitter. Sin él, el CWR sirve para validar en sandbox.": { en: "The Sender ID is given by MusicMark/The MLC when you are approved as a submitter. Without it, the CWR is for sandbox validation." },
    "🏛️ Generar CWR (.V21)": { en: "🏛️ Generate CWR (.V21)" },
    "Nombre del artista (ej. Sandy Mo)": { en: "Artist name (e.g. Sandy Mo)" },
    "…o agrega un ISRC a mano (ej. USDHM1313262)": { en: "…or add an ISRC manually (e.g. USDHM1313262)" },
    "Ej. Dios Tiene Lo Mío": { en: "E.g. Dios Tiene Lo Mío" },
    "lo asigna la sociedad": { en: "assigned by the society" },
    "opcional": { en: "optional" },

    // ---------- Dinero sin reclamar ----------
    "La verdad:": { en: "The truth:" },
    "todo tu catálogo": { en: "your entire catalog" },
    "por ISRC y te lleva": { en: "by ISRC and takes you" },
    "directo": { en: "directly" },
    "a verificar/reclamar en cada fuente. Lo que no está registrado = dinero que se va al": { en: "to verify/claim at each source. What is not registered = money that goes to the" },
    "Escanear catálogo": { en: "Scan catalog" },
    "Escribe un artista y escanea. (En vivo funciona en navegador real / Netlify.)": { en: "Type an artist and scan. (Live works in a real browser.)" },
    "Grabaciones": { en: "Recordings" },
    "Con ISRC": { en: "With ISRC" },
    "Sin ISRC (riesgo)": { en: "Without ISRC (risk)" },
    "Cobertura": { en: "Coverage" },
    "Dónde está tu dinero — verifica ahora": { en: "Where your money is — verify now" },
    "🎚️ Máster (SoundExchange)": { en: "🎚️ Master (SoundExchange)" },
    "Regalías de radio digital/satélite por tus grabaciones. Revisa si te tienen registrado y si hay pagos pendientes.": { en: "Digital/satellite radio royalties for your recordings. Check if you are registered and if there are pending payments." },
    "Verificar en SoundExchange": { en: "Check on SoundExchange" },
    "📝 Mecánico (The MLC)": { en: "📝 Mechanical (The MLC)" },
    "Regalías mecánicas de streaming en EE.UU. Busca tus obras y revisa montos no asignados (unclaimed).": { en: "Mechanical streaming royalties in the U.S. Search your works and check unclaimed amounts." },
    "Buscar en The MLC": { en: "Search The MLC" },
    "Regalías de ejecución pública (BMI/ASCAP + PROs LatAm). Confirma que cada obra esté registrada con sus splits.": { en: "Public performance royalties (BMI/ASCAP + LatAm PROs). Confirm each work is registered with its splits." },
    "Buscar en BMI": { en: "Search BMI" },
    "MLC unclaimed (info oficial):": { en: "MLC unclaimed (official info):" },
    "· SoundExchange artistas:": { en: "· SoundExchange artists:" },
    "Tu catálogo": { en: "Your catalog" },
    "¿Hay obras sin registrar? → Genera el CWR en el Split Sheet y reclama lo que es tuyo.": { en: "Unregistered works? → Generate the CWR in the Split Sheet and claim what is yours." },
    "Nombre del artista (ej. La Gabi)": { en: "Artist name (e.g. La Gabi)" },

    // ---------- Letter of Direction ----------
    "📄 Una": { en: "📄 A" },
    "ordena a SoundExchange pagar al": { en: "orders SoundExchange to pay the" },
    "productor": { en: "producer" },
    "un % de las regalías del artista por grabaciones específicas (AMP Act). SoundExchange también tiene su proceso/portal — revisa con un abogado de música antes de firmar. Info:": { en: "a % of the artist royalties for specific recordings (AMP Act). SoundExchange also has its own process/portal — review with a music lawyer before signing. Info:" },
    "1 · Datos": { en: "1 · Details" },
    "Artista principal (Featured Artist)": { en: "Main artist (Featured Artist)" },
    "Productor (Producer)": { en: "Producer" },
    "Rol": { en: "Role" },
    "% para el productor": { en: "% for the producer" },
    "Fecha efectiva": { en: "Effective date" },
    "Dirección del productor": { en: "Producer address" },
    "2 · Grabaciones (título + ISRC)": { en: "2 · Recordings (title + ISRC)" },
    "Añadir": { en: "Add" },
    "El escáner en vivo funciona en navegador real o Netlify (el visor de artifacts bloquea internet).": { en: "The live scanner works in a real browser (the artifact viewer blocks internet)." },
    "📄 Generar carta": { en: "📄 Generate letter" },
    "🖨️ Imprimir / PDF": { en: "🖨️ Print / PDF" },
    "💾 Descargar .txt": { en: "💾 Download .txt" },
    "Nombre legal del productor": { en: "Producer legal name" },
    "Calle, ciudad, país": { en: "Street, city, country" },
    "Título (manual)": { en: "Title (manual)" },

    // ---------- Visor ----------
    "Escanear": { en: "Scan" },
    "Elige un rol y escanea.": { en: "Choose a role and scan." },
    "Escribe el nombre…": { en: "Type the name…" },
    "Visor de Catálogo": { en: "Catalog Viewer" }
  };

  var ATTRS = ["placeholder", "title", "aria-label"];
  var origText = new WeakMap();   // textNode -> español original
  var origAttr = new WeakMap();   // element -> { attr: original }

  function tr(es, lang) {
    if (lang === "es") return es;
    var e = DICT[es];
    return (e && e[lang]) ? e[lang] : es;
  }

  function walk(root, lang) {
    // Nodos de texto
    var it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = it.nextNode())) {
      var raw = n.nodeValue;
      if (!raw || !raw.trim()) continue;
      if (!origText.has(n)) origText.set(n, raw);
      var base = origText.get(n);
      var key = base.trim();
      if (DICT[key]) {
        n.nodeValue = base.replace(key, tr(key, lang));
      }
    }
    // Atributos
    var els = root.querySelectorAll ? root.querySelectorAll("*") : [];
    els.forEach(function (el) {
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var store = origAttr.get(el) || {};
        if (!(a in store)) { store[a] = el.getAttribute(a); origAttr.set(el, store); }
        var base = store[a].trim();
        if (DICT[base]) el.setAttribute(a, tr(base, lang));
      });
    });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "es";
    document.documentElement.lang = lang;
    walk(document.body, lang);
    document.querySelectorAll(".sn-lang button").forEach(function (b) {
      b.classList.toggle("active", b.dataset.l === lang);
    });
    try { localStorage.setItem("solnota_lang", lang); } catch (e) {}
    window.__snLang = lang;
  }

  function injectBar() {
    var css = document.createElement("style");
    css.textContent =
      ".sn-lang{position:fixed;top:14px;right:14px;z-index:9999;display:flex;gap:3px;" +
      "background:#0E0E16;border:1px solid #1E1E2A;border-radius:999px;padding:4px;" +
      "font-family:system-ui,-apple-system,sans-serif}" +
      ".sn-lang button{background:none;border:none;color:#8A8A9A;font-weight:800;font-size:12px;" +
      "letter-spacing:.5px;padding:6px 12px;border-radius:999px;cursor:pointer;transition:.15s}" +
      ".sn-lang button.active{background:linear-gradient(90deg,#FFCC00,#FF9500,#FF5E00,#CC2900);color:#05050A}";
    document.head.appendChild(css);
    var bar = document.createElement("div");
    bar.className = "sn-lang";
    LANGS.forEach(function (l) {
      var b = document.createElement("button");
      b.dataset.l = l; b.textContent = LABEL[l] || l.toUpperCase();
      b.onclick = function () { setLang(l); };
      bar.appendChild(b);
    });
    document.body.appendChild(bar);
  }

  function init() {
    injectBar();
    // Re-traduce contenido que aparezca después (resultados dinámicos)
    var mo = new MutationObserver(function (muts) {
      var lang = window.__snLang || "es";
      if (lang === "es") return;
      muts.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) walk(node, lang);
          else if (node.nodeType === 3 && node.nodeValue && node.nodeValue.trim()) {
            var key = node.nodeValue.trim();
            if (DICT[key]) { if (!origText.has(node)) origText.set(node, node.nodeValue); node.nodeValue = node.nodeValue.replace(key, tr(key, lang)); }
          }
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    var saved; try { saved = localStorage.getItem("solnota_lang"); } catch (e) {}
    var nav = (navigator.language || "es").slice(0, 2);
    setLang(saved || (LANGS.indexOf(nav) >= 0 ? nav : "es"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
