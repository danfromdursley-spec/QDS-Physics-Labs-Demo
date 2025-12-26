# QDS Labs (Public Pack)

Offline, phone-first QDS demo labs.

This repo is a trimmed, public-safe pack of the physics tools I use to test the **Quantum Dark Substrate (QDS)** kernel against real and mock data.

- `qds_physics_omega_frontdoor_v3.html` – main “one phone, many doors into the same kernel” front door.
- Plus multiple labs (rotation, variance, batteries, genomics, message survival, etc.),
  all designed to run **client-side only** with public or mock data.

No logins, no back-end, no external API calls. Open the page, run a test, export the evidence.

---

## 60-second live demo

Public link (no install):

https://danfromdursley-spec.github.io/QDS-Physics-Labs-Demo/qds_physics_omega_frontdoor_v3.html

**Try this path:**

1. Open the link above.
2. On the front door, click **“QDS RotMod Distance Probe Lab · v2 PRO”**.
3. Keep the default galaxy **DDO154**, click **“Compute χ² @ s”**.
4. Hit **“Scan χ²  QDS (s)”** to sweep the distance factor.
5. Open **“QDS Physics Evidence Log v1”**, add an entry for **DDO154**, and export the JSON.

That’s one full loop:

> **We ran a real test on public data, saw what QDS did to χ², and logged the result in an evidence ledger.**

---

## How to run locally (Termux / Linux)

```bash
# 1) Clone the public labs pack
git clone https://github.com/danfromdursley-spec/QDS-Physics-Labs-Demo.git

# 2) Start a local web server
cd QDS-Physics-Labs-Demo/www
python -m http.server 8011

# 3) Open in your browser
#    (on the same device or another device on the network)
#    e.g. on the same phone:
#      http://127.0.0.1:8011/qds_physics_omega_frontdoor_v3.html