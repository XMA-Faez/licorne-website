import HeroImage from "@/public/hero-background.png";
import { ServicePage } from "@/app/services/components/ServicePage";

const serviceData = {
  hero: {
    title: "Business Legal Consultation",
    description:
      "Strategic counsel for corporate regulations and investment matters, designed to keep your business compliant, protected, and ready for growth.",
    image: HeroImage,
    imageAlt: "Business legal consultation",
  },
  overview: {
    eyebrow: "Overview",
    title: "Legal clarity that strengthens every decision",
    description:
      "We help businesses navigate complex legal landscapes with clear advice, strong documentation, and proactive risk management. From structuring and investment to contracts and governance, we build a resilient legal foundation that supports long-term growth.",
    highlights: [
      "Corporate structuring and governance reviews",
      "Investment and shareholder agreements",
      "Regulatory compliance and licensing strategy",
      "Risk assessment and mitigation planning",
    ],
  },
  stats: [
    { value: "15+", label: "Years of advisory work" },
    { value: "500+", label: "Businesses supported" },
    { value: "98%", label: "Client satisfaction" },
  ],
  deliverables: {
    eyebrow: "Deliverables",
    title: "Strategic outputs that help you move faster with confidence",
    items: [
      {
        title: "Compliance Health Check",
        description:
          "A clear map of obligations, gaps, and priorities aligned to your business model.",
      },
      {
        title: "Contract Suite",
        description:
          "Drafting and review of agreements that protect interests and reduce disputes.",
      },
      {
        title: "Board & Shareholder Guidance",
        description:
          "Decision frameworks and documentation aligned with local regulations.",
      },
      {
        title: "Ongoing Counsel",
        description:
          "Responsive support for day-to-day legal questions and emerging risks.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "A clear path from consultation to execution",
    items: [
      {
        step: "01",
        title: "Discovery",
        description:
          "We gather your business context, structure, goals, and regulatory touchpoints.",
      },
      {
        step: "02",
        title: "Assessment",
        description:
          "We identify risks, compliance gaps, and contractual exposure with clear options.",
      },
      {
        step: "03",
        title: "Action Plan",
        description:
          "We deliver a prioritized roadmap with timelines, owners, and legal documents.",
      },
      {
        step: "04",
        title: "Execution",
        description:
          "We implement, negotiate, and stay involved through key milestones.",
      },
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    title: "Answers to common questions",
    items: [
      {
        question: "Who is this service best suited for?",
        answer:
          "Founders, executive teams, and investors who need reliable guidance on regulatory, contractual, and governance matters.",
      },
      {
        question: "Do you support startups and SMEs?",
        answer:
          "Yes. We tailor the scope to your stage and budget while keeping compliance strong.",
      },
      {
        question: "Can you review existing contracts?",
        answer:
          "Absolutely. We review, redline, and provide negotiation guidance as needed.",
      },
    ],
  },
  cta: {
    title: "Ready to strengthen your legal foundation?",
    description:
      "Book a consultation and get a clear plan for compliance, contracts, and risk management.",
    primaryLabel: "Book Consultation",
    primaryHref: "/contact",
    secondaryLabel: "View All Services",
    secondaryHref: "/services",
  },
};

export const metadata = {
  title: "Business Legal Consultation | Licorne",
  description:
    "Expert legal guidance in corporate regulations and investment matters to help businesses stay compliant and protected.",
};

export default function BusinessLegalConsultationPage() {
  return <ServicePage {...serviceData} />;
}
