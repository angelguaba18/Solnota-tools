/* SOLNOTA — módulo de autenticación compartido (magic link + roles)
 * Úsalo en cualquier página:
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *   <script src="/solnota-auth.js"></script>
 * Expone window.snAuth con: client, session(), profile(), signIn(email), signOut(),
 * guard({role, redirect}).  La anon key es pública por diseño (RLS protege los datos).
 */
(function (g) {
  var URL = "https://bdjjalwlcuhfzjeqxtwi.supabase.co";
  var ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkamphbHdsY3VoZnpqZXF4dHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MDAxNTUsImV4cCI6MjA5NjE3NjE1NX0.wsUI9V0oHwtMXrC2Q0JXrQZj3SXC6Ie4ukX0pLvsj6M";

  if (!g.supabase || !g.supabase.createClient) {
    console.error("[snAuth] Falta cargar supabase-js antes de solnota-auth.js");
    return;
  }

  var client = g.supabase.createClient(URL, ANON, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });

  var _profile = null;

  async function session() {
    var r = await client.auth.getSession();
    return r.data ? r.data.session : null;
  }

  // Trae (y cachea) el perfil del usuario logueado: {id,email,role,artist_slug,full_name}
  async function profile(force) {
    if (_profile && !force) return _profile;
    var s = await session();
    if (!s) return null;
    var r = await client.from("profiles").select("*").eq("id", s.user.id).single();
    _profile = r.data || { id: s.user.id, email: s.user.email, role: "artist", artist_slug: null };
    return _profile;
  }

  // Envía el enlace mágico al email. redirectTo = a dónde volver tras hacer clic.
  async function signIn(email, redirectTo) {
    return client.auth.signInWithOtp({
      email: email,
      options: { emailRedirectTo: redirectTo || (location.origin + "/login.html") }
    });
  }

  async function signOut() {
    _profile = null;
    await client.auth.signOut();
  }

  // Protege una página. Si no hay sesión → manda a login. Si el rol no calza → manda a su home.
  // opts: { role: "admin" | "artist" | "producer" | ["artist","producer"], redirect: "/login.html" }
  async function guard(opts) {
    opts = opts || {};
    var s = await session();
    if (!s) {
      location.replace((opts.redirect || "/login.html") + "?next=" + encodeURIComponent(location.pathname));
      return null;
    }
    var p = await profile();
    if (opts.role) {
      var allowed = Array.isArray(opts.role) ? opts.role : [opts.role];
      if (allowed.indexOf(p.role) === -1) {
        location.replace(homeFor(p.role));
        return null;
      }
    }
    return p;
  }

  function homeFor(role) {
    return role === "admin" ? "/solnota-dashboard.html" : "/solnota-app.html";
  }

  g.snAuth = {
    client: client,
    session: session,
    profile: profile,
    signIn: signIn,
    signOut: signOut,
    guard: guard,
    homeFor: homeFor
  };
})(window);
