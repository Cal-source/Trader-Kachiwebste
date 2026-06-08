"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "2347048284823";
  const message = "Hi, I'm interested in Trader Kachi.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* OUTER GLOW RING */}
      <div className="absolute inset-0 rounded-full bg-[#16A34A] opacity-30 blur-xl group-hover:opacity-50 transition" />

      {/* PULSE RING (SOFTER) */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-20 animate-ping" />

      {/* MAIN BUTTON */}
      <div
        className="
        relative
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-[#16A34A]
        shadow-[0_0_20px_rgba(22,163,74,0.35)]
        hover:shadow-[0_0_35px_rgba(22,163,74,0.55)]
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
        "
      >
        <MessageCircle className="w-6 h-6 text-black" />
      </div>

      {/* TOOLTIP */}
      <div
        className="
        absolute
        right-16
        bottom-3
        hidden
        group-hover:block
        bg-[#0A0A0A]
        text-white
        text-xs
        px-3
        py-1.5
        rounded-md
        whitespace-nowrap
        border
        border-white/10
        backdrop-blur-md
        "
      >
        Chat on WhatsApp
      </div>
    </a>
  );
}
