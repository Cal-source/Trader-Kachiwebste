"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const defaultStats = [
  { value: "1,000+", label: "Students Mentored" },
  { value: "75%", label: "Strategy Focused Win Rate" },
  { value: "24/7", label: "Community Access" }
];

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats?: Stat[];
}

export default function Stats({ stats = defaultStats }: StatsProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.8 } });
  }, [controls]);

  return (
    <section id="stats" className="py-16 px-6 text-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <p className="text-4xl font-bold">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block"
                // Animate numbers counting up
                key={stat.value}
                custom={stat.value}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, ease: "easeOut" }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                {/* For simplicity, we display the static value */}
                {stat.value}
              </motion.span>
            </p>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
      }
