"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="card-elevated rounded-xl p-6 hover:card-premium transition-all duration-300"
    >
      <motion.div
        className="w-16 h-16 mb-4 bg-primary-subtle rounded-full flex items-center justify-center"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <Icon className="w-8 h-8 text-primary" />
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-text">{title}</h3>
      <p className="text-secondary">{description}</p>
    </motion.div>
  );
}