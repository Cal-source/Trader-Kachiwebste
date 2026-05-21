"use client";

export default function Services() {
  const services = [
    {
      title: "Forex Mentorship",
      description:
        "Learn institutional trading strategies, psychology, and risk management from Trader Kachi.",
    },
    {
      title: "VIP Signals",
      description:
        "Receive high-quality trade setups with clear entry, stop loss, and take profit levels.",
    },
    {
      title: "Trading Community",
      description:
        "Join a network of disciplined traders focused on consistency and long-term growth.",
    },
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Services
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Everything you need to develop discipline, confidence,
            and consistency in the forex market.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/10 hover:-translate-y-2"
            >

              {/* ICON CIRCLE */}
              <div className="w-14 h-14 rounded-2xl bg-[#16A34A]/20 flex items-center justify-center text-2xl mb-6 group-hover:bg-[#16A34A]/30 transition">

                {index === 0 && "📈"}
                {index === 1 && "💎"}
                {index === 2 && "🌍"}

              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* BUTTON */}
              <button className="mt-8 border border-white/20 px-5 py-2 rounded-xl transition-all duration-300 hover:bg-[#16A34A] hover:border-[#16A34A]">
                Learn More
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
