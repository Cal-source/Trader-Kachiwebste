"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#050505] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.12),transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto text-center border border-white/10 bg-[#0A0A0A] rounded-3xl p-12 md:p-16">

        {/* TAG */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full border border-[#16A34A]/30 bg-[#16A34A]/10 text-[#16A34A] text-sm font-medium mb-6"
        >
          Final Step to Join
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Stop Guessing.
          <br />
          Start Trading With Structure.
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          You’ve seen the system, the results, and the structure.
          The only decision left is whether you continue alone or join a disciplined trading environment.
        </motion.p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="https://wa.me/2347048282823"
            className="bg-[#16A34A] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
          >
            Join on WhatsApp
          </Link>

          <Link
            href="#results"
            className="border border-white/20 px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5"
          >
            View Results Again
          </Link>

        </div>

        {/* TRUST BLOCK */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-2xl font-bold text-[#16A34A]">500+</h3>
            <p className="text-sm text-gray-400 mt-1">Traders Reached</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#16A34A]">90%</h3>
            <p className="text-sm text-gray-400 mt-1">Improved Discipline</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#16A34A]">Daily</h3>
            <p className="text-sm text-gray-400 mt-1">Market Analysis</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#16A34A]">24/7</h3>
            <p className="text-sm text-gray-400 mt-1">Community Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}
