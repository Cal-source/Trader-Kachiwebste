"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/234XXXXXXXXXX"
      target="_blank"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">

        {/* PULSE RING */}
        <span className="absolute inset-0 rounded-full bg-[#16A34A] opacity-40 animate-ping" />

        {/* BUTTON */}
        <div className="relative w-14 h-14 rounded-full bg-[#16A34A] hover:bg-green-600 transition-colors flex items-center justify-center shadow-lg">

          {/* WHATSAPP ICON (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-7 h-7 text-white"
          >
            <path d="M16 .5C7.5.5.5 7.3.5 15.8c0 3.1.8 6 2.3 8.6L.4 31.5l7.4-2.4c2.4 1.3 5.2 2 8.1 2C24.5 31.1 31.5 24.3 31.5 15.8S24.5.5 16 .5zm0 28.3c-2.5 0-5-.7-7.1-2l-.5-.3-4.4 1.4 1.5-4.2-.3-.5c-1.4-2.2-2.2-4.7-2.2-7.3C3 8.3 8.4 3 16 3s13 5.3 13 12.8-5.4 12.8-13 12.8zm7-9.4c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.2-.8 0-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.3-2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.8.2-.3.2-.5.4-.8.1-.3 0-.6 0-.8 0-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.7c-.3 0-.8.1-1.2.5-.4.4-1.5 1.5-1.5 3.7s1.5 4.4 1.7 4.7c.2.3 3.1 4.7 7.5 6.6 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.3-.9 2.6-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z"/>
          </svg>

        </div>

      </div>
    </Link>
  );
}
