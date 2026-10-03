import StatCard from "@/components/molecules/StatCard";
import type { MonthlySale } from "@/types/sales";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function SalesSummary({ data }: { data: MonthlySale[] }) {
  if (!data.length) return null;
  const total = data.reduce((s, d) => s + d.sales, 0);
  const best = data.reduce((a, b) => (b.sales > a.sales ? b : a));
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <StatCard label="Total sales" value={usd(total)} />
      <StatCard label="Average / month" value={usd(Math.round(total / data.length))} />
      <StatCard label="Best month" value={`${best.month} · ${usd(best.sales)}`} />
    </div>
  );
}
