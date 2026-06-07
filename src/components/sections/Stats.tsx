"use client";

import { motion } from "framer-motion";

const defaultStats = [
  { value: "1,000+", label: "Students Mentored" },
  { value: "75%", label: "Strategy Win Rate" },
  { value: "24/7", label: "Community Access" },
];

export default function Stats({ stats = defaultStats }) {
  return (
    <section className="bg-[#050505] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-[#16A34A] text-sm uppercase tracking-widest mb-3">
          Community Metrics
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Built on Discipline & Consistency
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-[#16A34A]/40"
            >
              <p className="text-4xl font-bold text-[#16A34A]">
                {stat.value}
              </p>
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}