"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.03 }}
          className="font-bold text-xl text-white"
        >
          Trader{" "}
          <span className="text-[#16A34A]">
            Kachi
          </span>
        </motion.a>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">

          <a
            href="#services"
            className="hover:text-white transition-colors duration-300"
          >
            Services
          </a>

          <a
            href="#results"
            className="hover:text-white transition-colors duration-300"
          >
            Results
          </a>

          <a
            href="#faq"
            className="hover:text-white transition-colors duration-300"
          >
            FAQ
          </a>

          <a
            href="#cta"
            className="hover:text-white transition-colors duration-300"
          >
            Join
          </a>

        </nav>

        {/* CTA BUTTON */}
        <motion.a
          href="/community"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-[#16A34A]
            text-black
            px-5
            py-2.5
            rounded-xl
            font-semibold
            transition-all
            duration-300
            hover:shadow-[0_0_25px_rgba(22,163,74,0.35)]
          "
        >
          Join Community
        </motion.a>

      </div>

    </header>
  );
}
