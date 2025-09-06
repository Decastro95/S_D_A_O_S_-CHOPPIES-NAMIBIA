# Choppies Namibia Sales Analytics Dashboard

## 🏪 Project Overview

This is a comprehensive **Sales Data Analytics Dashboard** for **Choppies Namibia**, a multi-regional retail chain operating across 14 regions in Namibia. The dashboard provides real-time business intelligence and data visualization for sales performance, regional analysis, shop management, and inventory tracking.

## 📊 Features

### 1. Regional Overview

- **Population-based Sales Analysis**: Sales data correlated with regional population demographics
- **14 Regions Covered**: All major Namibian regions from Khomas (capital) to remote areas
- **Economic Factor Integration**: Different spending patterns based on regional economic conditions
- **Revenue Distribution**: Visual representation of sales across regions
- **Growth Tracking**: Year-over-year performance metrics

### 2. Shop Performance Analysis

- **23 Active Shops**: Individual performance tracking for each location
- **Monthly Sales Trends**: 12-month historical data with seasonal variations
- **Customer Analytics**: Customer count and transaction patterns
- **Regional Filtering**: Filter shops by specific regions
- **Comparative Analysis**: Side-by-side shop performance comparison

### 3. Sales Analytics

- **Company-wide Metrics**: Total revenue, transactions, and growth indicators
- **Quarterly Performance**: Q1-Q4 sales breakdown
- **Product Categories**: 5 main categories (Groceries, Fresh Produce, Beverages, etc.)
- **Top Products**: Best-selling items with Namibian market context
- **Transaction Volume**: Monthly transaction count analysis

### 4. Inventory Management

- **Stock Status Tracking**: Real-time inventory levels across categories
- **Low Stock Alerts**: Automated warnings for items needing restocking
- **Turnover Rate Analysis**: Inventory efficiency metrics
- **Action Items**: Urgent restocking and management recommendations

## 🛠 Technical Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts library
- **Data Visualization**: Interactive charts, graphs, and tables
- **Responsive Design**: Mobile and desktop optimized

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx           # Main dashboard with tab navigation
│   ├── Header.jsx             # Choppies branded header
│   ├── RegionalOverview.jsx   # Regional performance analysis
│   ├── ShopPerformance.jsx    # Individual shop analytics
│   ├── SalesAnalytics.jsx     # Company-wide sales trends
│   ├── InventoryDashboard.jsx # Inventory management
│   └── StatsCard.jsx          # Reusable metric cards
├── data/
│   └── choppiesDataUpdated.js # Sales data with population integration
└── App.jsx                    # Main application component
```

## 📈 Data Integration

### Population-Based Sales Model

- **Real Namibian Demographics**: Based on actual regional population data
- **Economic Multipliers**: Different regions have varying spending power
  - Khomas (Windhoek): 1.5x multiplier (highest income)
  - Erongo (Coastal): 1.3x multiplier
  - Northern regions: 0.8-0.9x multiplier
  - Rural areas: 0.7-0.8x multiplier

### Sales Calculation Formula

```
Regional Revenue = Population × Base Revenue per Capita × Economic Multiplier
Customer Base = 50% of regional population (market penetration)
```

### Seasonal Variations

- **December**: +30% (Holiday season)
- **April**: +10% (Post-harvest season)
- **June-August**: -10% to -15% (Winter months)

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd choppies-dashboard
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm run dev
   ```

4. **Build for production**
   ```bash
   pnpm run build
   ```

## 📊 Key Metrics

- **Total Revenue**: N$37.2M across all shops
- **Active Shops**: 23 locations
- **Market Coverage**: 2.4M people served
- **Average Transaction**: N$127
- **Customer Base**: 25,000+ active customers

## 🌍 Regional Coverage

1. **Khomas** (3 shops) - Windhoek area - Highest revenue
2. **Ohangwena** (1 shop) - Eenhana
3. **Omusati** (2 shops) - Outapi, Okahao
4. **Oshikoto** (2 shops) - Omuthiya, Tsumeb
5. **Oshana** (2 shops) - Ondangwa, Oshakati
6. **Erongo** (2 shops) - Walvis Bay, Swakopmund
7. **Otjozondjupa** (2 shops) - Otjiwarongo, Okahandja
8. **Kavango East** (1 shop) - Rundu
9. **Zambezi** (1 shop) - Katima Mulilo
10. **Kavango West** (1 shop) - Nkurenkuru
11. **Kunene** (1 shop) - Opuwo
12. **Karas** (2 shops) - Keetmanshoop, Lüderitz
13. **Hardap** (2 shops) - Mariental, Rehoboth
14. **Omaheke** (1 shop) - Gobabis

