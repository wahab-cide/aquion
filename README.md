# Aquion

> Community-scale **water tech** for rural resilience: low‑cost hydropanels + explainable AI water‑quality monitoring.

This monorepo hosts **two sister products**:

1. **Hydropanel** — 1 m² solar‑sorption panel that harvests ≥ 15 L day⁻¹ of potable water using zero grid power.
2. **Aquion AI** — an explainable machine‑learning platform that turns low‑cost sensor streams into action‑able potability alerts and SHAP explanations.

Both projects are **open hardware / open software** and designed to work together but can run standalone.

---

## Repo Layout

```
./
├── hardware/               # Hydropanel CAD, BOM & build docs
│   ├── Hydropanel.md
│   └── Hydropanel_Construction.md
├── software/               # Aquion AI codebase
│   ├── edge/      # MicroPython firmware
│   ├── api/       # FastAPI service
│   ├── pipelines/ # Dagster + LightGBM
│   ├── dashboard/ # React + Plotly
│   └── README_AI_DEV.md   # Quick‑start for devs
├── docs/                  # Cross‑cutting diagrams, white‑papers
├── infra/                 # Terraform & docker‑compose
├── .github/workflows/     # CI/CD pipelines
└── LICENSES/              # CC BY‑SA for hardware, Apache‑2.0 for code
```

---

## Quick Start (Software Stack)

```bash
# 1. Clone & bootstrap tools (Python, Node, pre‑commit)
git clone https://github.com/aquion-project/aquion.git && cd aquion
make dev_bootstrap

# 2. Launch local stack (MQTT, Postgres, MLflow, etc.)
docker compose -f infra/docker-compose.local.yml up -d

# 3. Simulate sensor data & view dashboard
python scripts/simulate_stream.py --rate 5 --samples 500
uvicorn software/api/main:app --reload &
cd software/dashboard && npm i && npm run dev
```

Browse **[http://localhost:5173](http://localhost:5173)** for live potability + SHAP drivers.

---

## Quick Start (Hydropanel Prototype)

1. Read `hardware/Hydropanel_Construction.md`.
2. Cut and coat the 1 m² aluminium plate.
3. Print **Appendix A Cut List** and assemble the frame.
4. Flash the ESP32 edge firmware, power the mini‑PV pack, and you’re logging litres.

> **Target cost:** ≤ US \$130 per panel for a 10‑unit pilot.

---

## Contribution Guidelines

* **Issues:** Use labels `edge`, `hardware`, `api`, `ops`.
* **PRs:** Branch → PR to `main`; run `make pre-commit` first.
* **Docs:** Update the relevant `.md` inside `hardware/` or `software/`—all docs are single‑source.

---

## Community & Support

* Slack: <invite link> (`#aquion-dev`, `#aquion-field`)
* Weekly dev call: Fridays 15:00 UTC (Zoom)
* Field pilot sites: Cape Coast (GHA), Ho (GHA) — contact @field‑ops

---

## Licenses

* **Hardware (Hydropanel)** — Creative Commons **CC BY‑SA 4.0**
* **Software (Aquion AI)** — **Apache 2.0**

By contributing you agree that your code or design assets will be released under the corresponding license.

> *Bringing clean water within reach—one square metre and one byte at a time.*
