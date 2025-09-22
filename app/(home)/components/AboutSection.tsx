import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Configuration constants
const ABOUT_CONFIG = {
  tag: "About us",
  title: "Your Trusted Partner for Reliable ",
  titleSpan: "Legal Solutions",
  description: "As a law firm with a solid reputation, we are committed to providing reliable and solution-oriented legal services. Focused on our clients' needs, we ensure that every solution is crafted to safeguard both business and personal interests.",
  button: {
    text: "Learn More",
    href: "/contact"
  },
  image: {
    src: "https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67aeed40002c626c25144224_image-1.png",
    alt: "Legal office",
    width: 940,
    height: 626
  }
};

const STATS = [
  { value: "15+", label: "Year Experience" },
  { value: "86k", label: "Client Worldwide" },
  { value: "28", label: "Awards & Honor" },
  { value: "98%", label: "Happy Client" }
];

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content Wrapper */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            {/* Header Section */}
            <div className="mb-8">
              <span className="font-semibold text-sm uppercase tracking-wider border-b border-secondary w-fit p-2 mb-6 block text-secondary">
                {ABOUT_CONFIG.tag}
              </span>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-primary">
                {ABOUT_CONFIG.title}
                <span className="font-serif text-secondary">
                  {ABOUT_CONFIG.titleSpan}
                </span>
              </h2>
            </div>

            {/* Bottom Content */}
            <div>
              <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                {ABOUT_CONFIG.description}
              </p>

              <Link
                href={ABOUT_CONFIG.button.href}
                className="inline-flex items-center px-8 py-4 font-medium transition-all duration-300 rounded-sm bg-secondary text-white hover:bg-primary"
              >
                {ABOUT_CONFIG.button.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={ABOUT_CONFIG.image.src}
              alt={ABOUT_CONFIG.image.alt}
              width={ABOUT_CONFIG.image.width}
              height={ABOUT_CONFIG.image.height}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-start items-center w-full">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start flex-1 gap-4 border-l border-secondary pl-5"
            >
              <div className="text-4xl lg:text-8xl font-bold font-serif text-text">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}