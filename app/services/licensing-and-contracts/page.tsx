import HeroImage from "@/public/hero-background.png";
import { ServicePage } from "@/app/services/components/ServicePage";

const serviceData = {
  hero: {
    title: "Licensing and Contracts",
    description:
      "Clear, enforceable agreements and licensing guidance that protect your business and keep operations compliant.",
    image: HeroImage,
    imageAlt: "Licensing and contracts",
  },
  overview: {
    eyebrow: "Overview",
    title: "Contracts that reduce risk and unlock growth",
    description:
      "We help structure, draft, and review contracts with practical protections in place. From commercial agreements to licensing frameworks, our guidance keeps your business aligned, compliant, and ready to scale.",
    highlights: [
      "Commercial and vendor contract drafting",
      "Licensing strategy and compliance reviews",
      "Negotiation support and redlining",
      "Contract lifecycle guidance and renewals",
    ],
    expectationDescription:
      "A clear contract strategy that protects value and strengthens relationships.",
  },
  stats: [
    { value: "15+", label: "Years of contract experience" },
    { value: "1k+", label: "Agreements reviewed" },
    { value: "95%", label: "Client retention rate" },
  ],
  deliverables: {
    eyebrow: "Deliverables",
    title: "Documentation that supports confident decisions",
    items: [
      {
        title: "Contract Audit",
        description:
          "Identify risks, gaps, and renewal timelines across your key agreements.",
      },
      {
        title: "Custom Agreement Drafting",
        description:
          "Tailored contracts aligned with your objectives and regulatory needs.",
      },
      {
        title: "Negotiation Support",
        description:
          "Strategic redlines and guidance to protect your position.",
      },
      {
        title: "Licensing Frameworks",
        description:
          "Clear terms for usage, territory, IP rights, and compliance obligations.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "From requirements to signed agreements",
    items: [
      {
        step: "01",
        title: "Scope",
        description:
          "We define objectives, regulatory constraints, and negotiation priorities.",
      },
      {
        step: "02",
        title: "Draft",
        description:
          "We prepare contracts or redlines built for clarity and enforcement.",
      },
      {
        step: "03",
        title: "Align",
        description:
          "We support negotiations and ensure all parties are aligned on terms.",
      },
      {
        step: "04",
        title: "Finalize",
        description:
          "We confirm compliance and execution readiness before signing.",
      },
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    title: "Answers to common questions",
    items: [
      {
        question: "Do you review existing contracts?",
        answer:
          "Yes. We assess risk, compliance, and enforceability, then provide actionable revisions.",
      },
      {
        question: "Can you handle multi-party agreements?",
        answer:
          "We can structure and coordinate agreements involving multiple stakeholders and terms.",
      },
      {
        question: "Do you support licensing in regulated industries?",
        answer:
          "Yes. We align licensing terms with regulatory obligations and business objectives.",
      },
    ],
  },
  cta: {
    title: "Need contracts that protect your business?",
    description:
      "Book a consultation to align your agreements with your goals and compliance needs.",
    primaryLabel: "Book Consultation",
    primaryHref: "/contact",
    secondaryLabel: "View All Services",
    secondaryHref: "/services",
  },
};

export const metadata = {
  title: "Licensing and Contracts | Licorne",
  description:
    "Clear, enforceable agreements and licensing support tailored to your business.",
};

export default function LicensingAndContractsPage() {
  return <ServicePage {...serviceData} />;
}
