"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ProcessStepProps {
  image: string;
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
  index?: number;
}

export function ProcessStep({
  image,
  step,
  title,
  description,
  isLast = false,
  index = 0
}: ProcessStepProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut"
      }}
    >
      <div className="relative mb-6">
        <motion.div
          className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-luxury"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        <motion.div
          className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-luxury ${
            isLast ? "bg-luxury-gradient" : "bg-premium-gradient"
          }`}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 300
          }}
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          {isLast ? "✓" : step}
        </motion.div>
      </div>
      <h3 className="font-bold mb-2 text-text">{title}</h3>
      <p className="text-sm text-primary">{description}</p>
    </motion.div>
  );
}