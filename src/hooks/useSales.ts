"use client";
import { useEffect, useState } from "react";
import type { MonthlySale, Year } from "@/types/sales";

export function useSales(year: Year) {
  const [data, setData] = useState<MonthlySale[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(`/api/sales?year=${year}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("Request failed"))))
      .then((json) => active && (setData(json.data), setError(null)))
      .catch((e: Error) => active && setError(e.message))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [year]);

  return { data, loading, error };
}
