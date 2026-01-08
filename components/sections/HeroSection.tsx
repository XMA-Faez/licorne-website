"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star, ShieldCheck, Award, Calendar, MessageCircle, ChevronDown } from "lucide-react";

const trustIndicators = [
  {
    icon: "stars",
    text: "500+ Businesses Set Up"
  },
  {
    icon: ShieldCheck,
    text: "Licensed by DED"
  },
  {
    icon: Award,
    text: "15 Years Experience"
  }
];

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
          alt="Dubai skyline"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-secondary/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={index}
                className="glass px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  {item.icon === "stars" ? (
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                  ) : (
                    <item.icon className="w-5 h-5 text-white" />
                  )}
                  <span className="text-sm font-medium text-white">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            YOUR TRUSTED PARTNER FOR
            <br />
            <span className="gradient-text-luxury">UAE BUSINESS SETUP</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            End-to-end corporate solutions with transparent pricing
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-secondary text-inverse text-lg px-8 py-4 rounded-lg hover:bg-secondary-hover transition-all duration-200 transform hover:scale-105"
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Free Consultation
            </motion.button>
            <motion.button
              className="glass text-white border-2 border-white/30 text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-200"
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              WhatsApp Us
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}