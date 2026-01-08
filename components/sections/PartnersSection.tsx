"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const partners = ["DED", "DMCC", "ADGM", "DIFC"];

const certifications = [
  {
    title: "ISO Certified",
    description: "International standards for quality management systems",
    icon: "🏆",
    badge: "ISO 9001:2015"
  },
  {
    title: "Legal Compliance",
    description: "Fully compliant with UAE federal and emirate regulations",
    icon: "⚖️",
    badge: "UAE LAW"
  },
  {
    title: "Data Security",
    description: "Your business information is protected with bank-grade security",
    icon: "🔒",
    badge: "SECURE"
  }
];

export function PartnersSection() {
  return (
    <Section background="depth">
      <SectionHeading title="Government Approvals & Certifications" />

      {/* Government Partners */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-center mb-8 text-primary">Licensed & Approved By</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="h-16 w-40 card-premium rounded-lg flex items-center justify-center text-secondary font-bold text-lg shadow-premium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="card-elevated p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">{cert.icon}</div>
            <div className="inline-block px-3 py-1 bg-secondary text-white text-sm font-semibold rounded-full mb-3">
              {cert.badge}
            </div>
            <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
            <p className="text-primary">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}