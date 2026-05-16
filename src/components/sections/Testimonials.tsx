const testimonials = [
  {
    name: "David A.",
    result: "Passed my funded challenge in 2 months",
    text: "Before joining Trader Kachi, I kept blowing accounts. Now I finally understand risk management and structured trading."
  },

  {
    name: "Sarah K.",
    result: "Consistent weekly profits",
    text: "The mentorship completely changed how I approach the market. I stopped emotional trading and became disciplined."
  },

  {
    name: "Michael T.",
    result: "Improved confidence and execution",
    text: "The live market analysis helped me understand real trade setups instead of gambling on signals."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Real Results from Real Traders
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Traders inside the mentorship are learning structure, discipline, and consistency.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-white/10 bg-black/20 text-left"
            >
              <h3 className="text-xl font-bold">
                {testimonial.name}
              </h3>

              <p className="text-green-400 mt-2 font-semibold">
                {testimonial.result}
              </p>

              <p className="text-gray-400 mt-4">
                "{testimonial.text}"
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
