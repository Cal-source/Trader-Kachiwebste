"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is Trader Kachi suitable for beginners?",
    answer:
      "Yes. The system is designed to guide beginners through structured trading, risk management, and discipline before advanced strategies.",
  },
  {
    question: "Do I need large capital to start?",
    answer:
      "No. The focus is on consistency, risk control, and compounding — not large deposits.",
  },
  {
    question: "Is trading guaranteed to make profit?",
    answer:
      "No trading is guaranteed. We focus on strategy, discipline, and probability to improve long-term consistency.",
  },
  {
    question: "What do I get inside the community?",
    answer:
      "Market insights, structured education, trade breakdowns, and a disciplined trading environment.",
  },
  {
    question: "How is Trader Kachi different?",
    answer:
      "We focus on structure, discipline, and process — not hype, signals addiction, or gambling behavior.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#050505] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-[#16A34A] text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4">
            Clear answers before you join the system.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl bg-[#0A0A0A] overflow-hidden hover:border-[#16A34A]/30 transition"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium">
                  {faq.question}
                </span>

                <span className="text-[#16A34A] text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-400 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}