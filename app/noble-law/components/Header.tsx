"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

// Configuration constants
const BRAND_CONFIG = {
  name: "Licorne",
  href: "/noble-law",
};

// Navigation items
const MAIN_NAVIGATION = [
  { label: "Home", href: "/noble-law" },
  { label: "Pricing", href: "/noble-law/pricing" },
  { label: "Contact Us", href: "/noble-law/contact" },
];

const DROPDOWN_SECTIONS = [
  {
    title: "FEATURE",
    items: [
      { label: "Home A", href: "/noble-law" },
      { label: "Home B", href: "/noble-law/home-2" },
      { label: "Home C", href: "/noble-law/home-3" },
      { label: "Service", href: "/noble-law/service" },
      { label: "Team", href: "/noble-law/team" },
      { label: "Blog Page", href: "/noble-law/blog" },
      { label: "About us", href: "/noble-law/about" },
    ],
  },
  {
    title: "INFORMATION",
    items: [
      { label: "Style Guide Page", href: "/noble-law/style-guide" },
      { label: "Change Log Page", href: "/noble-law/changelog" },
      { label: "Licenses Page", href: "/noble-law/license" },
    ],
  },
];

const CTA_BUTTON = {
  label: "Book Consultantion",
  href: "/noble-law/contact",
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const BrandLogo = () => (
    <Link href={BRAND_CONFIG.href} className="flex items-center space-x-3">
      <div className="w-10 h-10 flex items-center justify-center bg-secondary">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7L12 12L22 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="text-2xl brand-name text-white">
        {BRAND_CONFIG.name}
      </div>
    </Link>
  );

  const DesktopNavigation = () => (
    <div className="hidden lg:flex items-center space-x-10">
      {MAIN_NAVIGATION.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="font-medium transition-colors text-sm text-white hover:text-secondary"
        >
          {item.label}
        </Link>
      ))}

      {/* Dropdown Menu */}
      <div className="relative group">
        <button className="flex items-center space-x-1 font-medium transition-colors text-sm text-white hover:text-secondary">
          <span>Page</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-border">
          <div className="p-2">
            {DROPDOWN_SECTIONS.map((section) => (
              <div key={section.title}>
                <div className="text-xs font-semibold px-3 py-2 text-text-muted">
                  {section.title}
                </div>
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm transition-colors text-primary hover:bg-surface-hover"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CTAButton = () => (
    <Link
      href={CTA_BUTTON.href}
      className="hidden lg:block px-7 py-3 font-medium transition-all duration-300 rounded-sm bg-secondary text-white hover:bg-primary"
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
    <header className="fixed top-0 w-full z-50 shadow-sm bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <BrandLogo />
          <DesktopNavigation />
          <CTAButton />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
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
