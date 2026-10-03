import Button from "@/components/atoms/Button";
import { YEARS } from "@/data/sales";
import type { Year } from "@/types/sales";

export default function YearSelector({ value, onChange }: { value: Year; onChange: (y: Year) => void }) {
  return (
    <div className="flex gap-2">
      {YEARS.map((y) => (
        <Button key={y} active={y === value} onClick={() => onChange(y)}>{y}</Button>
      ))}
    </div>
  );
}
