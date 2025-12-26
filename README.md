# QDS Labs (Public Pack)

Offline, phone-first QDS demo labs.

- `qds_physics_omega_frontdoor_v3.html` — main “one phone, many doors into the same kernel” front door.
- Plus multiple labs (rotation, variance, batteries, genomics, message survival, etc.)
  all designed to run client-side with public or mock data.

## How to run (Termux / Linux)

```bash
cd www
python -m http.server 8011
# then open:
#   http://127.0.0.1:8011/qds_physics_omega_frontdoor_v3.html
