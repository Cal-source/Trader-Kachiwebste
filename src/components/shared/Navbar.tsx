"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Results", href: "/results" },
  { name: "Trading OS", href: "/dashboard" },
  { name: "Community", href: "/community" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.03 }}
        >
          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
            Trader{" "}
            <span className="text-[#16A34A]">
              Kachi
            </span>
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
  <Link
    key={link.name}
    href={link.href}
    className={`text-sm transition-colors duration-300 ${
      link.name === "Trading OS"
        ? "text-[#16A34A] font-semibold hover:text-white"
        : "text-gray-400 hover:text-white"
    }`}
  >
    {link.name}
  </Link>
))}

        </nav>

        {/* DESKTOP CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            href="/community"
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
          </Link>
        </motion.div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            border
            border-white/10
            bg-[#0A0A0A]
            px-4
            py-2
            rounded-xl
            text-white
            transition
          "
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="
              md:hidden
              border-t
              border-white/10
              bg-[#050505]
            "
          >
            <div className="flex flex-col px-6 py-6 gap-6">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-gray-300
                    hover:text-[#16A34A]
                    transition-colors
                    text-lg
                  "
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/community"
                onClick={() => setIsOpen(false)}
                className="
                  mt-2
                  text-center
                  bg-[#16A34A]
                  text-black
                  py-3
                  rounded-xl
                  font-semibold
                "
              >
                Join Community
              </Link>

            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </header>
  );
      }
