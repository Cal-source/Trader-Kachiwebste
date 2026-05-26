export default function ServicesPage() {
  const services = [
    {
      title: "Forex Mentorship",
      description:
        "Learn market structure, psychology, risk management, and disciplined execution directly from Trader Kachi.",
      features: [
        "Market Structure",
        "Risk Management",
        "Trading Psychology",
        "Live Sessions",
      ],
    },

    {
      title: "VIP Signals",
      description:
        "Get structured trade setups with clear entries, stop loss, and take profit levels.",
      features: [
        "Daily Setups",
        "Swing Trades",
        "Risk-to-Reward Focus",
        "Market Commentary",
      ],
    },

    {
      title: "Trading Community",
      description:
        "Join a focused ecosystem of traders learning, growing, and improving together.",
      features: [
        "Trader Network",
        "Motivation & Support",
        "Daily Discussions",
        "Market Insights",
      ],
    },
  ];

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">

          <h1 className="text-4xl md:text-6xl font-bold">
            Our Services
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Everything inside the Trader Kachi ecosystem is built to help traders
            become disciplined, structured, and consistently improving.
          </p>

        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/10 hover:-translate-y-2"
            >

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
                className="inline-block w-full text-center bg-[#16A34A] px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Get Started
              </
