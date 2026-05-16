export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Master Forex Trading with a Proven System
        </h1>

        <p className="text-gray-300 mt-6 text-lg">
          Join Trader Kachi mentorship and learn how to trade consistently with structure, risk management, and real market strategy.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          {/* PRIMARY BUTTON (GREEN CTA) */}
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-xl font-semibold 
                       hover:scale-105 hover:bg-green-400 
                       transition-all duration-300 shadow-lg"
          >
            Join Mentorship
          </a>

          {/* SECONDARY BUTTON */}
          <button
            className="border border-white/20 px-6 py-3 rounded-xl 
                       hover:scale-105 hover:bg-white/10 
                       transition-all duration-300"
          >
            Watch Results
          </button>

        </div>
      </div>
    </section>
  );
}
