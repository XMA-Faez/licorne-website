import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/hero-background.png";

const values = [
  {
    title: "Clarity",
    description:
      "We explain everything in plain language. No jargon, no surprises, no hidden fees. You always know what's happening and why.",
  },
  {
    title: "Efficiency",
    description:
      "Time matters when you're building a business. We move fast, track every application, and push for the quickest possible completion.",
  },
  {
    title: "Reliability",
    description:
      "When we say we'll handle something, it gets handled. Deadlines are met, documents are correct, and complications are resolved.",
  },
  {
    title: "Partnership",
    description:
      "We're not just a service provider — we're invested in your success. Many clients stay with us for years as their business grows.",
  },
];

const stats = [
  { value: "500+", label: "Companies formed" },
  { value: "40+", label: "Free zones covered" },
  { value: "98%", label: "First-time approval rate" },
  { value: "72h", label: "Average license turnaround" },
];

const milestones = [
  {
    year: "Founded",
    title: "Started with a simple idea",
    description:
      "Help entrepreneurs navigate Dubai's business setup process without the confusion, delays, and overcharging that was common in the industry.",
  },
  {
    year: "Growth",
    title: "Built relationships that matter",
    description:
      "Developed direct relationships with free zone authorities, government departments, and banking partners that allow us to serve clients better.",
  },
  {
    year: "Today",
    title: "Trusted by hundreds of businesses",
    description:
      "From solo founders to multinational expansions, we've helped businesses of all sizes establish and operate in Dubai successfully.",
  },
];

export const metadata = {
  title: "About Us | Licorne Business Setup Dubai",
  description:
    "Learn about Licorne — Dubai's trusted business setup partner. 500+ companies formed, 40+ free zones covered. We make starting a business in Dubai simple.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            alt="About Licorne"
            className="absolute inset-0 w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-950/70 via-primary/60 to-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About us
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-accent-50 mt-4 leading-tight">
              Making Dubai business setup simple since day one
            </h1>
            <p className="text-lg lg:text-xl text-accent-50/80 mt-6 leading-relaxed">
              We help entrepreneurs and companies establish their presence in Dubai
              without the complexity, confusion, and wasted time that typically comes
              with the process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-semibold text-sm uppercase tracking-wider border-b border-secondary w-fit p-2 mb-6 block text-secondary">
                Our story
              </span>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-primary">
                We believe starting a business should be exciting, not exhausting
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
                <p>
                  Dubai offers incredible opportunities for entrepreneurs — 0% personal
                  income tax, strategic location, world-class infrastructure, and access
                  to regional markets. But the setup process? That's where many get stuck.
                </p>
                <p>
                  Multiple authorities, unfamiliar procedures, conflicting information,
                  and service providers who seem more interested in fees than outcomes.
                  We started Licorne because we knew there had to be a better way.
                </p>
                <p>
                  Our approach is simple: understand what you're trying to build, recommend
                  the right structure, handle the paperwork efficiently, and be there when
                  you need support. No unnecessary complexity, no surprises.
                </p>
              </div>
            </div>
            <div className="bg-primary/95 text-accent-50 p-10 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                  }}
                ></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                  Why clients choose us
                </h3>
                <p className="text-accent-50/80 leading-relaxed mb-6">
                  It's not just about getting a license — it's about starting your
                  Dubai journey with confidence and the right foundation.
                </p>
                <div className="space-y-4 text-accent-50/80">
                  <p>✓ Transparent pricing with no hidden fees</p>
                  <p>✓ Direct communication throughout the process</p>
                  <p>✓ Problems handled before they become your problems</p>
                  <p>✓ Ongoing support as your business grows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-secondary">
                  {stat.value}
                </div>
                <div className="text-primary mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our journey
            </span>
            <h2 className="text-4xl lg:text-5xl text-primary mt-3 max-w-3xl mx-auto leading-tight">
              Building something that matters
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative">
                <div className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">
                  {milestone.year}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-white/70 font-semibold text-sm uppercase tracking-wider">
              Our values
            </span>
            <h2 className="text-4xl lg:text-5xl text-white mt-3 max-w-4xl mx-auto leading-tight">
              What guides how we work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-8 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl text-white mb-3">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our commitment
            </span>
            <h2 className="text-4xl lg:text-5xl text-primary mt-3 mb-6 leading-tight">
              More than just company formation
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Yes, we help you get your trade license. But that's just the beginning.
                We help you choose the right structure for your goals, navigate the
                visa process for you and your team, open a bank account (the hardest
                part for many), and stay compliant as you operate.
              </p>
              <p>
                Most of our clients stay with us long after setup. When they need to
                add activities, hire employees, renew licenses, or handle government
                requirements — we're there. When they have questions at 9pm before a
                big meeting — we answer.
              </p>
              <p>
                This is what we mean by partnership. Your success is our success, and
                we're in it for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-primary-700 p-12 lg:p-16 text-center relative overflow-hidden rounded-sm">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(172, 125, 85, 0.35) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(172, 125, 85, 0.25) 0%, transparent 50%)",
                }}
              ></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Ready to start your Dubai journey?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                Book a free consultation. We'll learn about your business, answer
                your questions, and show you exactly how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white text-primary hover:bg-secondary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
