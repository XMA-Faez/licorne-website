"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Calendar, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1920&h=600&fit=crop"
        alt="Dubai Business"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent-600/60" />
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="text-white font-medium">🎯 Limited Time Offer</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Ready to Start Your
          <br />
          <span className="gradient-text text-accent-300">UAE Business Journey?</span>
        </h2>
        <p className="text-xl text-white/90 mb-4">
          Get a comprehensive consultation worth <span className="font-bold text-accent-300">AED 500</span> - completely free
        </p>
        <p className="text-white/80 mb-10 max-w-2xl mx-auto">
          Join 500+ successful entrepreneurs who chose us for their business setup.
          Professional guidance, transparent pricing, guaranteed results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <motion.button
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-5 rounded-xl transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -2 }}
          >
            <Calendar className="w-5 h-5 inline mr-2" />
            Book Free Consultation
          </motion.button>
          <motion.button
            className="glass text-white border-2 border-white/30 text-lg px-10 py-5 rounded-xl hover:bg-white/20 transition-all duration-200 font-bold transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -2 }}
          >
            <Phone className="w-5 h-5 inline mr-2" />
            Call Now: +971 50 123 4567
          </motion.button>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-accent-300">✓</span>
            <span>No Hidden Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-300">✓</span>
            <span>Same Day Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-300">✓</span>
            <span>100% Success Rate</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}