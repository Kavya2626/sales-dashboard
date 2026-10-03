# Sales Dashboard (Next.js 15 + TypeScript + Tailwind + Recharts)

A small dashboard showing monthly sales for **2022, 2023 and 2024**, built with **Atomic Design**.

## What I did
1. Scaffolded a Next.js 15 (App Router) project with TypeScript and Tailwind CSS 3.
2. Created an empty `/dashboard` page, then composed components inside it.
3. Added mock data (`src/data/sales.ts`) modelled on a Kaggle-style monthly retail sales dataset, served through an API route (`/api/sales?year=2024`).
4. Built a year selector, summary stat cards and a Recharts chart.
5. Implemented the enhancements:
   - **Custom filter** – input to set a minimum monthly sales threshold.
   - **API integration** – the UI fetches from `/api/sales`; swap `getSales()` in `src/app/api/sales/route.ts` for a real DB/API/Kaggle CSV.
   - **Multiple chart types** – switch between bar, line and pie.

## Atomic structure
```
src/components
├── atoms/       Button, Input, Card
├── molecules/   YearSelector, ChartTypeSwitcher, ThresholdFilter, StatCard
├── organisms/   SalesChart, SalesSummary
└── templates/   DashboardTemplate
src/app/dashboard/page.tsx   (page)
```

## Setup
```bash
npm install
npm run dev      # http://localhost:3000 (redirects to /dashboard)
npm run build && npm start
```
Requires Node.js 18.18+.

## Using real Kaggle data
Download a sales CSV from Kaggle (e.g. "Superstore Sales"), aggregate by year/month, and replace the `raw` object in `src/data/sales.ts` (or load the CSV in the API route).
