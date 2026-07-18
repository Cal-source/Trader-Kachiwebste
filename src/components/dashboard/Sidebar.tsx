"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  CalendarDays,
  LineChart,
  Calculator,
  Settings,
} from "lucide-react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Journal", href: "/dashboard/journal", icon: BookOpen },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Calendar", href: "/dashboard/calendar", icon: CalendarDays },
  { name: "Equity Curve", href: "/dashboard/equity", icon: LineChart },
  { name: "Risk Calculator", href: "/dashboard/risk", icon: Calculator },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-[#050505] border-r border-white/10 flex flex-col">

      <div className="px-8 py-8 border-b border-white/10">

        <h1 className="text-2xl font-bold">
          Trader{" "}
          <span className="text-[#16A34A]">
            Kachi
          </span>
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Trading OS
        </p>

      </div>

      <nav className="flex-1 p-6 space-y-2">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                pathname === link.href
                  ? "bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{link.name}</span>
            </Link>
          );
        })}

      </nav>

      <div className="border-t border-white/10 p-6 text-xs text-gray-500">
        Trader Kachi v1.0
      </div>

    </aside>
  );
}