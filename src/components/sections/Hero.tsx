"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-black overflow-hidden">

      {/* BACKGROUND GLOW (ANIMATED) */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#16A34A]/20 blur-[160px] rounded-full"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#16A34A]/30 bg-white/5 mb-6"
        >
          <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
          <span className="text-sm text-[#16A34A] font-medium">
            Elite Trading Mentorship
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Trade With Structure,{" "}
          <span className="text-[#16A34A]">Discipline & Edge</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Learn how professional traders approach the market using structure,
          risk management, and disciplined execution — not emotion or luck.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/community"
            className="bg-[#16A34A] text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(22,163,74,0.35)] transition-all duration-300 active:scale-95"
          >
            Join Community
          </a>

          <a
            href="/services"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:border-[#16A34A] hover:text-[#16A34A] transition-all duration-300"
          >
            Explore Services
          </a>

          <a
  href="/dashboard"
  className="inline-block mt-6 text-sm text-[#16A34A] hover:text-white transition"
>
  Already a member? Open Trading OS →
</a>
        </motion.div>

      </div>
    </section>
  );
}
