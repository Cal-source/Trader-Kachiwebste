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

        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-green-500 px-6 py-3 rounded-xl font-semibold">
            Join Mentorship
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-xl">
            Watch Results
          </button>
        </div>
      </div>
    </section>
  );
}
