import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroImage from "@/public/hero-background.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={HeroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-950/50 to-95% to-black/50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-8xl font-bold text-accent-50 mb-6 leading-[1.1] tracking-tight text-balance">
            Expertise, Integrity, Results, Tailored Legal Solutions
          </h1>
          <p className="text-lg lg:text-xl text-accent-50/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            With proven expertise and strategic approaches, we stand as your
            trusted legal partner to support your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-secondary text-accent-50 hover:bg-secondary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
            >
              Book Consultant
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-transparent text-accent-50 backdrop-blur-sm border-2 border-accent-50/20 hover:bg-secondary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
