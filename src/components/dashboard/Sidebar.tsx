"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  CalendarDays,
  LineChart,
  Calculator,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
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
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    if (saved) {
      setCollapsed(saved === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", collapsed.toString());
  }, [collapsed]);

  return (
    <motion.aside
      animate={{ width: collapsed ? 88 : 288 }}
      transition={{ duration: 0.25 }}
      className="h-screen bg-[#050505] border-r border-white/10 flex flex-col overflow-hidden"
    >
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          {!collapsed ? (
            <div>
              <h1 className="text-2xl font-bold">
                Trader <span className="text-[#16A34A]">Kachi</span>
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Trading OS
              </p>
            </div>
          ) : (
            <div className="text-2xl font-bold text-[#16A34A]">
              TK
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
          >
            {collapsed ? (
              <PanelLeftOpen size={18} />
            ) : (
              <PanelLeftClose size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center ${
                collapsed ? "justify-center" : "gap-4"
              } rounded-xl px-4 py-3 transition-all ${
                pathname === link.href
                  ? "bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={20} />

              {!collapsed && (
                <span>{link.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 p-6 text-xs text-gray-500 text-center">
        {!collapsed ? "Trader Kachi v1.0" : "v1.0"}
      </div>
    </motion.aside>
  );
}