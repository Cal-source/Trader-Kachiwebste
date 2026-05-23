"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/2347048284823"
      target="_blank"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">

        {/* PULSE EFFECT */}
        <span className="absolute inset-0 rounded-full bg-[#16A34A] opacity-40 animate-ping" />

        {/* BUTTON */}
        <div className="relative bg-[#16A34A] hover:bg-green-600 transition-colors w-14 h-14 rounded-full flex items-center justify-center shadow-lg">

          {/* ICON (simple WhatsApp-style circle since no icon library needed) */}
          <span className="text-white text-2xl font-bold">
            WA
          </span>

        </div>

      </div>
    </Link>
  );
}
