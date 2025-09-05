# 🏪 Choppies Namibia Sales Analytics Dashboard

[![CI/CD Deploy](https://github.com/Decastro95/S_D_A_O_S_-CHOPPIES-NAMIBIA/actions/workflows/deploy.yml/badge.svg)](https://github.com/Decastro95/S_D_A_O_S_-CHOPPIES-NAMIBIA/actions/workflows/deploy.yml)
[![Vercel Status](https://vercelbadge.vercel.app/api/Decastro95/S_D_A_O_S_-CHOPPIES-NAMIBIA)](https://S_D_A_O_S_-CHOPPIES-NAMIBIA.vercel.app)

---

## 📖 Project Overview

This is a comprehensive **Sales Data Analytics Dashboard** for **Choppies Namibia**, a multi-regional retail chain operating across 14 regions in Namibia.  
It provides **real-time business intelligence** and **data visualization** for:

- Regional sales performance
- Shop-level analysis
- Inventory tracking
- Growth and market penetration insights

---

## ✨ Features

### 🗺 Regional Overview

- Population-based sales analysis
- Coverage of **14 Namibian regions**
- Economic multipliers (e.g., Khomas 1.5x, Erongo 1.3x, rural 0.7–0.9x)
- Revenue distribution & YoY growth

### 🏬 Shop Performance

- **23 active shops** tracked
- Monthly and seasonal sales trends
- Customer transaction analysis
- Region-based filtering & comparison

### 📊 Sales Analytics

- Company-wide revenue + KPIs
- Quarterly breakdowns
- Product category insights
- Top products & transaction volumes

### 📦 Inventory Management

- Real-time stock status
- Low-stock alerts
- Turnover & efficiency metrics
- Action items for restocking

---

## 🛠 Technical Stack

- **Frontend**: Next.js 15 + React 18
- **Styling**: Tailwind CSS
- **Auth & Database**: Supabase
- **Charts**: Recharts
- **Hosting & CI/CD**: Vercel (with GitHub Actions)

---

## 📁 Project Structure

src/
├── components/
│ ├── Layout/ # Shared layout with Choppies branding
│ ├── DashboardCards/ # Reusable KPI/stat cards
│ ├── RegionalOverview.jsx # Regional analysis
│ ├── ShopPerformance.jsx # Shop analytics
│ ├── SalesAnalytics.jsx # Company-wide sales
│ └── InventoryDashboard.jsx# Stock & inventory
├── data/
│ └── choppiesData.js # Sales + population data
└── pages/
├── index.jsx # Landing / login
├── admin.jsx # Admin dashboard
├── manager.jsx # Manager dashboard
└── cashier.jsx # Cashier dashboard

yaml
Copy code

---

## ⚡️ Data Model

**Revenue formula:**
Regional Revenue = Population × Base Revenue per Capita × Economic Multiplier
Customer Base ≈ 50% of regional population

yaml
Copy code

**Seasonal variations:**

- December: +30%
- April: +10%
- Winter (Jun–Aug): -10 to -15%

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Decastro95/S_D_A_O_S_-CHOPPIES-NAMIBIA.git
   cd S_D_A_O_S_-CHOPPIES-NAMIBIA
   Install dependencies
   ```

bash
Copy code
pnpm install
Set up environment variables
Copy .env.local.example → .env.local and fill in your Supabase values:

env
Copy code
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
Run dev server

bash
Copy code
pnpm dev
Build for production

bash
Copy code
pnpm build
📊 Key Business Metrics (Demo Data)
Total Revenue: N$37.2M

Active Shops: 23

Market Coverage: 2.4M people

Avg Transaction: N$127

Customer Base: 25,000+

🌍 Regional Coverage
Khomas (Windhoek, 3 shops) → Highest revenue

Erongo (Walvis Bay, Swakopmund) → Strong coastal sales

Northern Regions (Oshana, Oshikoto, Ohangwena, Omusati) → Mid-range growth

Remote Areas (Kunene, Zambezi, Omaheke, Kavango West) → Lower but steady demand

🎯 Business Intelligence
Growth leaders (regions with highest YoY growth)

Revenue per capita KPIs

Market penetration insights

Inventory optimization recommendations

📱 Responsive Design
Desktop: Full-feature dashboards

Tablet: Collapsible sections

Mobile: Card-based stacked UI

🧑‍💻 Development Notes
Add real data in src/data/choppiesData.js

Update branding via Tailwind config & shared layout

Extend dashboards by adding more KPI cards in components/DashboardCards

🚀 Deploy Your Own
You can deploy your own instance with one click:

📞 Support & Credits
Built with Next.js + Supabase + Vercel

Academic project: 2025 IT & BI coursework

Maintainer: @Decastro95

Choppies Namibia Sales Analytics Dashboard © 2025 — Academic Use Only

yaml
Copy code
