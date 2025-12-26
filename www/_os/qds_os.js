(() => {
  const KEY = "qds_os_menu_open_v1";

  function exists(url){
    // just return URL; we can't check filesystem from browser; keep it dumb & robust
    return url;
  }

  function niceTitle(){
    const t = (document.title || "").trim();
    if(t) return t.replace(/\s+/g," ").slice(0,60);
    const h = document.querySelector("h1,h2");
    return h ? (h.textContent||"").trim().slice(0,60) : "Quantum Dynamic Systems";
  }

  function subLine(){
    const d = new Date();
    const pad = n => (n<10?"0":"")+n;
    return `${pad(d.getHours())}:${pad(d.getMinutes())} • ${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`;
  }

  function inject(){
    if(document.getElementById("qdsTopbar")) return;

    const wrap = document.createElement("div");
    wrap.id = "qdsTopbar";
    wrap.innerHTML = `
      <div class="row">
        <div id="qdsBrand">
          <div id="qdsDot" aria-hidden="true"></div>
          <div style="min-width:0">
            <div id="qdsTitle">${escapeHtml(niceTitle())}</div>
            <div id="qdsSub">${escapeHtml(subLine())}</div>
          </div>
        </div>

        <div id="qdsActions">
          <button class="qdsBtn" id="qdsMenuBtn" type="button">☰ Menu</button>
          <button class="qdsBtn" id="qdsHomeBtn" type="button">Front Door</button>
          <button class="qdsBtn" id="qdsReloadBtn" type="button">Reload</button>
        </div>
      </div>

      <div id="qdsMenuPanel">
        <div class="grid">
          <a href="${exists("frontdoor_showroom.html")}">Showroom Front Door</a>
          <a href="${exists("dev_door_space.html")}">Dev Door</a>
          <a href="${exists("qds_physics_space_radar.html")}">Physics + Space Radar</a>
          <a href="${exists("qds_news_triage_vault.html")}">News Triage Vault</a>
          <a href="${exists("qds_battery_hub_v9_7_science_neon_lab.html")}">Battery Hub v9.7</a>
          <a href="${exists("qds_journey_v2.html")}">QDS Journey v2</a>
          <a href="${exists("omega_qds_lab.html")}">Ω QDS Lab</a>
          <a href="${exists("qds_nasa_lab_suite.html")}">NASA Lab Suite</a>
        </div>
        <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <span class="qdsChip">Local-first</span>
          <span class="qdsChip">Phone-safe</span>
          <span class="qdsChip">No external libs</span>
        </div>
      </div>
    `;

    document.body.insertBefore(wrap, document.body.firstChild);

    const btn = document.getElementById("qdsMenuBtn");
    const home = document.getElementById("qdsHomeBtn");
    const rel = document.getElementById("qdsReloadBtn");

    // restore state
    if(localStorage.getItem(KEY)==="1") document.body.classList.add("qds-menu-open");

    btn.addEventListener("click", () => {
      document.body.classList.toggle("qds-menu-open");
      localStorage.setItem(KEY, document.body.classList.contains("qds-menu-open") ? "1" : "0");
    });

    home.addEventListener("click", () => {
      location.href = "frontdoor_showroom.html";
    });

    rel.addEventListener("click", () => {
      const u = new URL(location.href);
      u.searchParams.set("x", Date.now().toString());
      location.href = u.toString();
    });
  }

  function escapeHtml(s){
    return (s||"").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
