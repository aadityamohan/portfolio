"use client";

import { Asterisk } from "lucide-react";

const techs = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Firebase",
  "MongoDB",
  "Tailwind CSS",
  "Zustand",
  "TanStack Query",
  "Express.js",
  "Vite",
  "shadcn/ui",
  "PWA",
];

function Row() {
  return (
    <>
      {techs.map((tech) => (
        <span key={tech} className="flex items-center gap-5 shrink-0">
          <span className="font-heading font-bold uppercase tracking-wide text-accent-fg text-sm whitespace-nowrap">
            {tech}
          </span>
          <Asterisk size={16} className="text-accent-fg/70 shrink-0" />
        </span>
      ))}
    </>
  );
}

export default function TechMarquee() {
  return (
    <div className="marquee bg-accent border-y-2 border-accent py-3.5 overflow-hidden">
      <div className="marquee-track flex items-center gap-5 w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
