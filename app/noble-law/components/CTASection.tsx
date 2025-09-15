import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="">
      <div className="">
        <div className="bg-gradient-to-br from-primary to-primary-700 p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(172, 125, 85, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 80%, rgba(172, 125, 85, 0.2) 0%, transparent 50%)`,
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Get started today
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-10 max-w-3xl mx-auto leading-tight">
              Let Licorne Be Your Trusted Legal Partner
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/noble-law/contact"
                className="group px-8 py-4 bg-white text-primary hover:bg-secondary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                Book Consultant
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
