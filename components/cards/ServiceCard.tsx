"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export function ServiceCard({
  image,
  title,
  description,
  href = "#",
  index = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-xl card-premium shadow-premium"
    >
      <div className="h-48 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-text">{title}</h3>
        <p className="text-secondary mb-3">{description}</p>
        <Link
          href={href}
          className="text-primary-text font-medium hover:underline inline-flex items-center gap-1 transition-all duration-200 hover:gap-2"
        >
          Learn more
          <span className="transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}