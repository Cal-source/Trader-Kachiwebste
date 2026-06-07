"use client";

import { motion } from "framer-motion";

const results = [
  {
    title: "+12.4%",
    subtitle: "Monthly Growth",
    description:
      "Consistent account growth through disciplined execution and risk management.",
  },
  {
    title: "$500 → $2,100",
    subtitle: "Account Scaling",
    description:
      "Members learning how to compound profits while protecting capital.",
  },
  {
    title: "75%",
    subtitle: "Win Rate",
    description:
      "High-probability setups backed by structure, patience, and confirmation.",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-black via-black to-black/95"
    >
      {/* background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#16A34A] blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#16A34A] font-semibold uppercase tracking-[0.3em] text-sm">
            Performance Results
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-5">
            Proof of Execution
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Real structured trading outcomes based on discipline, risk control,
            and repeatable strategy execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >

              {/* glow border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#16A34A]/30 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">

                {/* big number */}
                <div className="text-4xl md:text-5xl font-bold text-[#16A34A]">
                  {item.title}
                </div>

                {/* subtitle */}
                <h3 className="text-xl font-semibold mt-4 text-white">
                  {item.subtitle}
                </h3>

                {/* description */}
                <p className="text-gray-400 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* bottom indicator line */}
                <div className="mt-6 h-[2px] w-16 bg-[#16A34A]/60 group-hover:w-full transition-all duration-500" />

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}