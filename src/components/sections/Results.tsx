"use client";

export default function Results() {
  const results = [
    {
      title: "Beginner to Consistent Trader",
      detail: "Student went from zero knowledge to consistent monthly profits within 60 days.",
      stat: "+48% growth",
    },
    {
      title: "Risk Management Mastery",
      detail: "Improved discipline and reduced emotional trading after mentorship.",
      stat: "90% discipline rate",
    },
    {
      title: "Signal Performance",
      detail: "VIP signals delivered structured entries with clear risk control.",
      stat: "High accuracy setups",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black/20 border-y border-white/10">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Results That Speak
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real progress from traders inside the Trader Kachi ecosystem.
          </p>
        </div>

        {/* RESULTS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {results.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/10 hover:-translate-y-2"
            >

              {/* BIG STAT */}
              <div className="text-[#16A34A] text-2xl font-bold mb-4">
                {item.stat}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed">
                {item.detail}
              </p>

            </div>
          ))}

        </div>

        {/* OPTIONAL CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-400 mb-4">
            Want results like this?
          </p>

          <a
            href="/community"
            className="inline-block bg-[#16A34A] px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Join Community
          </a>
        </div>

      </div>
    </section>
  );
      }
