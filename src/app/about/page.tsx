"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
            About Trader Kachi
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Built For Traders Who
            <span className="text-[#16A34A]"> Want Structure</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Trader Kachi is a structured trading ecosystem focused on
            discipline, risk management, and long-term consistency.
            Our goal is simple: help traders stop gambling and start
            operating with a repeatable process.
          </p>

        </div>

        {/* STORY */}
        <section className="mt-24 max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Why Trader Kachi Exists
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p>
              Most traders do not fail because the market is impossible.
              They fail because they lack structure, discipline,
              and proper risk management.
            </p>

            <p>
              Trader Kachi was created to bridge that gap by helping traders
              develop a professional approach to the markets rather than
              relying on emotions, hype, or random signals.
            </p>

            <p>
              Every lesson, analysis, and community interaction is built
              around one principle:
              consistency beats excitement.
            </p>

          </div>

        </section>

        {/* VALUES */}
        <section className="mt-24">

          <div className="text-center mb-12">

            <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
              Core Principles
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              The Foundation Of The System
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-[#16A34A]/40 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                Discipline
              </h3>

              <p className="text-gray-400">
                Structured decisions outperform emotional reactions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-[#16A34A]/40 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                Consistency
              </h3>

              <p className="text-gray-400">
                Sustainable growth comes from repeatable execution.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-[#16A34A]/40 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                Education
              </h3>

              <p className="text-gray-400">
                Understanding the market is more valuable than chasing signals.
              </p>
            </motion.div>

          </div>

        </section>

        {/* CTA */}
        <section className="mt-24">

          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              Ready To Trade With Structure?
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Join a community focused on discipline, execution,
              and long-term trader development.
            </p>

            <a
              href="/community"
              className="inline-block mt-8 bg-[#16A34A] text-black px-8 py-4 rounded-2xl font-semibold transition hover:scale-105"
            >
              Join Community
            </a>

          </div>

        </section>

      </div>

    </main>
  );
}
