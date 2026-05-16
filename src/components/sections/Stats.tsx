const defaultStats = [
  { value: "1,000+", label: "Students Mentored" },
  { value: "75%", label: "Strategy Focused Win Rate" },
  { value: "24/7", label: "Community Access" }
];

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats?: Stat[];
}

export default function Stats({ stats = defaultStats }: StatsProps) {
  return (
    <section id="stats" className="py-16 px-6 text-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-4xl font-bold">{stat.value}</p>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
