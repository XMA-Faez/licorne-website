import Image from "next/image";
import Link from "next/link";
import { Inter, Instrument_Serif } from "next/font/google";
import "@/app/(home)/noble-law.css";
import HeroImage from "@/public/hero-background.png";
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

const values = [
  {
    title: "Integrity",
    description:
      "We advise with clarity and honesty so decisions are grounded and confident.",
  },
  {
    title: "Precision",
    description:
      "Every document, clause, and strategy is built to be clear and enforceable.",
  },
  {
    title: "Partnership",
    description:
      "We work alongside your team as a practical, responsive legal partner.",
  },
  {
    title: "Results",
    description:
      "We focus on outcomes that support long-term growth and stability.",
  },
];

export const metadata = {
  title: "About Us | Licorne",
  description:
    "Learn about Licorne, our values, and how we support businesses with trusted legal guidance.",
};

export default function AboutPage() {
  return (
    <div
      className={`${inter.variable} ${instrumentSerif.variable} min-h-screen bg-background`}
    >
      <Header />
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            alt="About Licorne"
            className="absolute inset-0 w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-950/70 via-primary/60 to-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About us
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-accent-50 mt-4 leading-tight">
              Legal guidance built on trust and precision
            </h1>
            <p className="text-lg lg:text-xl text-accent-50/80 mt-6 leading-relaxed">
              Licorne is a legal advisory partner focused on helping businesses
              navigate complex matters with confidence, clarity, and care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-semibold text-sm uppercase tracking-wider border-b border-secondary w-fit p-2 mb-6 block text-secondary">
                Our mission
              </span>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-primary">
                Clear advice. Strong protection. Confident growth.
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                We combine deep legal insight with practical business thinking.
                Our team supports founders, executives, and investors with
                reliable guidance across governance, contracts, disputes, and
                intellectual property protection.
              </p>
            </div>
            <div className="bg-primary/95 text-accent-50 p-10 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                  }}
                ></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                  How we work
                </h3>
                <p className="text-accent-50/80 leading-relaxed">
                  We start with your goals, define the legal path, and deliver
                  documents and strategy that stay aligned with your growth.
                </p>
                <div className="mt-8 space-y-4 text-accent-50/80">
                  <p>Strategic counsel, not just paperwork.</p>
                  <p>Clear timelines and responsive communication.</p>
                  <p>Focused on outcomes that reduce risk.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-white border-b w-fit mx-auto p-2 font-semibold text-sm uppercase tracking-wider mb-4">
              Our values
            </p>
            <h2 className="text-4xl lg:text-5xl text-white max-w-4xl mx-auto leading-tight">
              What guides every engagement
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xs p-8 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl text-white mb-3">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-primary-700 p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(172, 125, 85, 0.35) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(172, 125, 85, 0.25) 0%, transparent 50%)",
                }}
              ></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Want to work with Licorne?
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Tell us about your goals and we will recommend the right legal
                approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white text-primary hover:bg-secondary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
