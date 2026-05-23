"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "David O.",
      role: "Forex Student",
      quote:
        "Trader Kachi completely changed the way I approach the market. I became more disciplined and confident in my setups.",
    },
    {
      name: "Sarah M.",
      role: "VIP Member",
      quote:
        "The mentorship and signal structure helped me stop emotional trading and focus on consistency.",
    },
    {
      name: "Michael A.",
      role: "Community Member",
      quote:
        "The community environment keeps me motivated daily. It feels like trading with serious professionals.",
    },
    {
  name: "Emeka O.",
  role: "Mentorship Student",
  quote:
    "I used to jump from strategy to strategy without results. Trader Kachi helped me understand patience, structure, and proper entries.",
},
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            What Traders Are Saying
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Hear directly from members inside the Trader Kachi ecosystem.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/10 hover:-translate-y-2"
            >

              {/* QUOTE ICON */}
              <div className="text-4xl text-[#16A34A] mb-6">
                “
              </div>

              {/* QUOTE */}
              <p className="text-gray-300 leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* USER */}
              <div>

                <h3 className="font-semibold text-lg">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {testimonial.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
