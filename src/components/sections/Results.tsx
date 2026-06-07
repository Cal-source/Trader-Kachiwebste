"use client";

import { motion } from "framer-motion";

const results = [
  {
    title: "+12.4%",
    subtitle: "Monthly Growth",
    description: "Consistent account growth through disciplined execution and risk management.",
  },
  {
    title: "$500 → $2,100",
    subtitle: "Account Scaling",
    description: "Members learning how to compound profits while protecting capital.",
  },
  {
    title: "75% Win Rate",
    subtitle: "Strategy Performance",
    description: "High-probability setups backed by structure and patience.",
  },
];

export default function Results() {
  return (
    <section className="bg-[#050505] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-[#16A34A] text-sm uppercase tracking-widest mb-3">
          Results
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Proof Over Promises
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          Trading is about consistency, discipline, and execution — not hype.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-[#16A34A]/40"
            >
              <p className="text-3xl font-bold text-[#16A34A]">
                {item.title}
              </p>

              <h3 className="text-xl font-semibold mt-3">
                {item.subtitle}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}