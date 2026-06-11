"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1.5 px-2 py-1 border border-term-border rounded text-term-muted hover:text-term-yellow hover:border-term-yellow/50 transition-colors text-xs"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
      <span className="hidden sm:inline">{theme === "dark" ? "dark" : "light"}</span>
    </button>
  );
}
