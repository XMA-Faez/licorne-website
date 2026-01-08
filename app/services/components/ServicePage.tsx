import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ServiceCta } from "@/app/services/components/ServiceCta";

interface ServiceItem {
  title: string;
  description: string;
}

interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  hero: {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
    expectationTitle?: string;
    expectationDescription?: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  deliverables: {
    eyebrow: string;
    title: string;
    items: ServiceItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    items: ProcessItem[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
}

export function ServicePage({
  hero,
  overview,
  stats,
  deliverables,
  process,
  faqs,
  cta,
}: ServicePageProps) {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-950/70 via-secondary/60 to-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 text-center">
          <div className="max-w-3xl">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Service
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-accent-50 mt-4 leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg lg:text-xl text-accent-50/80 mt-6 leading-relaxed">
              {hero.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={cta.primaryHref}
                className="group px-8 py-4 bg-primary text-accent-50 hover:bg-secondary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                {cta.primaryLabel}
              </Link>
              <Link
                href="#overview"
                className="px-8 py-4 bg-transparent text-accent-50 border-2 border-accent-50/30 hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                Explore Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-semibold text-sm uppercase tracking-wider border-b border-primary w-fit p-2 mb-6 block text-primary">
                {overview.eyebrow}
              </span>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-secondary">
                {overview.title}
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary mb-8">
                {overview.description}
              </p>
              <ul className="space-y-4 text-text-secondary">
                {overview.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/95 text-accent-50 p-10 rounded-sm relative overflow-hidden">
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
                  {overview.expectationTitle ?? "What you can expect"}
                </h3>
                <p className="text-accent-50/80 leading-relaxed mb-8">
                  {overview.expectationDescription ??
                    "A practical legal partner focused on decision-ready insights, not just documents."}
                </p>
                <div className="space-y-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-4xl font-serif text-primary">
                        {stat.value}
                      </p>
                      <p className="text-accent-50/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-white border-b w-fit mx-auto p-2 font-semibold text-sm uppercase tracking-wider mb-4">
              {deliverables.eyebrow}
            </p>
            <h2 className="text-4xl lg:text-5xl text-white max-w-4xl mx-auto leading-tight">
              {deliverables.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.items.map((item) => (
              <div
                key={item.title}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xs p-8 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {process.eyebrow}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mt-3 max-w-3xl mx-auto leading-tight">
              {process.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.items.map((item) => (
              <div
                key={item.step}
                className="border border-primary/30 rounded-sm p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary text-lg font-semibold">
                  {item.step}
                </div>
                <h3 className="text-2xl text-secondary mt-3 mb-4">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {faqs.eyebrow}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mt-3 max-w-3xl mx-auto leading-tight">
              {faqs.title}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.items.map((item) => (
              <div
                key={item.question}
                className="border border-primary/20 rounded-sm p-6 bg-white"
              >
                <h3 className="text-xl text-secondary mb-3">{item.question}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCta {...cta} />
    </>
  );
}
