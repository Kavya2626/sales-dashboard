export type Year = 2022 | 2023 | 2024;
export type ChartType = "bar" | "line" | "pie";
export interface MonthlySale { month: string; sales: number }
export interface SalesResponse { year: Year; data: MonthlySale[] }
