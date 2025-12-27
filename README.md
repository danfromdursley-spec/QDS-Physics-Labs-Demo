# Dan Williams — Quantum Design Systems (QDS)

I build **offline-first decision tools** that turn messy real-world signals into  
**clear, board-safe outputs** — mostly from an Android phone.

Think: *“Can we trust this battery? Is this revenue plan sane? Does this signal actually mean anything?”*  
My tools exist to answer that with numbers you can walk into a meeting with.

---

## What I do (3 pillars)

- 🔋 **Battery Whisperer**  
  Tools for **battery stress / ageing insight** — simple, explainable health & risk metrics from noisy usage data.  
  *Use cases:* home batteries, EV fleets, off-grid, lab data sanity-checks.

- 📊 **Revenue Floor**  
  Capacity-aware, **assumption-audited revenue plans** that don’t pretend every day is “best case”.  
  *Use cases:* new services, pilots, grant bids, investor decks, council projects.

- 🧠 **Signal Compression & Stress-Testing**  
  Offline labs for **noisy time-series** (markets, operations, physics) that focus on what’s robust, not just what looks pretty.  
  *Use cases:* “is this effect real?”, “does the story survive new data?”, “what breaks first?”.

---

## Why offline-first?

- Works in **rooms with bad or no Wi-Fi** (councils, site cabins, workshops).
- **Click → run → export**: no logins, no SaaS, no waiting for someone else’s server.
- Every tool is built to **“show its workings”**  
  – inputs, assumptions, settings and outputs are all visible and exportable.  
- Everything runs **client-side**, so it’s:
  - Easy to audit  
  - Easier to keep private  
  - Safer to demo with real (or redacted) data

---

## Live demos (public)

### 🔋 Battery & field tools

- **Battery Whisperer (public demo)**  
  _Explore stress, duty, and simple health metrics from noisy battery usage._  
  https://danfromdursley-spec.github.io/QDS-Battery-Whisperer-Demo/

### 🌌 Physics & constraint labs (QDS Physics pack)

These are **sandbox labs** built on public datasets, useful as:
- Example decision tools,
- Evidence that the methods survive real data,
- And a preview of what offline-first dashboards can look like.

- **QDS Physics Labs — Omega Front Door**  
  _Entry point to multiple physics labs (variance, rotation curves, binary pulsars, etc.)._  
  https://danfromdursley-spec.github.io/QDS-Physics-Labs-Demo/www/qds_physics_omega_frontdoor_v3.html  

- **Qutrit Competition Lab · Ultra (neon fairness sandbox)**  
  _Touch-first “fairness arena” — 0/1/2 states compete on a grid; tests how rules drive lock-in vs balance._  
  https://danfromdursley-spec.github.io/qds-qutrit-competition-lab-ultra/qutrit_competition_lab_ultra.html  

- **QDS Binary Pulsar Constraint Lab · One-Button NEON**  
  _Single-click **Yukawa-like envelope** check for binary pulsars: shows max allowed α(λ) vs per-system constraints._  
  Useful as a **template** for “one-button sanity checks” in other domains.  
  https://danfromdursley-spec.github.io/QDS-Physics-Labs-Demo/www/qds_pulsar_onebutton_neon.html  

> _Example physics path:_  
> DDO154 → compute χ² → scan QDS distance factor → log result in the Evidence Log.  
> Same pattern works for batteries, revenue, and other signals: **baseline → stress → record.**

---

## Who this is for

- 🏛️ **Councils & public bodies**  
  - Want **transparent assumptions** for pilots and grant bids  
  - Need tools that work **offline in meeting rooms**  
  - Care about **audit trails** and “what happens if this assumption changes?”

- ⚡ **Installers, integrators & operators**  
  - Need **simple health metrics** for fleets (home batteries, EV, storage)  
  - Want **evidence packs** they can leave with a customer or board  
  - Prefer tools that **don’t depend on cloud lock-in**

- 🧪 **Researchers & innovation teams**  
  - Need fast **sanity-check environments** before full pipelines are built  
  - Want to **bridge theory ↔ operations** with the same logic, just different inputs  
  - Prefer **open formats** (JSON/CSV/HTML) over black-box dashboards

If you sit in any of those buckets and want a **low-risk pilot** (one tool, one question, one metric), I’m interested.

---

## Data & publications (QDS variance & cosmology stack)

Under the hood, a lot of my tooling grew out of open, published work on  
**stochastic kernels, cosmology, and variance modelling**:

- 10.5281/zenodo.17769921 — *Quantum Dark Substrate (QDS): GR-Compatible Stochastic Kernel Cosmology*  
- 10.5281/zenodo.18056074 — *Stochastic Vacuum Kernel Cosmology: A QDS Variance Model*  
- 10.5281/zenodo.17451092 — QDS data release (with software and supporting material)

These are not required reading to use the tools —  
they just show that the maths has been pushed hard against real data.

- **ORCID**: [0009-0009-5888-5140](https://orcid.org/0009-0009-5888-5140)

---

## How I work

- **Build fast. Ship clean. Prove value.**  
- Start from **one concrete question** (“What’s the worst-case duty?”, “Is this α ruled out?”).  
- Build a **phone-first lab** around it (Termux + local web tools).  
- Deliver **exportable evidence packs** (HTML + JSON/CSV) that someone else can pick up later.

I care about:

- ✅ **Transparency** — knobs visible, defaults honest  
- ✅ **Reproducibility** — same inputs, same outputs  
- ✅ **Life-first ethics** — tools for clarity and safety, not exploitation

---

## Contact

📍 Dursley, UK  
📧 **danfromdursley@gmail.com**  
🐙 **GitHub:** `danfromdursley-spec`  

If you’re a **council, installer, utility, lab, or innovation team** and want to kick the tyres on any of this,  
I’m very happy to start small: one tool, one room, one decision.
