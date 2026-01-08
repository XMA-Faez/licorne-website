"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "subtle" | "surface" | "premium" | "luxury" | "depth" | "pattern" | "geometric";
  id?: string;
}

const backgroundClasses = {
  default: "bg-background",
  subtle: "bg-gradient-diagonal",
  surface: "bg-surface",
  premium: "bg-secondary",
  luxury: "bg-warm-gradient",
  depth: "bg-gradient-radial",
  pattern: "bg-background bg-dots-pattern",
  geometric: "bg-background bg-grid-pattern",
};

export function Section({
  children,
  className = "",
  background = "default",
  id
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 ${backgroundClasses[background]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}