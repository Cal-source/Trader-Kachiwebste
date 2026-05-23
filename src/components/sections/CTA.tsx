"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.18),transparent_65%)]" />

      <div className="relative max-w-5xl mx-auto text-center rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-16">

        {/* SMALL TAG */}
        <div className="inline-block px-4 py-2 rounded-full border border-[#16A34A]/30 bg-[#16A34A]/10 text-[#16A34A] text-sm font-medium mb-6">
          Limited Mentorship Slots Available
        </div>

        {/* MAIN HEADING */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Stop Trading Alone.
          <br />
          Start Winning With Structure.
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Join the Trader Kachi ecosystem and gain access to mentorship,
          structured learning, market guidance, and a serious trading community.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/community"
            className="bg-[#16A34A] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
          >
            Join Community
          </Link>

          <Link
            href="/services"
            className="border border-white/20 px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#16A34A] hover:border-[#16A34A]"
          >
            Explore Services
          </Link>

        </div>

        {/* TRUST STATS */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-2xl font-bold text-[#16A34A]">
              500+
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Traders Reached
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#16A34A]">
              90%
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Improved Discipline
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#16A34A]">
              Daily
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Market Analysis
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#16A34A]">
              24/7
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Community Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
