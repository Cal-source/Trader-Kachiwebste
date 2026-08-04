"use client";

import {
  TrendingUp,
  Target,
  Trophy,
  DollarSign,
  Plus,
  BookOpen,
  Calculator,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="space-y-8">

      {/* Welcome */}
      <section>
        <h1 className="text-4xl font-bold">
          Welcome back 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Ready for another disciplined trading day?
        </p>
      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-4 gap-6">

        <StatCard
          icon={<DollarSign />}
          title="Today's P/L"
          value="+$245"
        />

        <StatCard
          icon={<TrendingUp />}
          title="Win Rate"
          value="71%"
        />

        <StatCard
          icon={<Target />}
          title="Average RR"
          value="2.3R"
        />

        <StatCard
          icon={<Trophy />}
          title="Winning Streak"
          value="6"
        />

      </section>

      {/* Main Grid */}

      <section className="grid lg:grid-cols-3 gap-8">

        {/* Left */}

        <div className="lg:col-span-2 space-y-8">

          {/* Equity */}

          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8">

            <h2 className="text-xl font-semibold mb-6">
              Equity Curve
            </h2>

            <div className="h-72 rounded-2xl border border-dashed border-white/10 flex items-center justify-center text-gray-500">
              Chart Coming Soon
            </div>

          </div>

          {/* Recent Trades */}

          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8">

            <h2 className="text-xl font-semibold mb-6">
              Recent Trades
            </h2>

            <div className="space-y-4">

              <Trade
                pair="EURUSD"
                result="+2R"
              />

              <Trade
                pair="GBPJPY"
                result="-1R"
              />

              <Trade
                pair="XAUUSD"
                result="+3R"
              />

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-8">

          {/* Checklist */}

          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8">

            <h2 className="text-xl font-semibold mb-6">
              Today's Checklist
            </h2>

            <Checklist text="Pre-market analysis" />
            <Checklist text="Risk calculated" />
            <Checklist text="Journal updated" />
            <Checklist text="Screenshots uploaded" />

          </div>

          {/* Quick Actions */}

          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8">

            <h2 className="text-xl font-semibold mb-6">
              Quick Actions
            </h2>

            <QuickButton
              icon={<Plus size={18} />}
              text="New Trade"
            />

            <QuickButton
              icon={<BookOpen size={18} />}
              text="Open Journal"
            />

            <QuickButton
              icon={<Calculator size={18} />}
              text="Risk Calculator"
            />

          </div>

        </div>

      </section>

    </main>
  );
}

function StatCard({
  icon,
  title,
  value,
}: any) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6">

      <div className="text-[#16A34A] mb-4">
        {icon}
      </div>

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>

    </div>
  );
}

function Checklist({ text }: any) {
  return (
    <label className="flex items-center gap-3 py-3 cursor-pointer">

      <input
        type="checkbox"
        className="accent-[#16A34A]"
      />

      <span>{text}</span>

    </label>
  );
}

function Trade({
  pair,
  result,
}: any) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-4">

      <span>{pair}</span>

      <span
        className={
          result.startsWith("+")
            ? "text-green-400"
            : "text-red-400"
        }
      >
        {result}
      </span>

    </div>
  );
}

function QuickButton({
  icon,
  text,
}: any) {
  return (
    <button className="w-full flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#16A34A]/10 hover:border-[#16A34A]/20 transition p-4 mb-4">

      {icon}

      <span>{text}</span>

    </button>
  );
}