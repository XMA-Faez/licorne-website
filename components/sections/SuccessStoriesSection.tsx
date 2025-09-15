"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    title: "Tech Startup Launch",
    description: "From idea to operational in just 3 days. Complete setup with visa processing for 10 team members.",
    client: {
      name: "Ahmed Al-Rashid",
      role: "CEO, TechVentures",
      avatar: "https://i.pravatar.cc/40?img=1"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    title: "Consulting Firm Expansion",
    description: "Seamless international expansion with full regulatory compliance and office setup.",
    client: {
      name: "Sarah Johnson",
      role: "Partner, Global Consult",
      avatar: "https://i.pravatar.cc/40?img=2"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    title: "E-commerce Success",
    description: "Complete business setup with trade license, warehousing, and logistics support.",
    client: {
      name: "Michael Chen",
      role: "Founder, ShopDirect",
      avatar: "https://i.pravatar.cc/40?img=3"
    }
  }
];

export function SuccessStoriesSection() {
  return (
    <Section background="surface">
      <SectionHeading title="Success Stories" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((story, index) => (
          <TestimonialCard key={index} {...story} index={index} />
        ))}
      </div>
    </Section>
  );
}