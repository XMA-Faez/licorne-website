"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import LicorneLogo from "@/public/Licorne Logo-bg-removed.jpeg";

const SERVICES = {
  "Company Formation": [
    {
      label: "Mainland Company Setup",
      href: "/services/mainland-company-setup",
      description: "LLC formation with local sponsor",
    },
    {
      label: "Free Zone Company Setup",
      href: "/services/free-zone-company-setup",
      description: "100% foreign ownership in 40+ zones",
    },
    {
      label: "Trade License Services",
      href: "/services/trade-license",
      description: "New licenses, renewals & amendments",
    },
  ],
  "Visas & Immigration": [
    {
      label: "Visa & Immigration",
      href: "/services/visa-immigration",
      description: "Residence visas for you and your team",
    },
    {
      label: "Golden Visa UAE",
      href: "/services/golden-visa",
      description: "10-year residency for investors",
    },
  ],
  "Business Services": [
    {
      label: "PRO & Government Services",
      href: "/services/pro-government-services",
      description: "Document clearing & liaison",
    },
    {
      label: "Bank Account Opening",
      href: "/services/bank-account-opening",
      description: "Corporate banking setup",
    },
    {
      label: "Office Solutions",
      href: "/services/office-solutions",
      description: "Virtual, flexi desk & physical offices",
    },
    {
      label: "Accounting & VAT",
      href: "/services/accounting-vat",
      description: "Bookkeeping & tax compliance",
    },
    {
      label: "Company Liquidation",
      href: "/services/company-liquidation",
      description: "Business closure & exit",
    },
  ],
};

const RESOURCES = [
  {
    label: "Free Zone Comparison",
    href: "/free-zones",
    description: "Compare 40+ UAE free zones",
  },
  {
    label: "Cost Guide",
    href: "/cost-guide",
    description: "Transparent pricing breakdown",
  },
  {
    label: "Business Activities",
    href: "/business-activities",
    description: "Activity codes & licensing",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
    description: "Our setup process explained",
  },
];

function ListItem({
  className,
  title,
  href,
  children,
}: {
  className?: string;
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-50 focus:bg-accent-50",
            className
          )}
        >
          <div className="text-sm font-medium text-primary leading-none mb-1">
            {title}
          </div>
          <p className="text-xs text-base-500 leading-snug line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function MobileNavItem({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "block py-2 text-primary hover:text-secondary transition-colors",
          className
        )}
      >
        {children}
      </Link>
    </SheetClose>
  );
}

function MobileAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-base-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 text-primary font-medium"
      >
        {title}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-[500px] pb-3" : "max-h-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-base-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="h-12 relative">
              <Image
                src={LicorneLogo}
                alt="Licorne Logo"
                height={48}
                className="h-full w-auto object-contain"
                style={{
                  filter: isScrolled ? "none" : "brightness(0) invert(1)",
                }}
              />
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      isScrolled
                        ? "text-primary hover:text-secondary"
                        : "text-white hover:text-secondary"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                    isScrolled
                      ? "text-primary hover:text-secondary data-[state=open]:text-secondary"
                      : "text-white hover:text-secondary data-[state=open]:text-secondary"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4 bg-white">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(SERVICES).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3 px-3">
                            {category}
                          </h3>
                          <ul className="space-y-1">
                            {items.map((item) => (
                              <ListItem
                                key={item.href}
                                title={item.label}
                                href={item.href}
                              >
                                {item.description}
                              </ListItem>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-base-200">
                      <Link
                        href="/services"
                        className="text-sm text-secondary hover:text-primary font-medium transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                    isScrolled
                      ? "text-primary hover:text-secondary data-[state=open]:text-secondary"
                      : "text-white hover:text-secondary data-[state=open]:text-secondary"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[400px] p-4 bg-white grid grid-cols-2 gap-2">
                    {RESOURCES.map((item) => (
                      <ListItem
                        key={item.href}
                        title={item.label}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      isScrolled
                        ? "text-primary hover:text-secondary"
                        : "text-white hover:text-secondary"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/faq"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      isScrolled
                        ? "text-primary hover:text-secondary"
                        : "text-white hover:text-secondary"
                    )}
                  >
                    FAQ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      isScrolled
                        ? "text-primary hover:text-secondary"
                        : "text-white hover:text-secondary"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={cn(
                "px-5 py-2.5 transition-colors text-sm font-medium rounded-sm",
                isScrolled
                  ? "bg-primary text-white hover:bg-secondary"
                  : "bg-secondary text-white hover:bg-primary"
              )}
            >
              Free Consultation
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "lg:hidden p-2 transition-colors",
                  isScrolled
                    ? "text-primary hover:text-secondary"
                    : "text-white hover:text-secondary"
                )}
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md">
              <SheetHeader className="border-b border-base-200 pb-4">
                <SheetTitle className="text-left">
                  <span className="text-xl font-serif text-primary">
                    Licorne
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-6 space-y-1">
                <MobileNavItem href="/" className="font-medium">
                  Home
                </MobileNavItem>

                <MobileAccordion title="Services">
                  <div className="space-y-4 pl-4">
                    {Object.entries(SERVICES).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                          {category}
                        </h4>
                        <div className="space-y-1">
                          {items.map((item) => (
                            <MobileNavItem
                              key={item.href}
                              href={item.href}
                              className="text-sm py-1.5"
                            >
                              {item.label}
                            </MobileNavItem>
                          ))}
                        </div>
                      </div>
                    ))}
                    <MobileNavItem
                      href="/services"
                      className="text-sm text-secondary font-medium"
                    >
                      View All Services →
                    </MobileNavItem>
                  </div>
                </MobileAccordion>

                <MobileAccordion title="Resources">
                  <div className="pl-4 space-y-1">
                    {RESOURCES.map((item) => (
                      <MobileNavItem
                        key={item.href}
                        href={item.href}
                        className="text-sm py-1.5"
                      >
                        {item.label}
                      </MobileNavItem>
                    ))}
                  </div>
                </MobileAccordion>

                <MobileNavItem href="/about" className="font-medium">
                  About
                </MobileNavItem>

                <MobileNavItem href="/faq" className="font-medium">
                  FAQ
                </MobileNavItem>

                <MobileNavItem href="/contact" className="font-medium">
                  Contact
                </MobileNavItem>
              </nav>

              <div className="mt-8 pt-6 border-t border-base-200">
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="block w-full px-5 py-3 bg-primary text-white hover:bg-secondary transition-colors text-sm font-medium rounded-sm text-center"
                  >
                    Free Consultation
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
