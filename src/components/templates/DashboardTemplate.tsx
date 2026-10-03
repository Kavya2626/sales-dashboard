"use client";
import { useMemo, useState } from "react";
import Card from "@/components/atoms/Card";
import YearSelector from "@/components/molecules/YearSelector";
import ChartTypeSwitcher from "@/components/molecules/ChartTypeSwitcher";
import ThresholdFilter from "@/components/molecules/ThresholdFilter";
import SalesChart from "@/components/organisms/SalesChart";
import SalesSummary from "@/components/organisms/SalesSummary";
import { useSales } from "@/hooks/useSales";
import type { ChartType, Year } from "@/types/sales";

export default function DashboardTemplate() {
  const [year, setYear] = useState<Year>(2024);
  const [type, setType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState(0);
  const { data, loading, error } = useSales(year);
  const filtered = useMemo(() => data.filter((d) => d.sales >= threshold), [data, threshold]);

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Sales Dashboard</h1>
        <p className="text-sm text-slate-500">Monthly sales for {year}</p>
      </header>

      <Card className="flex flex-wrap items-center justify-between gap-4">
        <YearSelector value={year} onChange={setYear} />
        <ThresholdFilter value={threshold} onChange={setThreshold} />
        <ChartTypeSwitcher value={type} onChange={setType} />
      </Card>

      {error && <p className="text-red-600">Failed to load: {error}</p>}
      {loading ? <p className="text-slate-500">Loading…</p> : (
        <>
          <SalesSummary data={filtered} />
          <Card><SalesChart data={filtered} type={type} /></Card>
        </>
      )}
    </main>
  );
}
