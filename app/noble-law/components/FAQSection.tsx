"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Licorne offer?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    question: "How can I schedule a consultation with Licorne?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    question: "What industries does Licorne specialize in?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    question: "Why should I choose Licorne?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    question: "How much do your legal services cost?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

export function FAQSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v20H0V20h20zm20 0v20H20V20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-3 max-w-3xl mx-auto leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() =>
                  setActiveAccordion(activeAccordion === index ? null : index)
                }
                className={`w-full p-4 text-left transition-all duration-300 border-b border-secondary ${
                  activeAccordion === index
                    ? "shadow-xl"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 text-secondary w-10 h-10 flex items-center justify-center transition-colors duration-300`}
                  >
                    {activeAccordion === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>
                {activeAccordion === index && (
                  <p className="mt-5 text-gray-600 leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

