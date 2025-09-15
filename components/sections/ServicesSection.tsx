"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";

const services = [
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    title: "Business Setup",
    desc: "Company formation in UAE with complete legal support"
  },
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    title: "Notary Services",
    desc: "Document attestation and legal certification"
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    title: "Visa Services",
    desc: "Residence and work permits for you and your team"
  },
  {
    image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=600&h=400&fit=crop",
    title: "Documentation Services",
    desc: "Complete paperwork management and filing"
  },
  {
    image: "https://images.unsplash.com/photo-1553028826-ccdfc006b078?w=600&h=400&fit=crop",
    title: "Attestations",
    desc: "Official document verification and authentication"
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    title: "Conveyancing Services",
    desc: "Property transfer and real estate documentation"
  }
];

export function ServicesSection() {
  return (
    <Section id="services" background="pattern">
      <SectionHeading title="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.desc}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}