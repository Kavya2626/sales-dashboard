import Button from "@/components/atoms/Button";
import type { ChartType } from "@/types/sales";

const TYPES: ChartType[] = ["bar", "line", "pie"];

export default function ChartTypeSwitcher({ value, onChange }: { value: ChartType; onChange: (t: ChartType) => void }) {
  return (
    <div className="flex gap-2">
      {TYPES.map((t) => (
        <Button key={t} active={t === value} onClick={() => onChange(t)} className="capitalize">{t}</Button>
      ))}
    </div>
  );
}
