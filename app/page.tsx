"use client";

import { Inter, Instrument_Serif } from "next/font/google";
import "./(home)/noble-law.css";

// Components
import { Header } from "./(home)/components/Header";
import { HeroSection } from "./(home)/components/HeroSection";
import { AboutSection } from "./(home)/components/AboutSection";
import { ServicesSection } from "./(home)/components/ServicesSection";
import { WhyChooseUsSection } from "./(home)/components/WhyChooseUsSection";
import { TestimonialsSliderSection } from "./(home)/components/TestimonialsSliderSection";
import { TeamSection } from "./(home)/components/TeamSection";
import { FAQSection } from "./(home)/components/FAQSection";
import { CTASection } from "./(home)/components/CTASection";
import { Footer } from "./(home)/components/Footer";

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

export default function LicornePage() {
  return (
    <div
      className={`${inter.variable} ${instrumentSerif.variable} min-h-screen bg-background`}
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSliderSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
