"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LicorneLogo from "@/public/Licorne Logo-bg-removed.jpeg";

// Configuration constants
const BRAND_CONFIG = {
  name: "Licorne",
  href: "/",
};

// Navigation items
const MAIN_NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "About Us", href: "#" },
];

const CTA_BUTTON = {
  label: "Book Consultantion",
  href: "/contact",
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const BrandLogo = ({ isScrolled }) => (
    <Link href={BRAND_CONFIG.href} className="flex items-center space-x-3">
      <div className="h-12 relative">
        <Image
          src={LicorneLogo}
          alt="Licorne Logo"
          height={48}
          className="h-full w-auto object-contain"
          style={{
            filter: "brightness(0) invert(1)", 
          }}
        />
      </div>
    </Link>
  );

  const DesktopNavigation = () => (
    <div className="hidden lg:flex items-center space-x-10">
      {MAIN_NAVIGATION.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`font-medium transition-colors text-sm hover:text-secondary ${
            isScrolled ? "text-white" : "text-white"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  const CTAButton = () => (
    <Link
      href={CTA_BUTTON.href}
      className={`hidden lg:block px-7 py-3 font-medium transition-all duration-300 rounded-sm ${
        isScrolled
          ? "bg-secondary text-white hover:bg-primary"
          : "bg-secondary text-white hover:bg-secondary"
      }`}
    >
      {CTA_BUTTON.label}
    </Link>
  );

  const MobileMenu = () =>
    isMenuOpen && (
      <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl">
        <div className="container mx-auto px-4 py-4">
          {MAIN_NAVIGATION.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-2 transition-colors text-primary hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={CTA_BUTTON.href}
            className="block mt-4 px-6 py-3 text-center transition-colors rounded-sm bg-secondary text-white hover:bg-primary"
          >
            {CTA_BUTTON.label}
          </Link>
        </div>
      </div>
    );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-sm bg-accent-950/50 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <BrandLogo isScrolled={isScrolled} />
          <DesktopNavigation />
          <CTAButton />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled ? "text-white" : "text-primary"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      <MobileMenu />
    </header>
  );
}
