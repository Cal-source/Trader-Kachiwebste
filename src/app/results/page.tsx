export default function ResultsPage() {
  const results = [
    {
      name: "Emeka O.",
      result: "Finally became consistently profitable",
      text: "I used to jump from strategy to strategy without results. Trader Kachi helped me understand patience, structure, and proper entries.",
    },
    {
      name: "Aisha M.",
      result: "Improved discipline and risk control",
      text: "The mentorship completely changed how I approach the market. I stopped gambling and started trading like a professional.",
    },
    {
      name: "Daniel K.",
      result: "First time achieving consistent wins",
      text: "The simple structure and explanations made everything clear. I finally understand what I'm doing in the market.",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <h1 className="text-4xl md:text-6xl font-bold">
            Student Results
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Real traders sharing real improvements after joining the Trader Kachi ecosystem.
          </p>

        </div>

        {/* RESULTS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {results.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/10 hover:-translate-y-2"
            >

              {/* NAME */}
              <h3 className="text-xl font-semibold mb-2">
                {item.name}
              </h3>

              {/* RESULT TAG */}
              <p className="text-[#16A34A] text-sm font-medium mb-4">
                {item.result}
              </p>

              {/* TEXT */}
              <p className="text-gray-400 leading-relaxed text-sm">
                "{item.text}"
              </p>

            </div>
          ))}

        </div>

        {/* TRUST SECTION */}
        <section className="mt-24 text-center">

          <h2 className="text-3xl font-bold">
            Why These Results Matter
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Trading success is not about signals — it's about discipline, structure,
            and consistency. These results reflect that transformation.
          </p>

        </section>

      </div>
    </main>
  );
}
