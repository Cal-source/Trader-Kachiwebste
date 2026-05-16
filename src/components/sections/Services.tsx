const services = [
  {
    title: "Step-by-Step Mentorship",
    desc: "Learn forex trading from beginner level to advanced market structure and execution."
  },
  {
    title: "Live Market Analysis",
    desc: "Watch real-time breakdowns of trades, entries, risk management, and market psychology."
  },
  {
    title: "Private Trading Community",
    desc: "Surround yourself with serious traders focused on consistency and growth."
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          What You’ll Get Inside Trader Kachi
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Everything you need to trade with confidence, discipline, and a structured strategy.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
