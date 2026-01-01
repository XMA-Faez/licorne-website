import Link from "next/link";

interface ServiceCtaProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ServiceCta({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: ServiceCtaProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary to-primary-700 p-12 lg:p-16 text-center relative overflow-hidden">
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
              {title}
            </h2>
            <p className="text-white/80 text-lg mb-10">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryHref}
                className="group px-8 py-4 bg-white text-primary hover:bg-secondary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="px-8 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
