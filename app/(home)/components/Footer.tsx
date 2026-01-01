import Link from 'next/link';
import Image from 'next/image';
import LicorneLogo from "@/public/Licorne Logo-bg-removed.jpeg";

export function Footer() {
  return (
    <footer className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 lg:mb-0">
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
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-text-muted">
            <Link
              href="/"
              className="hover:text-secondary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-secondary transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-secondary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/team"
              className="hover:text-secondary transition-colors"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="hover:text-secondary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-base-800 text-center text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} Licorne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
