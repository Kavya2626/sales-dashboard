import type { MonthlySale, Year } from "@/types/sales";

// Mock data shaped like a Kaggle retail "monthly sales" dataset (USD).
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const raw: Record<Year, number[]> = {
  2022: [41200, 38500, 45300, 47800, 50100, 52400, 49900, 53200, 55600, 58900, 67400, 74300],
  2023: [46800, 43100, 51200, 54600, 57300, 59800, 57100, 61400, 63900, 67200, 76800, 85100],
  2024: [52300, 49700, 58400, 62100, 65900, 68700, 66200, 71500, 74800, 78600, 89400, 98200],
};

export const YEARS: Year[] = [2022, 2023, 2024];
export const getSales = (year: Year): MonthlySale[] =>
  raw[year].map((sales, i) => ({ month: months[i], sales }));