## 🎯 Business Intelligence Features

### Automated Insights

- **Growth Leaders**: Regions with highest YoY growth
- **Revenue per Capita**: Economic performance indicators
- **Market Penetration**: Customer acquisition metrics
- **Inventory Optimization**: Stock level recommendations

### Interactive Visualizations

- **Population vs Revenue Correlation**: Scatter plot analysis
- **Regional Revenue Distribution**: Pie charts
- **Monthly Sales Trends**: Line graphs with seasonal patterns
- **Quarterly Performance**: Bar charts
- **Stock Status**: Stacked bar charts and pie charts

## 📱 Responsive Design

- **Desktop**: Full dashboard with all features
- **Tablet**: Optimized layout with collapsible sections
- **Mobile**: Stacked cards and simplified navigation

## 🔧 Customization

The dashboard is designed to be easily customizable:

1. **Data Sources**: Update `choppiesDataUpdated.js` with real data
2. **Branding**: Modify colors and logos in components
3. **Metrics**: Add new KPIs in dashboard components
4. **Regions**: Expand to new regions by updating data structure

## 📝 Usage for Academic Projects

This dashboard is perfect for:

- **IT Project Management** presentations
- **Business Intelligence** coursework
- **Data Visualization** assignments
- **Software Development** portfolios
- **Database Management** projects

## 🎓 Educational Value

- **Real-world Application**: Based on actual Namibian retail scenario
- **Data-driven Decision Making**: Demonstrates BI principles
- **Modern Web Development**: React, responsive design, data visualization
- **Business Context**: Retail analytics and performance management

## 📞 Support

For questions or modifications, refer to:

- Component documentation in code comments
- Data structure in `choppiesDataUpdated.js`
- Styling guidelines in Tailwind CSS classes

# 🛒 Choppies Namibia Dashboard

This project is a **React + Vite + Tailwind CSS** dashboard app built for managing and visualizing POS data for Choppies Namibia.  
It has been configured to work locally and on cloud platforms like **CodeSandbox**, **Netlify**, and **Vercel**.

---

## 🚀 Features

- ⚡️ Vite for fast development
- 🎨 Tailwind CSS styling
- 🔌 React ecosystem
- 🌍 Ready for one-click deploy on **Netlify/Vercel**
- ✅ Configured for **CodeSandbox** compatibility

---

## 📦 Installation

Clone the repository:

````bash
git clone https://github.com/Decastro95/S_D_A_O_S_-CHOPPIES-NAMIBIA.git
cd S_D_A_O_S_-CHOPPIES-NAMIBIA

# 🛒 Choppies Namibia Dashboard

A modern dashboard project built with:

- [Vite](https://vitejs.dev/) (fast development + build)
- [React](https://react.dev/) (component-based UI)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)
- [PostCSS](https://postcss.org/) (with autoprefixer)

This repo is configured for **npm**, **Netlify**, **Vercel**, and **CodeSandbox** for easy one-click deploys.

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo
```bash
git clone https://github.com/Decastro95/S_D_A_O_S_-CHOPPIES-NAMIBIA.git
cd S_D_A_O_S_-CHOPPIES-NAMIBIA

---

**Developed for Academic Purposes** | **Choppies Namibia Sales Analytics Dashboard** | **2025**
````

---

## 🚀 Deployment

This project is already configured for **Netlify** and **Vercel**.

### ✅ Netlify

1. Go to [Netlify](https://app.netlify.com/).
2. Click **New site from Git**.
3. Connect your GitHub account and select this repository.
4. Netlify will auto-detect Vite and use:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. (Optional) Add environment variables:
   - In **Site Settings → Build & Deploy → Environment → Edit Variables**, add any required variables like API keys.
   - Example:
     ```
     VITE_API_URL=https://your-api.com
     VITE_API_KEY=your-key-here
     ```

Your site will be live after deployment 🎉.

---

### ✅ Vercel

1. Go to [Vercel](https://vercel.com/).
2. Click **New Project**.
3. Import this repository from GitHub.
4. Vercel will auto-detect Vite and configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. (Optional) Add environment variables:
   - In **Project Settings → Environment Variables**, add your keys.
   - Example:
     ```
     VITE_API_URL=https://your-api.com
     VITE_API_KEY=your-key-here
     ```

---

### ⚠️ Notes on Environment Variables

- All **frontend variables must start with `VITE_`** (this is required by Vite).
- Example: `VITE_API_KEY=mysecret`.
- Without them, the app will still run using local/mock data, but live APIs will not connect.

---
