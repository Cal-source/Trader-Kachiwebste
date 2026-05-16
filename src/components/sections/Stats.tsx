export default function Stats() {
  return (
    <section className="py-16 px-6 text-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-4xl font-bold">1,000+</h2>
          <p className="text-gray-400 mt-2">Students Mentored</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-4xl font-bold">75%</h2>
          <p className="text-gray-400 mt-2">Strategy Focused Win Rate</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-4xl font-bold">24/7</h2>
          <p className="text-gray-400 mt-2">Community Access</p>
        </div>

      </div>
    </section>
  );
}
