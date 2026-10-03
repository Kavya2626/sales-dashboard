import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { active?: boolean }

export default function Button({ active, className = "", ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
        active ? "bg-indigo-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
      } ${className}`}
    />
  );
}
