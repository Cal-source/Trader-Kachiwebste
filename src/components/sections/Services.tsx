"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Forex Mentorship System",
      description:
        "A structured approach to trading built on strategy, psychology, and disciplined execution — not guesswork.",
    },
    {
      title: "VIP Trade Setups",
      description:
        "High-quality market analysis with clear entries, stop losses, and take profit zones designed for consistency.",
    },
    {
      title: "Private Trading Community",
      description:
        "Join disciplined traders focused on long-term growth, accountability, and skill development.",
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-[#16A34A] text-sm uppercase tracking-widest mb-3">
            The System
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What You’re Actually Joining
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            This is not signals-only. It is a structured trading ecosystem
            designed to build consistency and discipline.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-[#16A34A]/40 transition-all duration-300"
            >

              {/* ICON */}
              <div className="w-12 h-12 rounded-xl bg-[#16A34A]/10 flex items-center justify-center text-xl mb-6">
                {index === 0 && "📊"}
                {index === 1 && "🎯"}
                {index === 2 && "🌐"}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* CTA HINT */}
              <div className="mt-6 text-[#16A34A] text-sm font-medium">
                Learn more inside the community →
              </div>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM CTA LINE */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Built for traders who want structure, not randomness.
          </p>
        </div>

      </div>
    </section>
  );
}