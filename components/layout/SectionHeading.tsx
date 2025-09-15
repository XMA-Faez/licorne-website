"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-secondary">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}