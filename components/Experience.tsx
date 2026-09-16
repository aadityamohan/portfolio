"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "PayRange",
    role: "Software Engineer (Frontend) · SDE-1",
    period: "Mar 2025 — Present",
    location: "Greater Noida, India",
    current: true,
    achievements: [
      "Built a production-grade POS back-office web app in React 18 + TypeScript + Vite — HMAC-signed/JWT-authenticated APIs, granular permissions, multi-scope settings, full i18n (EN/ES/FR) on a themeable shadcn/ui design system",
      "Engineered the architecture around TanStack Query, Zustand, and Zod-validated forms with feature-modular patterns and automated testing (Vitest/RTL)",
      "Shipped mission-critical features with backend teams: real-time notifications, Hold & Resume Order workflows, CCI card payments",
      "Cut load times and reduced user drop-off in checkout and order-processing flows",
    ],
    tech: ["React 18", "TypeScript", "Vite", "TanStack Query", "Zustand", "Zod", "shadcn/ui", "Vitest"],
  },
  {
    company: "TURNS",
    role: "Frontend Developer Intern",
    period: "Oct 2024 — Feb 2025",
    location: "Greater Noida, India",
    current: false,
    achievements: [
      "Led an end-to-end UI/UX revamp with custom theme support and responsive design — improving retention and visual consistency",
      "Implemented core application logic — state management, form validation, event handling — wired to live API data",
      "Shipped scalable React components: dynamic subscription modals, advanced search, royalty management UI",
    ],
    tech: ["React", "TypeScript", "REST APIs", "UI/UX"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" title="Experience" note="Where I've shipped and scaled real products" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="block-card grid lg:grid-cols-[280px_1fr]"
            >
              {/* left block */}
              <div className="bg-ink/40 border-b-2 lg:border-b-0 lg:border-r-2 border-line p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="font-black uppercase tracking-[-0.02em] text-3xl mb-2">
                    {exp.company}
                  </h3>
                  <p className="font-heading font-bold uppercase tracking-wide text-sm text-accent">
                    {exp.role}
                  </p>
                </div>
                <div className="text-mute text-sm uppercase tracking-wide space-y-1">
                  <p className="font-bold text-fg">{exp.period}</p>
                  <p>{exp.location}</p>
                  {exp.current && (
                    <p className="inline-flex items-center gap-2 text-accent font-bold mt-2">
                      <span className="w-2 h-2 bg-accent" /> Current
                    </p>
                  )}
                </div>
              </div>

              {/* right block */}
              <div className="p-6 sm:p-8">
                <ul className="space-y-3.5 mb-6">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-mute leading-relaxed">
                      <Plus size={15} className="text-accent shrink-0 mt-0.5" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
