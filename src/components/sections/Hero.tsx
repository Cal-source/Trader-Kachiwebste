"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black via-black to-black/95 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#16A34A]/20 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Badge */}
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

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Trade With Structure,{" "}
          <span className="text-[#16A34A]">Discipline & Edge</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Join a focused trading community built on strategy, risk management,
          and consistency — not hype. Learn how real traders grow accounts sustainably.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >

          <a
            href="#results"
            className="px-6 py-3 rounded-xl bg-[#16A34A] text-black font-semibold hover:scale-105 transition"
          >
            View Results
          </a>

          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-[#16A34A]/40 text-[#16A34A] hover:bg-[#16A34A]/10 transition"
          >
            Join Community
          </a>

        </motion.div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-gray-500">
          Built for traders who want consistency, not gambling.
        </p>

      </div>
    </section>
  );
}