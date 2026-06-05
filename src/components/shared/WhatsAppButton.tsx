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
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#16A34A] shadow-lg hover:scale-110 transition-transform duration-300">
        
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-40 animate-ping"></span>

        {/* Icon */}
        <MessageCircle className="w-6 h-6 text-white relative z-10" />

      </div>

      {/* Tooltip */}
      <div className="absolute right-16 bottom-3 hidden group-hover:block bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap border border-white/10">
        Chat on WhatsApp
      </div>
    </a>
  );
}
