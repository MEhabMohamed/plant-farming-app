# 🌿 Plant Farming App (`plant-farming-app`)

A modern, high-performance agricultural intelligence and crop disease diagnostic web application built with **Node.js (Express)**, **Google Gemini Multimodal AI**, and **Authoritative Agricultural Extension Data** (USDA ARS, UC Davis IPM, Cornell Agronomy Extension, and FAO EcoCrop — strictly omitting Wikipedia).

---

## 🚀 Key Features

### 1. 🌾 Crop & Farming Hub
- **Search by Name or Photo**: Look up any agricultural crop, vegetable, fruit, grain, or cash crop.
- **Agricultural Season & Calendar**: Optimal sowing windows, soil germination temperatures, days to maturity, harvest period, and growth cycle.
- **Proper Planting Technique**: Planting depth, spacing guidelines (in-row and inter-row), germination duration, transplanting protocols, and trellising/support.
- **Suitable Soil & pH Gauge**: Visual pH spectrum gauge, soil texture classifications (loam, silt, sandy loam, clay loam), organic matter percentage, and drainage aeration standards.
- **Irrigation Scheduler**: Recommended irrigation methods (drip, micro-sprinklers, furrow), weekly water volume (mm/inches), critical moisture stress stages, and drought tolerance.
- **Fertilizer & NPK Nutrition**: Stage-by-stage N-P-K ratios, application timelines, organic amendments (compost, bone meal, kelp), and vital micronutrients (Ca, Mg, B, Zn).
- **Pesticides & Integrated Pest Management (IPM)**: Major agricultural pest identification, organic bio-pesticides (Neem, *Bacillus thuringiensis*, Spinosad), targeted chemical controls with pre-harvest intervals, and cultural sanitation practices.

---

### 2. 🩺 Plant Doctor & Defect Lab
- **Multimodal Disease Diagnosis**: Snap a photo or drag-and-drop an image of a sick leaf, stem, or fruit with optional symptom notes.
- **Pathogen Identification**: Clinical classification (Fungal, Bacterial, Viral, Insect Pest, Nutrient Deficiency, Environmental Stress).
- **Severity Rating & Confidence**: Dynamic severity indicators (Low, Moderate, Severe, Critical) with confidence ratings.
- **Emergency Triage Protocol**: Numbered emergency actions to halt pathogen transmission immediately.
- **Targeted Remedies**: Organic bio-fungicides/pesticides + commercial active chemical options.
- **Long-term Cultural Prevention**: Crop rotation, airflow optimization, and sanitation rules.

---

### 3. 💾 Session-Based Storage & Field Logs
- In-memory backend session storage retaining all researched crops and disease diagnoses during the active browsing session.
- Quick history timeline with one-click re-inspection.
- **Print & PDF Export**: Clean, printable farm sheets formatted for field use.

---

### 4. ⚡ Live Camera Viewfinder
- Integrated webcam/mobile camera stream with camera switching (front/back lens), target framing reticle, and freeze-frame analysis.

---

## 🛠️ Tech Stack & Architecture

- **Backend**: Node.js (v24+), Express 4, `express-session`, `multer` (in-memory image handling), `cors`, `dotenv`.
- **AI Vision & Multimodal Reasoning**: `@google/generative-ai` with configurable Gemini Flash models (`gemini-2.5-flash`, `gemini-2.0-flash`, `gemini-1.5-flash`).
- **Data Engine**: Dual-engine architecture combining Gemini Multimodal AI with authoritative agricultural extension synthesis (USDA ARS, UC Davis IPM, Cornell Agronomy Extension, FAO).
- **Frontend**: Vanilla HTML5 / CSS3 / ES6+ JavaScript with botanical glassmorphism design system, CSS variables, dynamic pH needle gauge, and responsive layouts.

---

## 📦 Setup & Running Locally

### 1. Configure Environment Secrets (`.env`)
Create or edit `.env` in the root folder:
```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
SESSION_SECRET=plant_farming_secure_session_secret_2026_botanical
```
*(You can also input your Gemini API Key directly inside the app's Settings modal `⚙` at runtime.)*

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
npm start
```
Or with automatic reload during development:
```bash
npm run dev
```

### 4. Open in Browser
Visit: [http://localhost:3000](http://localhost:3000)
