# Asha Paulson — Data Analyst Portfolio 🚀

A modern, interactive portfolio website crafted for **Asha Paulson** (Data Analyst & Computer Science Graduate). Designed with an executive data-tech aesthetic, glassmorphism, responsive UI, dynamic data dashboards, and interactive case study deep-dives.

![Portfolio Preview](assets/profile.jpg)

---

## 🌟 Key Features

### 1. 📊 Live Interactive Analytics Showcase
- **Executive Sales & KPI Dashboard (Power BI Style):**
  - Powered by **Chart.js** with dynamic line and area visualizations.
  - Interactive Region Selector: **Global (All), North America, Europe, Asia Pacific**.
  - Dynamic KPI metric recalculations: **Total Sales ($125,680)**, **Net Profit ($28,450)**, **Profit Margin (22.6%)**, **YoY Growth (+12.5%)**.
  - Matches the real dashboard displayed on Asha's monitor in her workstation photo!
- **Predictive Model Benchmark Comparison:**
  - Grouped bar chart comparing candidate models for Asha's **Lead Conversion Prediction** project:
    - **XGBoost Classifier (Recommended): 97.95% Accuracy, 97.10% F1, 98.6% ROC-AUC**
    - Random Forest: 94.20% Accuracy
    - Logistic Regression: 89.50% Accuracy
- **Interactive DAX & SQL Studio:**
  - Live syntax-highlighted snippets with 1-click clipboard copy.
  - Toggles between **DAX Measures** (`Sales YoY Growth %`, `Profit Margin %`) and **SQL Queries** (`Lead Funnel Aggregations`, `Real-Time UPI Fraud Window Function`).
  - Interactive simulated query output tables showing realistic results and latency benchmarks.

### 2. 💼 Featured Project Case Studies (with Detail Modals)
1. **Lead Conversion Prediction Pipeline:**
   - Python, Pandas, Scikit-learn, XGBoost, Exploratory Data Analysis.
   - 97.95% classification accuracy, hyperparameter tuning with GridSearchCV.
2. **Executive Sales & KPI Dashboard:**
   - Power BI, DAX Measures, Power Query (M), Star Schema data model.
   - Slicers, dynamic drill-throughs, and time intelligence for self-serve reporting.
3. **UPI Fraud Detection in E-Commerce:**
   - Real-time transaction risk scoring with Razorpay UPI API webhooks and Gradient Boosting.
   - Final-year engineering group project.
4. **Python Automation & Script Debugging Suite:**
   - Deliverables from GSeven Technologies internship: modularization, error handling, performance optimization.

### 3. 🎯 Work Experience & Education
- **Data Analyst Intern** at **Knovista Technologies, Kochi** (5 Months):
  - End-to-end Power BI sales reporting, Excel dashboards, lead conversion analytics.
- **Python Development Intern** at **GSeven Technologies, Thrissur** (1 Month):
  - Script debugging, code reliability, algorithmic efficiency.
- **B.Tech, Computer Science and Engineering (2022–2026):**
  - Nirmala College of Engineering, Chalakudy (APJ Abdul Kalam Technological University) — **CGPA: 7.28**.
- **Certifications:**
  - Knovista Data Analyst Internship Certificate
  - GSeven Python Development Internship Certificate
  - Avodha MERN Stack Development Certification (8 Months)

### 4. 🎨 UI/UX Highlights
- **Interactive Particle Network Background:**
  - Responsive HTML5 Canvas rendering dynamic data nodes and connecting edges that react to mouse proximity.
- **Dark / Light Theme Toggle:**
  - Smooth color palette transitions with local storage persistence and dynamic Chart.js theme synchronisation.
- **Curriculum Vitae (CV) Center:**
  - Embedded clean resume reader + direct 1-click download of the official `Asha_Paulson_Resume.pdf`.
  - Print-optimized CSS stylesheet for standard A4 printing.
- **Interactive Contact & Hire Me Module:**
  - One-click copy email button with toast notification (`ashapaulson11a@gmail.com`).
  - Direct WhatsApp / phone call link (`+91 7994555985`).
  - LinkedIn profile shortcut.
  - Interactive message form with confetti celebration animation on submission.

---

## 📁 Directory Structure

```text
asha-paulson-portfolio/
├── index.html                 # Complete semantic HTML5 structure & sections
├── README.md                  # Project documentation & deployment guide
├── css/
│   └── styles.css             # Custom glassmorphism, animations & theme styles
├── js/
│   └── app.js                 # Chart.js charts, modals, particle canvas & interactions
└── assets/
    ├── profile.jpg            # Asha's professional workstation photo
    └── Asha_Paulson_Resume.pdf# Verified official PDF resume
```

---

## 🚀 Running Locally

The portfolio requires no complex build tools or dependencies — you can run it right away:

### Option A: Using Python (Recommended)
```bash
cd C:\Users\user\.gemini\antigravity\scratch\asha-paulson-portfolio
python -m http.server 3000
```
Then open your browser at **`http://localhost:3000`**.

### Option B: Using Node / npx
```bash
npx serve .
```

### Option C: Direct File Opening
Double-click `index.html` in Windows Explorer to open it in Chrome, Edge, or Firefox.

---

## 🌐 Free 1-Click Deployment

### Deploy to GitHub Pages:
1. Initialize git in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Asha Paulson Portfolio"
   ```
2. Create a new repository on GitHub (e.g. `asha-paulson-portfolio`).
3. Push your repository:
   ```bash
   git remote add origin https://github.com/<your-username>/asha-paulson-portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub Repo Settings -> **Pages**, set branch to `main` and root to `/ (root)`. Your site is live!

### Deploy to Vercel / Netlify:
- Simply drag-and-drop the `asha-paulson-portfolio` folder into the [Netlify Drop](https://app.netlify.com/drop) dashboard for an instant live URL in seconds.

---

## 📬 Contact Information
- **Candidate:** Asha Paulson
- **Email:** ashapaulson11a@gmail.com
- **Phone:** +91 7994555985
- **LinkedIn:** [linkedin.com/in/asha-paulson1](https://linkedin.com/in/asha-paulson1)
- **Location:** Thrissur / Kochi, Kerala, India
