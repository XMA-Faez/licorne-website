import HeroImage from "@/public/hero-background.png";
import { ServicePage } from "@/app/services/components/ServicePage";

const serviceData = {
  hero: {
    title: "Intellectual Property Protection",
    description:
      "Safeguard your brand, innovations, and creative assets with clear registration and enforcement strategies.",
    image: HeroImage,
    imageAlt: "Intellectual property protection",
  },
  overview: {
    eyebrow: "Overview",
    title: "Protect the ideas that make you valuable",
    description:
      "We help businesses secure and manage intellectual property across trademarks, copyrights, and trade secrets. From filing to enforcement, our guidance keeps your IP defensible and aligned with your commercial goals.",
    highlights: [
      "Trademark searches and registrations",
      "IP portfolio audits and risk reviews",
      "Licensing and usage agreements",
      "Enforcement and infringement response",
    ],
    expectationDescription:
      "A proactive approach to protecting value and deterring infringement.",
  },
  stats: [
    { value: "15+", label: "Years of IP advisory" },
    { value: "300+", label: "Marks protected" },
    { value: "90%", label: "Successful registrations" },
  ],
  deliverables: {
    eyebrow: "Deliverables",
    title: "Clear protections for your brand and innovation",
    items: [
      {
        title: "Trademark Strategy",
        description:
          "Guidance on classes, territories, and filing requirements.",
      },
      {
        title: "IP Audit",
        description:
          "A structured review of your assets, ownership, and exposure.",
      },
      {
        title: "Enforcement Support",
        description:
          "Cease-and-desist strategy and escalation planning when needed.",
      },
      {
        title: "Licensing Agreements",
        description:
          "Usage terms that preserve rights while enabling growth.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "From assessment to long-term protection",
    items: [
      {
        step: "01",
        title: "Identify",
        description:
          "We map your existing IP and prioritize what needs protection.",
      },
      {
        step: "02",
        title: "Protect",
        description:
          "We file, register, and document your IP with a clear strategy.",
      },
      {
        step: "03",
        title: "Defend",
        description:
          "We monitor risks and respond to infringement effectively.",
      },
      {
        step: "04",
        title: "Expand",
        description:
          "We support licensing and growth aligned with your IP rights.",
      },
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    title: "Answers to common questions",
    items: [
      {
        question: "When should we register a trademark?",
        answer:
          "As early as possible, especially before launch or expansion into new markets.",
      },
      {
        question: "Can you handle international filings?",
        answer:
          "We can guide strategy and coordinate with partner counsel where needed.",
      },
      {
        question: "What if someone infringes on our IP?",
        answer:
          "We assess the situation and recommend enforcement steps aligned with your goals.",
      },
    ],
  },
  cta: {
    title: "Ready to protect your IP?",
    description:
      "Book a consultation to secure your trademarks, brand assets, and innovation.",
    primaryLabel: "Book Consultation",
    primaryHref: "/contact",
    secondaryLabel: "View All Services",
    secondaryHref: "/services",
  },
};

export const metadata = {
  title: "Intellectual Property Protection | Licorne",
  description:
    "Safeguarding your brand, innovations, and creative assets with the right filings.",
};

export default function IntellectualPropertyProtectionPage() {
  return <ServicePage {...serviceData} />;
}
