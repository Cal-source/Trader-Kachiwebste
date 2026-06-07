"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "No Clear Trading Structure",
    description:
      "Most traders enter the market without a defined system, leading to inconsistent results and emotional decisions.",
  },
  {
    title: "Losing Due to Overtrading",
    description:
      "Chasing setups and revenge trading destroys accounts faster than bad strategies ever will.",
  },
  {
    title: "No Risk Management Discipline",
    description:
      "Without proper risk control, even winning strategies eventually lead to blown accounts.",
  },
];

export default function Problem() {
  return (
    <section className="bg-[#050505] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#16A34A] text-sm uppercase tracking-widest mb-3"
        >
          The Problem
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Why Most Traders Stay Stuck
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-14"
        >
          It’s not because trading is impossible — it’s because most traders
          lack structure, discipline, and risk control.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">

          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all"
            >

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Closing Line */}
        <p className="mt-14 text-gray-500 text-sm">
          If this sounds familiar, you're not alone — but you are missing structure.
        </p>

      </div>
    </section>
  );
}