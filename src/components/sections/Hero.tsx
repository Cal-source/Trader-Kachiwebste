"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Trade Smart. Build Wealth.
        <span className="text-primary"> Trader Kachi</span>
      </motion.h1>

      <p className="text-gray-400 mt-6 max-w-xl">
        Learn structured forex trading with discipline, strategy, and real mentorship.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="bg-primary px-6 py-3 rounded-xl">
          Join Community
        </button>

        <button className="border border-white/20 px-6 py-3 rounded-xl">
          Learn More
        </button>
      </div>

    </section>
  );
}
