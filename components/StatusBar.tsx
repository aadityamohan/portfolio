"use client";

import { useEffect, useState } from "react";

const sections = ["home", "skills", "experience", "projects", "contact"];

export default function StatusBar() {
  const [active, setActive] = useState("home");
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-term-border bg-term-surface/95 backdrop-blur-md text-xs select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between gap-3">
        <span className="text-term-green whitespace-nowrap">
          [tmux]<span className="text-term-muted hidden sm:inline"> aaditya@portfolio</span>
        </span>

        <div className="flex items-center gap-3 overflow-x-auto">
          {sections.map((section, i) => (
            <a
              key={section}
              href={`#${section}`}
              className={
                section === active
                  ? "text-term-bg bg-term-green px-1.5 rounded-sm font-semibold whitespace-nowrap"
                  : "text-term-muted hover:text-term-green transition-colors whitespace-nowrap"
              }
            >
              {i}:{section}
              {section === active && "*"}
            </a>
          ))}
        </div>

        <span className="text-term-muted whitespace-nowrap hidden sm:block">
          <span className="text-term-yellow">⚡</span> {time} IST
        </span>
      </div>
    </div>
  );
}
