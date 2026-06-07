"use client";
// THIS IS A GIT TEST CHANGE 999
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Daniel K.",
    role: "Student Trader",
    text: "I finally understood structure-based trading. My consistency improved massively within 3 weeks.",
    result: "+18% monthly growth",
  },
  {
    name: "Sarah M.",
    role: "Swing Trader",
    text: "The risk management alone changed everything. I stopped blowing accounts.",
    result: "Account preserved + steady gains",
  },
  {
    name: "Emeka J.",
    role: "Beginner Trader",
    text: "Before this I was guessing trades. Now I actually follow a system.",
    result: "From confusion → clarity",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black/40">
      <div className="max-w-6xl mx-auto text-center mb-14">

        <p className="text-[#16A34A] uppercase tracking-widest font-semibold">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Real Traders. Real Results.
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Traders inside the community sharing their experience and progress.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#16A34A]/40 transition-all"
          >

            {/* Quote */}
            <p className="text-gray-300 italic">
              "{item.text}"
            </p>

            {/* Name */}
            <div className="mt-6 font-semibold text-white">
              {item.name}
            </div>

            <div className="text-sm text-gray-400">
              {item.role}
            </div>

            {/* Result badge */}
            <div className="mt-4 inline-block text-xs px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20">
              {item.result}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}