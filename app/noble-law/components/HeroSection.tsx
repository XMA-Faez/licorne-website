import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(172, 125, 85, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(172, 125, 85, 0.05) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(172, 125, 85, 0.08) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-8xl font-bold text-primary mb-6 leading-[1.1] tracking-tight text-balance">
            Expertise, Integrity, Results, Tailored Legal Solutions
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
            With proven expertise and strategic approaches, we stand as your
            trusted legal partner to support your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/noble-law/contact"
              className="group px-8 py-4 bg-primary text-white hover:bg-secondary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
            >
              Book Consultant
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
