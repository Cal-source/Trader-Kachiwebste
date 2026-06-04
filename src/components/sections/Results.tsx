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
    title: "75% Win Rate",
    subtitle: "Strategy Performance",
    description:
      "High-probability setups backed by structure and patience.",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="py-24 px-6 bg-gradient-to-b from-transparent to-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#16A34A] font-semibold uppercase tracking-widest">
            Results
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Proof Over Promises
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Trading is about consistency, discipline, and execution.
            Here are examples of the type of growth our community works toward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-[#16A34A]/40 hover:bg-white/10 transition-all duration-300"
            >

              {/* Screenshot Placeholder */}
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#16A34A]/20 to-transparent border border-[#16A34A]/20 flex items-center justify-center mb-6">
                <span className="text-sm text-gray-400">
                  Trading Result Screenshot
                </span>
              </div>

              <div className="text-4xl font-bold text-[#16A34A]">
                {result.title}
              </div>

              <h3 className="text-xl font-semibold mt-4">
                {result.subtitle}
              </h3>

              <p className="text-gray-400 mt-3">
                {result.description}
              </p>
              
          ))}

        </div>

      </div>
    </section>
  );
}
