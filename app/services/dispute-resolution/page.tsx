import HeroImage from "@/public/hero-background.png";
import { ServicePage } from "@/app/services/components/ServicePage";

const serviceData = {
  hero: {
    title: "Dispute Resolution",
    description:
      "Thoughtful legal strategy for complex disputes, focused on protecting your position and reaching efficient outcomes.",
    image: HeroImage,
    imageAlt: "Dispute resolution",
  },
  overview: {
    eyebrow: "Overview",
    title: "Resolve disputes with clear strategy and control",
    description:
      "We help businesses handle disputes with a balanced approach to negotiation, documentation, and escalation. Our focus is on achieving practical resolutions while protecting your interests and reputation.",
    expectationDescription:
      "Dispute management that blends strategy, speed, and sound legal judgment.",
    highlights: [
      "Pre-dispute risk evaluation and strategy",
      "Negotiation and settlement guidance",
      "Litigation support and coordination",
      "Enforcement and recovery planning",
    ],
  },
  stats: [
    { value: "15+", label: "Years of dispute guidance" },
    { value: "200+", label: "Matters resolved" },
    { value: "96%", label: "Favorable outcomes" },
  ],
  deliverables: {
    eyebrow: "Deliverables",
    title: "Strong preparation leads to faster resolution",
    items: [
      {
        title: "Case Strategy Memo",
        description:
          "A clear assessment of options, likelihoods, and recommended next steps.",
      },
      {
        title: "Negotiation Playbook",
        description:
          "Structured approach to reach outcomes while protecting your position.",
      },
      {
        title: "Evidence & Documentation Review",
        description:
          "We organize and strengthen the facts to support your case.",
      },
      {
        title: "Resolution Roadmap",
        description:
          "Practical timelines and responsibilities for each phase of the matter.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "A focused approach to moving matters forward",
    items: [
      {
        step: "01",
        title: "Initial Review",
        description:
          "We review the dispute background, documentation, and objectives.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "We build a focused plan for negotiation, mediation, or litigation.",
      },
      {
        step: "03",
        title: "Execution",
        description:
          "We lead communications, documentation, and counsel through each stage.",
      },
      {
        step: "04",
        title: "Resolution",
        description:
          "We close the matter with enforceable outcomes and risk mitigation.",
      },
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    title: "Answers to common questions",
    items: [
      {
        question: "Can you help before a dispute escalates?",
        answer:
          "Yes. Early advice often reduces cost and risk, and can prevent escalation.",
      },
      {
        question: "Do you support arbitration and mediation?",
        answer:
          "We can guide strategy and documentation for alternative dispute resolution.",
      },
      {
        question: "How quickly can you get involved?",
        answer:
          "We can start with an initial review right away once we receive key documents.",
      },
    ],
  },
  cta: {
    title: "Need a clear resolution path?",
    description:
      "Get guidance on strategy, documentation, and next steps tailored to your dispute.",
    primaryLabel: "Book Consultation",
    primaryHref: "/contact",
    secondaryLabel: "View All Services",
    secondaryHref: "/services",
  },
};

export const metadata = {
  title: "Dispute Resolution | Licorne",
  description:
    "Practical legal strategies for negotiations, settlements, and dispute management.",
};

export default function DisputeResolutionPage() {
  return <ServicePage {...serviceData} />;
}
