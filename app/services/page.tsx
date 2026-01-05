import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/hero-background.png";
import { ServiceCta } from "@/app/services/components/ServiceCta";

const services = [
  {
    title: "Mainland Company Setup",
    description:
      "Establish your LLC in Dubai mainland with full UAE market access. We handle sponsor arrangements, licensing, and government approvals.",
    href: "/services/mainland-company-setup",
  },
  {
    title: "Free Zone Company Setup",
    description:
      "100% foreign ownership, tax advantages, and simplified regulations. We help you choose from 40+ free zones and manage the entire process.",
    href: "/services/free-zone-company-setup",
  },
  {
    title: "Visa & Immigration",
    description:
      "Investor visas, employment visas, family sponsorship, and Golden Visas. Complete immigration support from entry permit to Emirates ID.",
    href: "/services/visa-immigration",
  },
  {
    title: "PRO & Government Services",
    description:
      "License renewals, document attestation, visa processing, and government liaison. We handle the paperwork that keeps your business compliant.",
    href: "/services/pro-government-services",
  },
  {
    title: "Bank Account Opening",
    description:
      "Corporate bank account setup with expert guidance. We prepare documentation, introduce you to banks, and support until activation.",
    href: "/services/bank-account-opening",
  },
  {
    title: "Golden Visa UAE",
    description:
      "Secure your 10-year residency in the UAE. We handle the entire Golden Visa application process for investors, entrepreneurs, and specialists.",
    href: "/services/golden-visa",
  },
  {
    title: "Trade License Services",
    description:
      "New licenses, renewals, amendments, and activity changes. Keep your business license current and compliant without interruption.",
    href: "/services/trade-license",
  },
  {
    title: "Office Solutions",
    description:
      "Virtual offices, flexi desks, and serviced offices. Get the business address and workspace you need across prime Dubai locations.",
    href: "/services/office-solutions",
  },
  {
    title: "Accounting & VAT",
    description:
      "VAT registration, bookkeeping, financial reporting, and tax compliance. Keep your numbers accurate and your business compliant.",
    href: "/services/accounting-vat",
  },
  {
    title: "Company Liquidation",
    description:
      "Close your UAE business properly and completely. License cancellation, visa terminations, and clean exit documentation.",
    href: "/services/company-liquidation",
  },
];

export const metadata = {
  title: "Business Setup Services Dubai | Licorne",
  description: "Complete business setup services in Dubai. Mainland and free zone company formation, visa services, PRO support, and corporate banking assistance.",
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
              Everything you need to launch and operate in Dubai
            </h1>
            <p className="text-lg lg:text-xl text-accent-50/80 mt-6 leading-relaxed">
              From company formation to visas, banking, and ongoing compliance — we handle the complexity so you can focus on building your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-3 max-w-3xl mx-auto leading-tight">
              Choose a service to learn more
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
