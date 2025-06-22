# Aquion AI – **Developer Quick‑Start**

> **Revision 2025‑06‑22 (v1.0‑minimum)**
> The **shortest path** from git clone → sensors streaming → predictions with SHAP in your browser.

---

## 1  System Snapshot

```
Sensor Probe ▶ LoRa/NB‑IoT ▶ Edge ESP32‑S3 ▶ MQTT (AWS IoT Core) ▶ FastAPI ▶ React Dashboard
                                             ▲                   ▼
                                             Feast + Dagster ▶ MLflow (LightGBM + SHAP)
```

*Everything is containerised and deploys via GitHub Actions → AWS ECS.*

---

## 2  Prerequisites

| Tool           | Min Version               |
| -------------- | ------------------------- |
| Python         | 3.12 (via `pyenv`)        |
| Docker Desktop | 25.x                      |
| Node           | 20.x                      |
| AWS CLI        | v2 (profile `aquion-dev`) |

```bash
# One‑liner to set up dev box
make dev_bootstrap   # installs poetry, pre‑commit, node deps
```

---

## 3  Repo at a Glance

```
aquion-ai/
├─ edge/      # MicroPython firmware
├─ api/       # FastAPI service
├─ pipelines/ # Dagster graphs + LightGBM train script
├─ dashboard/ # React (Vite) + Plotly
└─ infra/     # Terraform + docker‑compose.local.yml
```

---

## 4  Run the Whole Stack Locally

```bash
# 1. Start core services (MQTT, Postgres, MLflow)
docker compose -f infra/docker-compose.local.yml up -d

# 2. Simulate a probe stream
python scripts/simulate_stream.py --rate 5 --samples 500

# 3. Train & register a model
poetry run dagster job execute -f pipelines/daily_train.py -j retrain_lightgbm

# 4. Serve predictions
cd api && uvicorn main:app --reload
# GET http://localhost:8000/docs  ← swagger

# 5. Open dashboard
cd dashboard && npm i && npm run dev  # http://localhost:5173
```

Everything should work — you will see sensor dots and SHAP waterfalls.

---

## 5  Edge Firmware (ESP32‑S3)

1. Flash MicroPython firmware:

```bash
esptool.py write_flash -z 0x1000 edge/firmware.bin
```

2. Copy `edge/main.py`; edit `WIFI_SSID`, `MQTT_ENDPOINT` in `config.py`.
3. Power cycle → the node publishes JSON to topic `sensor/{id}/raw` every 15 min.

---

## 6  Model Training Basics

```python
# pipelines/train.py (called by Dagster)
model = lgb.LGBMClassifier(num_leaves=31, learning_rate=0.05)
model.fit(X_train, y_train)
mlflow.lightgbm.log_model(model, "model")
shap_vals = shap.TreeExplainer(model).shap_values(X_val)
```

Metrics (AUC) and SHAP artifacts auto‑log to MLflow.

---

## 7  Prod Deployment in 3 Clicks

1. `git push origin main` → GitHub Actions builds & tests.
2. Docker images pushed to ECR.
3. Terraform Cloud applies `infra/terragrunt-live` → ECS blue‑green rollout.

Rollback is automatic if 95th‑pct latency > 50 ms or error > 1 %.

---

## 8  Essential .env

```env
AWS_REGION=us-east-1
IOT_ENDPOINT=aquion-dev-xxxx-ats.iot.us-east-1.amazonaws.com
MLFLOW_URI=http://mlflow:5000
SECRET_KEY=change_me
```

