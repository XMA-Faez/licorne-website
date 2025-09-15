"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/ScrollVelocity";

const testimonials = [
  {
    text: "The legal team at Licorne provided exceptional service. Their deep understanding of our needs and timely advice helped us navigate complex legal challenges with confidence and success.",
    author: "Christine Hohmann-Dennhardt",
    location: "Kyoto Japan",
    image:
      "https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/67b43f2ce38e4ea89bc13c0e_image%207.png",
  },
  {
    text: "From the very beginning, Licorne demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.",
    author: "Susanne Baer",
    location: "Kyoto Japan",
    image:
      "https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/67b4391fd5f25f6f99522318_image%2019.png",
  },
  {
    text: "From the very beginning, Licorne demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.",
    author: "Alecia Höpker",
    location: "Kyoto Japan",
    image:
      "https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/67b4391fd5f25f6f99522318_image%2019.png",
  },
  {
    text: "From the very beginning, Licorne demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.",
    author: "Artur Kopp",
    location: "Kyoto Japan",
    image:
      "https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/67b4457f9b7c6c2bcb00db18_image%208.png",
  },
  {
    text: '"We are incredibly grateful for the professionalism and thoroughness of Licorne. Their strategic approach to legal matters ensured our business remained compliant and well-protected."',
    author: "Astrid Wallrabenstein",
    location: "Kyoto Japan",
    image:
      "https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/67b43f00b5c6759c33719a28_image%205.png",
  },
];

// Split testimonials into two rows
const testimonialRowA = testimonials.slice(0, 3);
const testimonialRowB = testimonials.slice(3);

const StarIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    className="w-4 h-4"
  >
    <path
      d="M8.5 1L10.3 6.3H16L11.85 9.7L13.65 15L8.5 11.6L3.35 15L5.15 9.7L1 6.3H6.7L8.5 1Z"
      className="fill-secondary"
    />
  </svg>
);

const TestimonialCard = ({
  testimonial,
  showStars = false,
}: {
  testimonial: (typeof testimonials)[0];
  showStars?: boolean;
}) => (
  <div className="bg-surface-subtle p-6 mx-3 min-w-[400px] max-w-sm shadow-lg border border-border-strong flex-shrink-0">
    {showStars && (
      <div className="flex mb-4 space-x-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
    )}
    <div className="text-text-secondary mb-6 leading-relaxed text-wrap">
      {testimonial.text}
    </div>
    <div className="flex items-center">
      <Image
        src={testimonial.image}
        alt={testimonial.author}
        width={48}
        height={48}
        className="w-12 h-12 object-cover mr-4 rounded-full border border-border-strong object-top"
      />
      <div>
        <div className="font-semibold text-primary">
          {testimonial.author}
        </div>
        <div className="text-sm text-text-muted">{testimonial.location}</div>
      </div>
    </div>
  </div>
);

export function TestimonialsSliderSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="text-center">
          <p className="text-secondary border-b w-fit mx-auto p-2 mb-4 font-semibold text-sm uppercase tracking-wider">
            Testimonial
          </p>
          <h2 className="text-4xl lg:text-6xl text-primary mt-3 max-w-3xl mx-auto leading-tight text-balance">
            Hear Directly from Our Valued{" "}
            <span className="text-secondary font-serif">Clients and Partners</span>
          </h2>
        </div>
      </div>

      {/* Smooth Scroll Velocity Slider */}
      <div className="mb-16 relative">
        <ScrollVelocityContainer className="w-full">
          {/* First row - scrolls right */}
          <ScrollVelocityRow baseVelocity={3} direction={1} className="py-4">
            {testimonialRowA.map((testimonial, index) => (
              <TestimonialCard
                key={`row-a-${index}`}
                testimonial={testimonial}
              />
            ))}
          </ScrollVelocityRow>

          {/* Second row - scrolls left */}
          <ScrollVelocityRow baseVelocity={3} direction={-1} className="py-4">
            {testimonialRowB.map((testimonial, index) => (
              <TestimonialCard
                key={`row-b-${index}`}
                testimonial={testimonial}
              />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>

      {/* CTA Button */}
      <div className="text-center relative z-10">
        <Link
          href="/noble-law/contact"
          className="inline-flex items-center px-8 py-4 bg-secondary text-white hover:bg-primary transition-all duration-300 font-medium rounded-sm"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
