"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

interface TestimonialCardProps {
  image: string;
  title: string;
  description: string;
  client: {
    name: string;
    role: string;
    avatar: string;
  };
  index?: number;
}

export function TestimonialCard({
  image,
  title,
  description,
  client,
  index = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card variant="default" padding="none" className="overflow-hidden h-full card-premium shadow-premium hover:shadow-depth transition-all duration-300">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <CardContent className="p-6">
          <CardTitle className="text-text">{title}</CardTitle>
          <CardDescription className="mb-4 text-primary">{description}</CardDescription>
          <div className="flex items-center gap-3">
            <Image
              src={client.avatar}
              alt={client.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-text">{client.name}</p>
              <p className="text-sm text-muted">{client.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}