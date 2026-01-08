import Image from "next/image";
import Link from "next/link";
import "@/app/(home)/noble-law.css";
import HeroImage from "@/public/hero-background.png";

export const metadata = {
  title: "Contact Us | Licorne",
  description: "Get in touch with Licorne for legal consultation and support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            alt="Contact Licorne"
            className="absolute inset-0 w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-950/70 via-secondary/60 to-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-accent-50 mt-4 leading-tight">
              Lets start a conversation
            </h1>
            <p className="text-lg lg:text-xl text-accent-50/80 mt-6 leading-relaxed">
              Tell us about your needs and our team will respond with the right
              guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-semibold text-sm uppercase tracking-wider border-b border-primary w-fit p-2 mb-6 block text-primary">
                Get in touch
              </span>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-secondary">
                Ready to discuss your legal needs
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary mb-10">
                Share a brief summary of your request and we will connect you
                with the right legal expert.
              </p>
              <div className="space-y-6 text-text-secondary">
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary mb-2">
                    Email
                  </p>
                  <Link
                    href="mailto:hello@licorne.ae"
                    className="text-lg text-secondary hover:text-primary transition-colors"
                  >
                    hello@licorne.ae
                  </Link>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary mb-2">
                    Phone
                  </p>
                  <Link
                    href="tel:+971000000000"
                    className="text-lg text-secondary hover:text-primary transition-colors"
                  >
                    +971 00 000 0000
                  </Link>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary mb-2">
                    Office
                  </p>
                  <p className="text-lg text-secondary">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-2xl border border-primary/10 rounded-sm p-8 lg:p-10">
              <h3 className="text-2xl text-secondary mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Service of interest
                  </label>
                  <select
                    name="service"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option>Business Legal Consultation</option>
                    <option>Dispute Resolution</option>
                    <option>Licensing and Contracts</option>
                    <option>Intellectual Property Protection</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your request"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-white font-medium rounded-sm hover:bg-secondary transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
