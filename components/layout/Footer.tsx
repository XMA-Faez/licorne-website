"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Business Setup", href: "#" },
    { label: "Visa Services", href: "#" },
    { label: "Notary Services", href: "#" }
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Terms", href: "#" }
  ],
  contact: [
    { icon: Phone, text: "+971 XX XXX XXXX" },
    { icon: Mail, text: "info@licorne.ae" },
    { icon: MapPin, text: "Dubai, UAE" }
  ]
};

export function Footer() {
  return (
    <footer className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">LICORNE</h3>
            <p className="text-secondary">
              Your trusted partner for business setup in UAE
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-text">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-text">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 text-text">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-secondary">
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-secondary">
            &copy; 2024 Licorne. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}