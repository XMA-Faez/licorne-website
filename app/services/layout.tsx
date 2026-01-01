import type { ReactNode } from "react";
import { Inter, Instrument_Serif } from "next/font/google";
import "@/app/(home)/noble-law.css";
import { Header } from "@/app/(home)/components/Header";
import { Footer } from "@/app/(home)/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${instrumentSerif.variable} min-h-screen bg-background`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
