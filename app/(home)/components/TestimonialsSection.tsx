'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'The legal team at Licorne provided exceptional service. Their deep understanding of our needs and timely advice helped us navigate complex legal challenges with confidence and success.',
    author: 'Christine Hohmann-Dennhardt',
    location: 'Kyoto Japan',
    image: '/Licorne Logo.jpeg',
    rating: 5,
  },
  {
    text: 'From the very beginning, Licorne demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.',
    author: 'Susanne Baer',
    location: 'Kyoto Japan',
    image: '/Licorne Logo.jpeg',
    rating: 5,
  },
  {
    text: 'We are incredibly grateful for the professionalism and thoroughness of Licorne. Their strategic approach to legal matters ensured our business remained compliant and well-protected.',
    author: 'Astrid Wallrabenstein',
    location: 'Kyoto Japan',
    image: '/Licorne Logo.jpeg',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#f0eadc] to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(172, 125, 85, 0.1) 0%, transparent 70%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#ac7d55] font-semibold text-sm uppercase tracking-wider">
            Testimonial
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001b39] mt-3 max-w-3xl mx-auto leading-tight">
            Hear Directly from Our Valued Clients and Partners
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-2xl relative">
            <div className="absolute -top-6 -left-6 text-8xl text-[#ac7d55]/20 font-serif">
              "
            </div>
            <div className="flex mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#ac7d55] text-[#ac7d55]"
                />
              ))}
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed relative z-10">
              {testimonials[currentTestimonial].text}
            </p>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mr-4"></div>
              <div>
                <div className="font-semibold text-[#001b39] text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'w-8 bg-[#ac7d55]'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
