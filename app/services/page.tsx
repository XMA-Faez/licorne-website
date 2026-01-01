import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/hero-background.png";
import { ServiceCta } from "@/app/services/components/ServiceCta";

const services = [
  {
    title: "Business Legal Consultation",
    description:
      "Strategic guidance on corporate regulations, governance, and investment matters.",
    href: "/services/business-legal-consultation",
  },
  {
    title: "Dispute Resolution",
    description:
      "Practical legal strategies for negotiations, settlements, and dispute management.",
    href: "/services/dispute-resolution",
  },
  {
    title: "Licensing and Contracts",
    description:
      "Clear, enforceable agreements and licensing support tailored to your business.",
    href: "/services/licensing-and-contracts",
  },
  {
    title: "Intellectual Property Protection",
    description:
      "Safeguarding your brand, innovations, and creative assets with the right filings.",
    href: "/services/intellectual-property-protection",
  },
];

export const metadata = {
  title: "Services | Licorne",
  description: "Explore Licorne legal services and specialized practice areas.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            alt="Licorne services"
            className="absolute inset-0 w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-950/70 via-primary/60 to-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Services
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-accent-50 mt-4 leading-tight">
              Dedicated legal expertise across key practice areas
            </h1>
            <p className="text-lg lg:text-xl text-accent-50/80 mt-6 leading-relaxed">
              Explore our focused services and choose the guidance that aligns
              with your business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Practice Areas
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-3 max-w-3xl mx-auto leading-tight">
              Choose a service to view detailed guidance
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group border border-secondary/20 rounded-sm p-8 hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <h3 className="text-2xl text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="text-secondary font-medium">
                  View service details
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCta
        title="Not sure where to start?"
        description="Book a consultation and we will recommend the best approach for your situation."
        primaryLabel="Book Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
