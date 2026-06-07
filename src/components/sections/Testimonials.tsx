"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex M.",
    text: "This completely changed how I approach trading. Discipline finally clicked.",
  },
  {
    name: "David K.",
    text: "Clear strategy, no noise. My consistency improved within weeks.",
  },
  {
    name: "Sarah T.",
    text: "Feels like a real trading system, not random signals.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050505] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-[#16A34A] text-sm uppercase tracking-widest mb-3">
          Testimonials
        </p>

        <h2 className="text-4xl font-bold mb-14">
          What Members Are Experiencing
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-left">

          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-[#16A34A]/40"
            >

              <p className="text-gray-300">
                "{t.text}"
              </p>

              <p className="text-[#16A34A] mt-4 font-semibold">
                — {t.name}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}