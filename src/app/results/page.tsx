"use client";

import { motion } from "framer-motion";

export default function ResultsPage() {
  const results = [
    {
      name: "Emeka O.",
      result: "Consistent profitability",
      text: "I stopped jumping between strategies and finally developed a structured trading process.",
    },
    {
      name: "Aisha M.",
      result: "Improved risk management",
      text: "The mentorship changed how I approach the market. Every trade now has a clear plan.",
    },
    {
      name: "Daniel K.",
      result: "More disciplined execution",
      text: "I learned patience, structure, and how to avoid emotional decisions in the market.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center">

          <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
            Student Transformations
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Results Built On
            <span className="text-[#16A34A]"> Discipline</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Success in trading is not about luck.
            It comes from structure, risk management,
            and consistent execution.
          </p>

        </section>

        {/* STATS */}
        <section className="mt-20">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#16A34A]">
                500+
              </h3>

              <p className="text-gray-400 mt-2">
                Traders Reached
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#16A34A]">
                Daily
              </h3>

              <p className="text-gray-400 mt-2">
                Market Analysis
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#16A34A]">
                24/7
              </h3>

              <p className="text-gray-400 mt-2">
                Community Support
              </p>
            </div>

          </div>

        </section>

        {/* TESTIMONIALS */}
        <section className="mt-24">

          <div className="text-center mb-12">

            <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
              Community Feedback
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              What Traders Are Saying
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {results.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-[#16A34A]/40 transition"
              >

                <div className="w-12 h-12 rounded-full bg-[#16A34A]/10 flex items-center justify-center mb-5 text-lg">
                  👤
                </div>

                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-[#16A34A] text-sm mt-2 mb-4">
                  {item.result}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  "{item.text}"
                </p>

              </motion.div>
            ))}

          </div>

        </section>

        {/* WHY RESULTS MATTER */}
        <section className="mt-24">

          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 text-center">

            <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
              Why Results Matter
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Trading Is A Skill
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
              The goal is not chasing signals or searching for shortcuts.
              The goal is developing a repeatable process that allows you
              to approach the market with confidence, discipline,
              and consistency.
            </p>

          </div>

        </section>

        {/* CTA */}
        <section className="mt-24">

          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              Ready To Build Consistency?
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Join traders focused on long-term growth,
              disciplined execution, and structured learning.
            </p>

            <a
              href="/community"
              className="inline-block mt-8 bg-[#16A34A] text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Join Community
            </a>

          </div>

        </section>

      </div>

    </main>
  );
              }
