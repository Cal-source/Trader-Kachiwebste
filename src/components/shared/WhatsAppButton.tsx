"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "2347048284823";

  const message =
    "Hi Trader Kachi, I'm interested in learning more about your mentorship and community.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] group"
    >
      {/* OUTER GLOW */}
      <div
        className="
        absolute
        inset-0
        rounded-full
        bg-[#16A34A]
        blur-2xl
        opacity-25
        group-hover:opacity-50
        transition-all
        duration-500
        "
      />

      {/* PULSE RING */}
      <span
        className="
        absolute
        inset-0
        rounded-full
        border
        border-[#16A34A]/40
        animate-ping
        "
      />

      {/* BUTTON */}
      <div
        className="
        relative
        flex
        items-center
        justify-center
        w-16
        h-16
        rounded-full
        bg-[#16A34A]
        shadow-[0_0_30px_rgba(22,163,74,0.35)]
        hover:shadow-[0_0_45px_rgba(22,163,74,0.55)]
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
        "
      >
        <MessageCircle className="w-7 h-7 text-black" />

        {/* ONLINE DOT */}
        <span
          className="
          absolute
          top-1
          right-1
          w-3
          h-3
          rounded-full
          bg-white
          border-2
          border-[#16A34A]
          "
        />
      </div>

      {/* TOOLTIP */}
      <div
        className="
        absolute
        right-20
        bottom-3
        opacity-0
        translate-x-2
        group-hover:opacity-100
        group-hover:translate-x-0
        transition-all
        duration-300
        pointer-events-none
        "
      >
        <div
          className="
          bg-[#0A0A0A]
          border
          border-white/10
          backdrop-blur-xl
          text-white
          px-4
          py-2
          rounded-xl
          text-sm
          whitespace-nowrap
          shadow-lg
          "
        >
          Chat with Trader Kachi
        </div>
      </div>
    </a>
  );
      }
