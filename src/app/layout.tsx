import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Sales Dashboard", description: "Yearly sales with Next.js 15 + Recharts" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
