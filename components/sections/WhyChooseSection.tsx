"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Zap, Trophy, Eye, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Same Day Setup",
    desc: "Fastest processing in UAE"
  },
  {
    icon: Trophy,
    title: "100% Success",
    desc: "Guaranteed approval"
  },
  {
    icon: Eye,
    title: "No Hidden Fees",
    desc: "Transparent pricing"
  },
  {
    icon: Users,
    title: "Expert Support",
    desc: "Dedicated managers"
  }
];

export function WhyChooseSection() {
  return (
    <Section background="depth">
      <SectionHeading title="Why Choose Licorne?" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Feature Image */}
        <motion.div
          className="relative h-96 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
            alt="Team meeting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Professional Excellence</h3>
            <p>Dedicated team of experts at your service</p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}