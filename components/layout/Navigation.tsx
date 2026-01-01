"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

const servicesDropdown = [
  {
    label: "Business Legal Consultation",
    href: "/services/business-legal-consultation",
  },
  { label: "Dispute Resolution", href: "/services/dispute-resolution" },
  { label: "Licensing and Contracts", href: "/services/licensing-and-contracts" },
  {
    label: "Intellectual Property Protection",
    href: "/services/intellectual-property-protection",
  },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl font-bold text-primary">LICORNE</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link
                href="/services"
                className={`text-lg font-medium inline-flex items-center gap-2 ${
                  isScrolled ? "text-accent-950 hover:text-primary" : "text-accent-50 hover:text-primary"
                } transition-colors`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="min-w-[260px] bg-white shadow-xl border border-secondary/20 rounded-sm overflow-hidden">
                  {servicesDropdown.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-primary hover:bg-secondary hover:text-white transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block px-4 py-3 text-sm text-secondary border-t border-secondary/20 hover:bg-secondary hover:text-white transition-colors"
                  >
                    View all services
                  </Link>
                </div>
              </div>
            </div>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-lg font-medium ${
                    isScrolled
                      ? "text-accent-950 hover:text-primary"
                      : "text-accent-50 hover:text-primary"
                  } transition-colors`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="primary">Book Consultation</Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-surface border-t border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              <div className="border-b border-border pb-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                  Services
                </p>
                {servicesDropdown.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block py-2 text-secondary hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block py-2 text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View all services
                </Link>
              </div>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-secondary hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Button variant="primary" className="w-full mt-4">
                  Book Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
