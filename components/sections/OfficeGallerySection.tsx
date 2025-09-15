"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const officeImages = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=300&fit=crop"
];

export function OfficeGallerySection() {
  return (
    <Section background="luxury">
      <SectionHeading title="Professional Excellence & Trust" />

      {/* Office Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {officeImages.map((src, index) => (
          <motion.div
            key={index}
            className="relative h-48 rounded-lg overflow-hidden cursor-pointer card-elevated"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={src} alt={`Office ${index + 1}`} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}