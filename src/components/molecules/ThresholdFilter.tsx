import Input from "@/components/atoms/Input";

export default function ThresholdFilter({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-600">
      Min sales ($)
      <Input type="number" min={0} step={1000} value={value} onChange={(e) => onChange(Number(e.target.value) || 0)} className="w-32" />
    </label>
  );
}
