"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">

        {/* MAIN TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Trade Smarter. Build Wealth with{" "}
          <span className="text-primary">Trader Kachi</span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Join a disciplined trading ecosystem built for consistency, strategy,
          and financial growth.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/community"
            className="bg-primary px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Join Community
          </Link>

          <Link
            href="/services"
            className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            View Services
          </Link>

        </div>

        {/* 🔥 MINI NAV BANNER CARDS */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">

          <Link href="/about" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <p className="font-semibold">About</p>
            <p className="text-xs text-gray-400">Our story</p>
          </Link>

          <Link href="/services" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <p className="font-semibold">Services</p>
            <p className="text-xs text-gray-400">What we offer</p>
          </Link>

          <Link href="/results" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <p className="font-semibold">Results</p>
            <p className="text-xs text-gray-400">Student wins</p>
          </Link>

          <Link href="/community" className="bg-primary px-6 py-3 rounded-xl font-medium transition-colors hover:bg-[#16A34A]"
            <p className="font-semibold">Community</p>
            <p className="text-xs text-gray-400">Join traders</p>
          </Link>

        </div>

      </div>
    </section>
  );
}
