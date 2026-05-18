"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Results", href: "/results" },
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-primary"
        >
          Trader Kachi
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <button className="bg-primary hover:bg-blue-500 transition-colors px-5 py-2 rounded-xl text-sm font-medium">
          Join Community
        </button>
      </div>
    </motion.header>
  );
}
