"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Trader Kachi suitable for beginners?",
    answer:
      "Yes. The system is built to guide beginners through structured trading, risk management, and discipline before advanced strategies."
  },
  {
    question: "Do I need a large capital to start?",
    answer:
      "No. You can start small. The focus is on consistency and risk control, not large deposits."
  },
  {
    question: "Is trading guaranteed to make profit?",
    answer:
      "No trading is guaranteed. We focus on proper strategy, risk management, and long-term consistency to improve probability of success."
  },
  {
    question: "What do I get inside the community?",
    answer:
      "You get market insights, trading guidance, strategy education, and a structured environment focused on growth and discipline."
  },
  {
    question: "How is Trader Kachi different?",
    answer:
      "We focus on structure, discipline, and process — not hype or gambling behavior. The goal is long-term trader development."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#16A34A] font-semibold uppercase tracking-widest">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4">
            Everything you need to know before joining the community.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left p-5 flex justify-between items-center hover:bg-white/10 transition"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-[#16A34A]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
