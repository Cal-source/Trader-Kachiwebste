"use client";

import { motion } from "framer-motion";

export default function CommunityPage() {
  const benefits = [
    {
      icon: "📈",
      title: "Daily Trade Ideas",
      description:
        "Receive structured market setups, directional bias, and trade opportunities.",
    },
    {
      icon: "🧠",
      title: "Market Breakdown",
      description:
        "Learn how experienced traders analyze structure and identify high-probability zones.",
    },
    {
      icon: "⚡",
      title: "Trader Psychology",
      description:
        "Develop discipline, patience, and emotional control in volatile market conditions.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center">

          <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
            Trader Kachi Community
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Trade With
            <span className="text-[#16A34A]"> Structure</span>,
            Not Emotion
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Join a focused ecosystem of traders committed to discipline,
            consistency, and long-term growth.
          </p>

        </section>

        {/* STATS */}
        <section className="mt-20">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#16A34A]">
                Daily
              </h3>

              <p className="text-gray-400 mt-2">
                Market Analysis
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#16A34A]">
                24/7
              </h3>

              <p className="text-gray-400 mt-2">
                Community Access
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-[#16A34A]">
                Focused
              </h3>

              <p className="text-gray-400 mt-2">
                Learning Environment
              </p>
            </div>

          </div>

        </section>

        {/* BENEFITS */}
        <section className="mt-24">

          <div className="text-center mb-12">

            <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
              What You Get
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Inside The Community
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-[#16A34A]/40 transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#16A34A]/10 flex items-center justify-center text-2xl mb-6">
                  {benefit.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

              </motion.div>
            ))}

          </div>

        </section>

        {/* TESTIMONIAL */}
        <section className="mt-24">

          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 text-center">

            <p className="text-xl italic text-gray-300 max-w-3xl mx-auto">
              "Before joining, I was constantly overtrading and chasing setups.
              The community helped me develop patience and a clear process."
            </p>

            <p className="mt-6 text-[#16A34A] font-medium">
              — Community Member
            </p>

          </div>

        </section>

        {/* CTA */}
        <section className="mt-24">

          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 text-center">

            <p className="text-[#16A34A] uppercase tracking-widest text-sm mb-3">
              Join Today
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Ready To Trade Like A Professional?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Become part of a trading environment focused on growth,
              accountability, and disciplined execution.
            </p>

            <a
              href="https://wa.me/2347048284823"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-[#16A34A] text-black px-8 py-4 rounded-2xl font-semibold transition hover:scale-105"
            >
              Join on WhatsApp
            </a>

          </div>

        </section>

      </div>

    </main>
  );
                  }
