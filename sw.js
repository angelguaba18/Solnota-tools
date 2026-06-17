/* SOLNOTA — Service Worker (PWA instalable + offline básico).
 * Estrategia: network-first para todo lo del propio sitio (siempre fresco cuando hay
 * internet; sirve del caché si estás offline). NUNCA toca Supabase ni peticiones POST,
 * así los datos en vivo nunca se quedan viejos. */
const CACHE = 'solnota-v1';
const CORE = ['/', '/favicon.svg', '/icon-192.png', '/icon-512.png', '/site.webmanifest'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE).catch(function () {}); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  // Solo GET del propio dominio. Supabase/CDN/POST pasan directo (no se tocan).
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req).then(function (resp) {
      if (resp && resp.ok) { var cp = resp.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); }); }
      return resp;
    }).catch(function () {
      return caches.match(req).then(function (r) { return r || caches.match('/'); });
    })
  );
});
