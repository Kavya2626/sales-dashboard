import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

interface CSVRow {
  date: string;
  price_unit: string;
  units_sold: string;
}

export async function GET(req: Request) {
  try {
    const year = Number(
      new URL(req.url).searchParams.get("year")
    );

    if (![2022, 2023, 2024].includes(year)) {
      return NextResponse.json(
        { error: "Invalid year" },
        { status: 400 }
      );
    }

    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      "FMCG_2022_2024.csv"
    );

    const csv = fs.readFileSync(filePath, "utf8");

    const parsed = Papa.parse<CSVRow>(csv, {
      header: true,
      skipEmptyLines: true,
    });

    const monthlySales = Array(12).fill(0);

    for (const row of parsed.data) {
      if (!row.date) continue;

      const date = new Date(row.date);

      if (isNaN(date.getTime())) continue;

      if (date.getFullYear() !== year) continue;

      const month = date.getMonth();

      const price = Number(row.price_unit) || 0;
      const units = Number(row.units_sold) || 0;

      monthlySales[month] += price * units;
    }

    const data = monthlySales.map((sales, index) => ({
      month: months[index],
      sales: Math.round(sales * 100) / 100,
    }));

    return NextResponse.json({
      year,
      data,
    });

  } catch (error) {
    console.error("CSV error:", error);

    return NextResponse.json(
      { error: "Failed to read Kaggle CSV" },
      { status: 500 }
    );
  }
}