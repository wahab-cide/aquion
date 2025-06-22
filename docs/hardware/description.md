# Aquion Hydropanel

*Community‑scale, low‑cost atmospheric water generator for rural Africa*

---

## 1  Project Vision

Aquion Hydropanels harvest safe drinking‑water from humid night air and hot daytime sun using **zero grid electricity** and >90 % locally sourced materials. The goal is to deliver **≥60 L day‑¹** (enough for a four‑person household) at a **capital cost ≤ US \$120 per 1 m² unit** and an LCCA of **< \$4 per m³**.

### Key Value Propositions

| Metric      | Target                               | Rationale                                           |
| ----------- | ------------------------------------ | --------------------------------------------------- |
| Daily yield | 15–20 L unit‑¹                       | Combination of night‑time dew + day‑time desorption |
| Footprint   | 1 m² panel                           | Fits courtyard roofs or ground racks                |
| Power       | 10 W PV micro‑array                  | Off‑grid; 2 Ah LiFePO₄ buffer                       |
| Materials   | Al sheet, CaCl₂‑clay, recycled glass | 90 % can be sourced in‑country                      |
| Lifetime    | ≥5 yrs (1 800 cycles)                | Salt bricks removable & reloadable                  |

---

## 2  Operating Principle

1. **Night Cycle – Radiative Dew**
   • IR‑emissive white plate radiates heat to a clear night sky (ε≈0.9), cooling 5 °C below ambient.
   • Moist air condenses as dew and drains via V‑grooves.
2. **Day Cycle – Solar Regeneration**
   • Low‑iron glass + insulated cavity raise desiccant bricks to \~70 °C.
   • CaCl₂‑clay bricks release stored vapour. A 12 V fan sweeps vapour onto the still‑cool plate where it re‑condenses.
3. **Collection & Conditioning**
   • Food‑grade diaphragm pump lifts water to a 200 L header tank.
   • Limestone + activated‑carbon cartridge remineralises and polishes the water.

![Hydropanel sequence diagram](docs/images/hydropanel_cycle_placeholder.png)

---

## 3  Bill of Materials (pilot batch, 10 units)

| Sub‑assembly            | Qty / unit | Unit Cost (US\$) | Notes               |
| ----------------------- | ---------- | ---------------- | ------------------- |
| 0.8 mm Al 3003 sheet    | 1 panel    | 34               | Condenser/radiator  |
| 25×25 mm Al square tube | 2.5 m      | 12               | Structural frame    |
| TiO₂ IR paint           | 90 g       | 3                | 2 thin coats        |
| Hydrophobic top‑coat    | 20 mL      | 2                | Dew roll‑off        |
| Poly‑iso board (25 mm)  | 0.8 m²     | 3                | Back insulation     |
| EPDM gasket             | 1.2 m      | 4                | Airtight seal       |
| Low‑iron glass (4 mm)   | 0.14 m²    | 12               | Solar cover         |
| CaCl₂ + Kaolin bricks   | 5 kg       | 34               | 50 %/50 % mix       |
| PV panel 10 W           | 1 pc       | 36               | Renogy RNG‑10D      |
| LiFePO₄ 12 V 2 Ah       | 1 pc       | 36               | 48 h autonomy       |
| BLDC fan 60 mm          | 1 pc       | 3                | 0.06 A              |
| Mini pump 12 V          | 1 pc       | 14               | 1 L min‑¹           |
| ESP32‑LoRa node         | 1 pc       | 25               | Telemetry & control |
| Fasteners & wiring      | —          | 6                | SS screws, fuse     |
| **Total materials**     |            | **≈ 130**        | <120 at scale       |

---

## 4  Build Workflow

| Step                     | What you do                                                      | Pass / Fail test                 |
| ------------------------ | ---------------------------------------------------------------- | -------------------------------- |
| **4.1 Plate Prep**       | Cut Al sheet, drill corners, coat white + hydrophobic.           | ≥5 °C sub‑ambient on clear night |
| **4.2 Frame**            | Weld or rivet square‑tube rectangle; mount plate 30–35° tilt.    | Frame ±2 mm square               |
| **4.3 Desiccant Bricks** | Mix CaCl₂ & clay, press, oven‑dry 105 °C, load into cassette.    | ≥0.3 kg H₂O kg‑¹ uptake          |
| **4.4 Cavity**           | Install black absorber, glass cover + EPDM seal, add insulation. | Cavity ≥70 °C in midday sun      |
| **4.5 Electrics**        | Wire PV → PWM → Battery → Fan/Pump → Buck → ESP32.               | 48 h cloudy endurance            |
| **4.6 Plumbing**         | Fit gutter, silicone joints, connect pump & filter.              | Water ≥ 60 mg L⁻¹ TDS, 0 CFU     |
| **4.7 Instrumentation**  | Mount DS18B20 probes, flow sensor, LoRa antenna.                 | 30‑day log ≥15 L d⁻¹ avg         |

---

## 5  Maintenance

| Task                    | Interval  | Notes                                                  |
| ----------------------- | --------- | ------------------------------------------------------ |
| Clean condenser surface | Monthly   | Wipe with damp cloth, re‑spray hydrophobic coat yearly |
| Inspect salt bricks     | 6 months  | Replace if powdering or <80 % capacity                 |
| Flush remineraliser     | 3 months  | Swap limestone & carbon media                          |
| Battery health check    | 12 months | Replace if capacity < 70 %                             |

---

## 6  Roadmap

1. **Alpha Prototype** – Lab‑bench single unit, 30‑day cycle test (complete).
2. **Beta Field Pilot (10 units)** – Two villages, data‑logged for 3 months (Q3 2025).
3. **Manufacturing Jig** – CNC templates, BOM optimisation (Q4 2025).
4. **Village‑scale Roll‑out (100 units)** – Women‑run co‑op, ZSP demo site (2026).
5. **Regional Scale** – License to local fabricators in Côte d’Ivoire, Uganda (2027+).

---

## 7  Licensing & Acknowledgements

This design is released under **CC BY‑SA 4.0** to encourage replication.
Early R\&D supported by Williams College and community testers in Cape Coast, Ghana.

> *“We turn Africa’s night‑time humidity into affordable, safe drinking water – one square metre at a time.”*
