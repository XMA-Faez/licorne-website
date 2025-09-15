"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProcessStep } from "@/components/cards/ProcessStep";

const processSteps = [
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
    step: 1,
    title: "Consult",
    desc: "Free consultation to understand your needs"
  },
  {
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=300&h=300&fit=crop",
    step: 2,
    title: "Submit",
    desc: "Prepare and submit all documents"
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=300&fit=crop",
    step: 3,
    title: "Process",
    desc: "We handle all government procedures"
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=300&fit=crop",
    step: 4,
    title: "Launch",
    desc: "Receive license and start operating",
    isLast: true
  }
];

export function ProcessSection() {
  return (
    <Section id="process" background="geometric">
      <SectionHeading
        title="How It Works"
        subtitle="Your business setup journey in 4 simple steps"
      />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              image={step.image}
              step={step.step}
              title={step.title}
              description={step.desc}
              isLast={step.isLast}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}