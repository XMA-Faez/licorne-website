"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Star,
  ShieldCheck,
  Award,
  Calendar,
  MessageCircle,
  ChevronDown,
  Zap,
  Trophy,
  Eye,
  Users,
  Phone,
  Mail,
  MapPin,
  Menu,
} from "lucide-react";

export default function LicornePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans antialiased">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(13, 95, 79, 0.15);
        }

        .hero-overlay {
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(13, 95, 79, 0.6) 100%
          );
        }

        .image-overlay {
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#0d5f4f]">LICORNE</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-[#0d5f4f] transition"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-gray-600 hover:text-[#0d5f4f] transition"
              >
                Process
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-[#0d5f4f] transition"
              >
                About
              </a>
              <button className="bg-[#0d5f4f] text-white px-6 py-2 rounded-lg hover:bg-[#0a4d3f] transition">
                Book Consultation
              </button>
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
          alt="Dubai skyline"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-up">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-white">
                  500+ Businesses Set Up
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <ShieldCheck className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">
                  Licensed by DED
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">
                  15 Years Experience
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              YOUR TRUSTED PARTNER FOR
              <br />
              <span className="text-[#4ade80]">UAE BUSINESS SETUP</span>
            </h1>

            <p
              className="text-xl text-white/90 mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              End-to-end corporate solutions with transparent pricing
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button className="bg-[#0d5f4f] text-white text-lg px-8 py-4 rounded-lg hover:bg-[#0a4d3f] transition transform hover:scale-105">
                <Calendar className="w-5 h-5 inline mr-2" />
                Book Free Consultation
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition">
                <MessageCircle className="w-5 h-5 inline mr-2" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Why Choose Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Licorne?
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
                alt="Team meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Professional Excellence
                </h3>
                <p>Dedicated team of experts at your service</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Zap,
                  title: "Same Day Setup",
                  desc: "Fastest processing in UAE",
                },
                {
                  icon: Trophy,
                  title: "100% Success",
                  desc: "Guaranteed approval",
                },
                {
                  icon: Eye,
                  title: "No Hidden Fees",
                  desc: "Transparent pricing",
                },
                {
                  icon: Users,
                  title: "Expert Support",
                  desc: "Dedicated managers",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover-lift animate-on-scroll"
                >
                  <div className="w-16 h-16 mb-4 bg-[#0d5f4f]/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-[#0d5f4f]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
                title: "Business Setup",
                desc: "Company formation in UAE with complete legal support",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
                title: "Notary Services",
                desc: "Document attestation and legal certification",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
                title: "Visa Services",
                desc: "Residence and work permits for you and your team",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=600&h=400&fit=crop",
                title: "Documentation Services",
                desc: "Complete paperwork management and filing",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1553028826-ccdfc006b078?w=600&h=400&fit=crop",
                title: "Attestations",
                desc: "Official document verification and authentication",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
                title: "Conveyancing Services",
                desc: "Property transfer and real estate documentation",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover-lift animate-on-scroll"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-100 transition"></div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-3">{service.desc}</p>
                  <a
                    href="#"
                    className="text-[#0d5f4f] font-medium hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
                title: "Tech Startup Launch",
                desc: "From idea to operational in just 3 days. Complete setup with visa processing for 10 team members.",
                client: {
                  name: "Ahmed Al-Rashid",
                  role: "CEO, TechVentures",
                  avatar: "https://i.pravatar.cc/40?img=1",
                },
              },
              {
                image:
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
                title: "Consulting Firm Expansion",
                desc: "Seamless international expansion with full regulatory compliance and office setup.",
                client: {
                  name: "Sarah Johnson",
                  role: "Partner, Global Consult",
                  avatar: "https://i.pravatar.cc/40?img=2",
                },
              },
              {
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                title: "E-commerce Success",
                desc: "Complete business setup with trade license, warehousing, and logistics support.",
                client: {
                  name: "Michael Chen",
                  role: "Founder, ShopDirect",
                  avatar: "https://i.pravatar.cc/40?img=3",
                },
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden animate-on-scroll"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.desc}</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={story.client.avatar}
                      alt={story.client.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{story.client.name}</p>
                      <p className="text-sm text-gray-500">
                        {story.client.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Visual Timeline */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Your business setup journey in 4 simple steps
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
                  step: 1,
                  title: "Consult",
                  desc: "Free consultation to understand your needs",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=300&h=300&fit=crop",
                  step: 2,
                  title: "Submit",
                  desc: "Prepare and submit all documents",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=300&fit=crop",
                  step: 3,
                  title: "Process",
                  desc: "We handle all government procedures",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=300&fit=crop",
                  step: 4,
                  title: "Launch",
                  desc: "Receive license and start operating",
                  isLast: true,
                },
              ].map((item, index) => (
                <div key={index} className="text-center animate-on-scroll">
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${item.isLast ? "bg-[#4ade80]" : "bg-[#0d5f4f]"}`}
                    >
                      {item.isLast ? "✓" : item.step}
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Office & Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=300&fit=crop",
            ].map((src, index) => (
              <div
                key={index}
                className="relative h-48 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Office ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Trusted By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["DED", "DMCC", "ADGM", "DIFC"].map((partner, index) => (
              <div
                key={index}
                className="h-12 w-32 bg-gray-100 rounded flex items-center justify-center text-[#0d5f4f] font-semibold"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-20">
        <Image
          src="https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1920&h=600&fit=crop"
          alt="Dubai Business"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0d5f4f]/90"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your UAE Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation worth AED 500 today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0d5f4f] hover:bg-gray-100 text-lg px-8 py-4 rounded-lg transition">
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Free Consultation
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white/20 text-lg px-8 py-4 rounded-lg transition">
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#0d5f4f]">
                LICORNE
              </h3>
              <p className="text-gray-400">
                Your trusted partner for business setup in UAE
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Business Setup
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Visa Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Notary Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +971 XX XXX XXXX
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@licorne.ae
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Dubai, UAE
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Licorne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
