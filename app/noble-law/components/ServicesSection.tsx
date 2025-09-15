import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "One",
    title: "Business Legal Consultation",
    description:
      "Offering expert legal guidance in corporate regulations and investment matters, helping businesses achieve compliance, mitigate risks, protect assets, and foster sustainable growth for lasting success.",
    image: "/noble-law/service-1.jpg",
  },
  {
    number: "Two",
    title: "Dispute Resolution",
    description:
      "Offering expert legal guidance in corporate regulations and investment matters, helping businesses achieve compliance, mitigate risks, protect assets, and foster sustainable growth for lasting success.",
    image: "/noble-law/service-2.jpg",
  },
  {
    number: "Three",
    title: "Licensing and Contracts",
    description:
      "Offering expert legal guidance in corporate regulations and investment matters, helping businesses achieve compliance, mitigate risks, protect assets, and foster sustainable growth for lasting success.",
    image: "/noble-law/service-3.jpg",
  },
  {
    number: "Four",
    title: "Intellectual Property Protection",
    description:
      "Offering expert legal guidance in corporate regulations and investment matters, helping businesses achieve compliance, mitigate risks, protect assets, and foster sustainable growth for lasting success.",
    image: "/noble-law/service-4.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Service
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-3 max-w-3xl mx-auto leading-tight">
            Expertly Tailored Legal Solutions for Your Every Need
          </h2>
        </div>

        <div className="grid gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group pb-8 px-4 hover:shadow-2xl transition-all duration-300 border-b text-secondary hover:border-transparent cursor-pointer relative overflow-hidden"
            >
              <div className="flex">
                <span className="text-base-950 text-lg pr-8 my-auto tracking-wider">
                  {service.number}
                </span>
                <div>
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold text-primary mt-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-secondary ml-auto hover:text-primary transition-colors font-medium group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
