"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center border-2 border-line text-mute hover:text-accent hover:border-accent transition-colors duration-200 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
