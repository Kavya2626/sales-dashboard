"use client";
import {
  Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis, Legend,
} from "recharts";
import type { ChartType, MonthlySale } from "@/types/sales";

const COLORS = ["#4f46e5","#0ea5e9","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#14b8a6","#f97316","#84cc16","#6366f1","#06b6d4"];
const fmt = (v: number) => `$${v.toLocaleString("en-US")}`;

export default function SalesChart({ data, type }: { data: MonthlySale[]; type: ChartType }) {
  if (!data.length) return <p className="py-20 text-center text-slate-500">No months match this filter.</p>;

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        {type === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis tickFormatter={fmt} width={70} />
            <Tooltip formatter={fmt} /><Bar dataKey="sales" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        ) : type === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis tickFormatter={fmt} width={70} />
            <Tooltip formatter={fmt} /><Line type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        ) : (
          <PieChart>
            <Pie data={data} dataKey="sales" nameKey="month" outerRadius={120} label>
              {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip formatter={fmt} /><Legend />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
