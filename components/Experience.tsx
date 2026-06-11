"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    hash: "f3a92c1",
    company: "PayRange",
    role: "Software Engineer (Frontend) · SDE-1",
    period: "Mar 2025 – Present",
    location: "Greater Noida, India",
    achievements: [
      "Built a production-grade POS back-office web app in React 18 + TypeScript + Vite — HMAC-signed/JWT-authenticated APIs, granular permissions, multi-scope settings, and full i18n (EN/ES/FR) on a themeable shadcn/ui + Tailwind design system",
      "Engineered the architecture around TanStack Query, Zustand, and Zod-validated forms using a feature-modular, container/presentational pattern, with automated testing (Vitest/RTL)",
      "Enforced git hygiene via Husky, ESLint, and Conventional Commits",
      "Developed and integrated RESTful APIs with backend teams to ship real-time notifications, Hold & Resume Order workflows, and CCI card payment integration",
      "Continuously improved performance and scalability, reducing load times and user drop-off during critical checkout and order-processing flows",
    ],
    tech: ["React 18", "TypeScript", "Vite", "TanStack Query", "Zustand", "Zod", "shadcn/ui", "Tailwind CSS", "Vitest"],
  },
  {
    hash: "b71e045",
    company: "TURNS",
    role: "Frontend Developer Intern",
    period: "Oct 2024 – Feb 2025",
    location: "Greater Noida, India",
    achievements: [
      "Led end-to-end UI/UX revamp across key modules using React and TypeScript — custom theme support, user preferences, and responsive design, improving retention and visual consistency",
      "Implemented core application logic — state management, form validation, event handling, and data flows — wiring components to live API data",
      "Designed and shipped scalable React components: dynamic subscription modals, advanced search bars, and royalty management UI, following clean code standards and peer reviews",
    ],
    tech: ["React", "TypeScript", "REST APIs", "UI/UX"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="git log --work --oneline" comment="where I've worked and what I shipped" />

        <div className="relative border-l border-term-border ml-2 sm:ml-3 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-term-green ring-4 ring-term-bg" />

              <div className="text-sm mb-2">
                <span className="text-term-yellow">commit {exp.hash}</span>
                <span className="text-term-muted"> ({exp.period})</span>
              </div>

              <div className="term-window">
                <div className="px-5 py-4 border-b border-term-border flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-term-text">{exp.company}</h3>
                    <p className="text-term-green text-sm">{exp.role}</p>
                  </div>
                  <span className="text-term-muted text-xs">{exp.location}</span>
                </div>

                <ul className="px-5 py-4 space-y-2.5 text-sm text-term-muted leading-relaxed">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="pl-5 relative">
                      <span className="absolute left-0 text-term-green">+</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="px-5 pb-4 flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="term-chip">
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
