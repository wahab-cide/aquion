# Aquion Hydropanel — Detailed Construction Manual

> **Version 0.9 (June 2025)**  For a 10‑unit pilot batch.  Feedback welcome via GitHub Issues.

---

## Table of Contents

1. [Before You Start](#1-before-you-start)
2. [Tools & Consumables](#2-tools--consumables)
3. [Step 1 – Condenser Plate Fabrication](#3-step-1--condenser-plate-fabrication)
4. [Step 2 – Structural Frame](#4-step-2--structural-frame)
5. [Step 3 – Desiccant Brick Production](#5-step-3--desiccant-brick-production)
6. [Step 4 – Solar‑Thermal Cavity](#6-step-4--solar-thermal-cavity)
7. [Step 5 – Plumbing & Water Conditioning](#7-step-5--plumbing--water-conditioning)
8. [Step 6 – Electrical & Control Harness](#8-step-6--electrical--control-harness)
9. [Step 7 – System Integration](#9-step-7--system-integration)
10. [Step 8 – Commissioning & QA](#10-step-8--commissioning--qa)
11. [Appendix A – Cut List](#appendix-a--cut-list)
12. [Appendix B – Testing Templates](#appendix-b--testing-templates)

---

## 1  Before You Start

| Item           | Requirement                                                                                |
| -------------- | ------------------------------------------------------------------------------------------ |
| **Workspace**  | Covered area ≥ 12 m², dust‑free, good ventilation for paint fumes, 230 V or 120 V outlet.  |
| **Crew skill** | One tech comfortable with metal cutting & drilling; one helper for assembly.               |
| **Lead‑time**  | Order materials one week ahead; glass may take 10 days.                                    |
| **Safety**     | PPE: gloves, eye‑protection, N95 mask; CaCl₂ is hygroscopic → wear nitrile gloves.         |

> **Tip:** Print the [Cut List](#appendix-a--cut-list) and tape it to the workshop wall.

---

## 2  Tools & Consumables

| Category              | Tool                                                                     | Purpose                                      |
| --------------------- | ------------------------------------------------------------------------ | -------------------------------------------- |
| **Metalwork**         | Circular saw with aluminium blade, deburring tool, M5/M6 step drill bits | Cutting sheet & tubing, drilling mount holes |
| **Welding / Joining** | TIG welder **or** rivet gun (4 mm SS rivets)                             | Frame joints                                 |
| **Surface Prep**      | 320‑grit sandpaper, acetone, HVLP spray gun                              | Clean & coat condenser surface               |
| **Brick Press**       | Manual 10‑ton hydraulic press + 100 × 100 × 20 mm mold                   | Compress desiccant bricks                    |
| **Electrical**        | Crimping pliers, MC4 crimper, multimeter                                 | Harness & continuity                         |
| **General**           | Digital scale (±1 g), infrared thermometer, caulking gun                 | QC & sealing                                 |

Consumables: acetone, TiO₂ IR‑paint, Rust‑Oleum NeverWet kit, silicone sealant, EPDM strip, SS screws, heat‑shrink, 16 AWG UV cable, food‑grade silicone tubing.

---

## 3  Step 1 – Condenser Plate Fabrication

**Goal:** Produce a 1 m² Al plate that sheds heat at night and sheds water fast.

1. **Cut & Deburr**

   * Cut 0.8 mm Al sheet to **1 000 × 1 000 mm**.
   * File edges; radius corners 5 mm.
2. **Drill Mount Holes**

   * Four Ø6 mm holes, 25 mm from each edge for M6 SS bolts.
3. **Clean**

   * Wipe both sides with acetone until cloth stays clean.
4. **Spray IR Paint**

   * Two thin coats of TiO₂ acrylic, 10 min flash between coats.
   * Cure 24 h.
5. **Apply Hydrophobic Top‑Coat**

   * Follow kit instructions; 2‑part spray, ambient 20 °C+.
   * Let stand 1 h.
6. **Cut Run‑Off Grooves**

   * With V‑router bit, cut 2 × 5 mm‑deep diagonals to central gutter zone.
7. **QC Check**

   * Measure weight gain after 10 mL water sprinkle—plate should drain in <30 s.
   * Night test: IR thermometer should show ≥5 °C drop versus ambient after 30 min of clear night sky.

---

## 4  Step 2 – Structural Frame

**Goal:** Rigid support at 30–35° tilt + cavity enclosure.

1. **Cut Tubing** *(see Cut List)* and deburr.
2. **Assemble Rectangle**

   * Weld or 4‑rivet each corner with 50 × 50 mm gussets.
   * Diagonal measure must match ±2 mm.
3. **Attach Tilt Legs**

   * Rear legs = 700 mm.
   * Front feet drilled for M8 ground anchors.
4. **Mount Plate**

   * Use M6 × 12 bolts + rubber washers to isolate galvanic contact.
5. **Attach Side Rails**

   * 40 mm deep rails form cavity walls.
6. **QC Check** – level front edge (spirit level) and verify 33° ±1°.

---

## 5  Step 3 – Desiccant Brick Production

**Goal:** 5 kg cassette providing ≥0.3 kg H₂O kg⁻¹ uptake.

1. **Weigh Ingredients**

   * CaCl₂ (2 500 g) + EPK clay (2 500 g) + 600 mL water.
2. **Mix**

   * Use concrete mixer 5 min → damp crumb.
3. **Press Bricks**

   * Load 320 g per mold, press at 3 ton → 20 mm thick.
4. **Dry**

   * 105 °C oven, 6 h until mass stable (±2 g over 30 min).
5. **Fit Into SS Mesh Cassette**

   * 5 rows × 5 bricks.
6. **QC Cycle Test**

   * Humidity box (80 % RH, 25 °C) 12 h then oven 70 °C 4 h.  30 cycles; mass loss <10 %.

---

## 6  Step 4 – Solar‑Thermal Cavity

**Goal:** Reach 70 °C midday to purge bricks.

1. **Back Absorber**

   * 0.5 mm Al sheet, sprayed matte‑black (α > 0.93).
2. **Install Insulation**

   * 25 mm poly‑iso boards on back + sides; seal gaps with alu‑tape.
3. **Mount Fan**

   * Cut Ø62 mm hole; screw 60 mm BLDC fan to sidewall, airflow toward plate.
4. **Load Desiccant Cassette**

   * Slide onto stainless rails; leave 10 mm air gap front/back.
5. **Glaze & Seal**

   * Lay low‑iron glass; compress EPDM strip; fasten with Z‑clips at 300 mm centres.
6. **QC Heat Test**

   * Place unit in full sun 11 AM; cavity probe must exceed 70 °C within 90 min.

---

## 7  Step 5 – Plumbing & Water Conditioning

1. **Condensate Gutter**

   * 15 mm aluminium angle, silicone‑bonded beneath V‑groove exit.
2. **Tubing**

   * 10 mm OD food‑grade silicone hose → mini pump inlet.
3. **Pump Mount**

   * Use 3 D‑printed bracket on frame; anti‑vibration grommets.
4. **Discharge Line**

   * 8 mm ID hose to 200 L HDPE header tank (2 m height max).
5. **Remineraliser Cartridge**

   * 250 mL housing; fill 70 % limestone chips, 30 % activated carbon pellets.
6. **QC Water Test**

   * After 5 L run, measure TDS (60–100 mg L⁻¹) and 0 CFU with Petrifilm.

---

## 8  Step 6 – Electrical & Control Harness

1. **Solar Sub‑Assembly**

   * Mount 10 W panel behind frame; MC4 to PWM controller.
2. **Battery**

   * LiFePO₄ 2 Ah zip‑tied in poly box; fuse at + lead.
3. **DC Bus**

   * 12 V rail → fan + pump via MOSFET relay.
   * 5 V buck → ESP32‑LoRa + DS18B20 sensors.
4. **Program ESP32**

   * Upload `firmware/firmware.ino`; set Wi‑Fi SSID or LoRa freq.
5. **QC Power Test**

   * Simulate 2 cloudy days (cover panel); system must stay alive.

---

## 9  Step 7 – System Integration

1. **Join Sub‑Assemblies**

   * Bolt cavity to backside of condenser frame.
2. **Seal Check**

   * Smoke‑pen around glazing; zero leaks.
3. **Load Salt Bricks**

   * Ensure cassette slides smoothly; stop tabs engaged.
4. **Cable Routing**

   * UV‑ties; drip‑loop every 30 cm.
5. **Connect Plumbing**

   * Prime pump with 50 mL boiled water.

---

## 10  Step 8 – Commissioning & QA

| Test              | Method                 | Pass criteria                   |
| ----------------- | ---------------------- | ------------------------------- |
| **Night ΔT**      | IR cam 23:00 – 01:00   | Plate ≥5 °C below ambient       |
| **Day cavity T**  | Probe 12:00            | ≥70 °C for ≥2 h                 |
| **Daily yield**   | Flow sensor            | ≥15 L over 24 h average (7‑day) |
| **Energy budget** | Watt‑meter             | <10 Wh day⁻¹                    |
| **Water quality** | Hach strips, Petrifilm | WHO potable                     |

Record data in `docs/QA_logs/serial_###.csv`.

---

## Appendix A – Cut List *(per unit)*

```
Al sheet      1 000 × 1 000 mm ×0.8
Sq tube       1 000 mm ×2
              1 050 mm ×2
Rear legs     700 mm  ×2
Side rails    1 000 mm ×2
Transom       1 040 mm ×1
```

## Appendix B – Testing Templates

* `excel/thermal_profile_template.xlsx` – paste temp logs for auto charts.
* `firmware/yield_logger.py` – script to parse LoRa payloads and output daily totals.

---

Made with ☕ and Ghanaian humidity.

Licensed **CC BY‑SA 4.0**
