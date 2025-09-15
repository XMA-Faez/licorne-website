import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 lg:mb-0">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" className="fill-secondary" />
              <path
                d="M20 10V30M12 14L20 10L28 14M12 18V26L20 30L28 26V18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-white text-xl font-semibold">Licorne</div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-text-muted">
            <Link
              href="/noble-law"
              className="hover:text-secondary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/noble-law/about"
              className="hover:text-secondary transition-colors"
            >
              About
            </Link>
            <Link
              href="/noble-law/services"
              className="hover:text-secondary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/noble-law/team"
              className="hover:text-secondary transition-colors"
            >
              Team
            </Link>
            <Link
              href="/noble-law/blog"
              className="hover:text-secondary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/noble-law/contact"
              className="hover:text-secondary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-base-800 text-center text-text-muted">
          <p>
            &copy; 2024 Licorne. All rights reserved. | Powered by Webflow
          </p>
        </div>
      </div>
    </footer>
  );
}
