"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      icon: "📊",
      title: "Forex Mentorship System",
      description:
        "Learn the framework behind disciplined trading, market structure, risk management, and professional execution.",
      features: [
        "Market Structure",
        "Risk Management",
        "Trading Psychology",
        "Live Sessions",
      ],
    },

    {
      icon: "🎯",
      title: "VIP Trade Setups",
      description:
        "Receive structured trade ideas with defined entries, stop losses, and profit targets built around risk control.",
      features: [
        "Daily Setups",
        "Swing Trades",
        "Risk-to-Reward Focus",
        "Market Commentary",
      ],
    },

    {
      icon: "🌐",
      title: "Private Trading Community",
      description:
        "Join a focused ecosystem of traders committed to discipline, growth, accountability, and consistency.",
      features: [
        "Trader Network",
        "Daily Discussions",
        "Market Insights",
        "Community Support",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center">

          <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
            The Trader Kachi System
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Everything You Need
            <span className="text-[#16A34A]"> To Trade With Structure</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Every service inside Trader Kachi is designed around one goal:
            helping traders build consistency through structure,
            discipline, and risk management.
          </p>

        </section>

        {/* SERVICES */}
        <section className="mt-24">

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-[#16A34A]/40 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#16A34A]/10 flex items-center justify-center text-2xl mb-6">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">

                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      {feature}
                    </li>
                  ))}

                </ul>

                <a
                  href="/community"
                  className="inline-block w-full text-center bg-[#16A34A] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Get Started
                </a>

              </motion.div>
            ))}

          </div>

        </section>

        {/* WHY SECTION */}
        <section className="mt-24">

          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 text-center">

            <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
              Why Trader Kachi
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Built For Long-Term Trader Development
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
              The objective is not hype, gambling, or chasing quick wins.
              The objective is helping traders develop a professional process,
              manage risk effectively, and build sustainable consistency over time.
            </p>

          </div>

        </section>

        {/* CTA */}
        <section className="mt-24">

          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              Ready To Join The System?
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Join a community focused on structure, execution,
              and disciplined growth.
            </p>

            <a
              href="/community"
              className="inline-block mt-8 bg-[#16A34A] text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Join Community
            </a>

          </div>

        </section>

      </div>

    </main>
  );
                      }
