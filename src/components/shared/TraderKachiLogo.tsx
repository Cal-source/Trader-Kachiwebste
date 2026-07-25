"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export default function TraderKachiLogo({
  size = 44,
  showText = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 select-none"
    >
      {/* LOGO */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{
          rotate: -3,
          scale: 1.05,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        {/* Background */}
        <rect
          width="100"
          height="100"
          rx="24"
          fill="#050505"
          stroke="#1A1A1A"
          strokeWidth="2"
        />

        {/* Animated Glow */}
        <motion.circle
          cx="50"
          cy="50"
          r="38"
          fill="#16A34A"
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* T */}
        <path
          d="M22 24H78V34H56V78H44V34H22Z"
          fill="white"
        />

        {/* Animated K */}
        <motion.path
          d="M58 50L80 24H67L49 46L68 78H82L58 50Z"
          fill="#16A34A"
          animate={{
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.svg>

      {showText && (
        <motion.div
          initial={{
            opacity: 0,
            x: -8,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h1 className="font-bold text-xl leading-none tracking-tight">
            Trader{" "}
            <span className="text-[#16A34A]">
              Kachi
            </span>
          </h1>

          <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mt-1">
            Trading OS
          </p>
        </motion.div>
      )}
    </Link>
  );
}