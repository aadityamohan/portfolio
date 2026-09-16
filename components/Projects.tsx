"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    index: "01",
    title: "Splitter",
    tagline: "Group Expense Manager",
    description:
      "Full-stack expense splitter with real-time Firestore sync, multi-provider auth (Google, Phone OTP, Email), and FCM push notifications. Privacy-first security rules with O(1) membership checks.",
    tech: ["React", "TypeScript", "Firebase", "Zustand", "PWA", "Expo"],
    demo: "https://splitter-fd759.web.app/?test",
    note: null,
  },
  {
    index: "02",
    title: "RailBuild Pro",
    tagline: "Construction Management PWA",
    description:
      "Offline-capable PWA with multi-role auth (Admin / Manager / Worker), invite-code onboarding, and real-time sync across 10+ modules — KPIs, tasks, crew, inventory, safety, payments, audit logs.",
    tech: ["React 18", "TypeScript", "Firebase", "Tailwind", "Vite PWA"],
    demo: "https://railwaypro-17927.web.app/",
    note: "Demo (password: Demo1234!): admin@demo.test · manager@demo.test · worker@demo.test",
  },
  {
    index: "03",
    title: "WhatsApp Bulk Sender",
    tagline: "Cross-Platform Desktop App",
    description:
      "Automated WhatsApp messaging at 95% delivery success with 100+ concurrent requests. JWT-secured REST API, QR-based auth, and validated CSV import/export cutting manual entry by 90%.",
    tech: ["Node.js", "React", "Baileys API", "Express", "MongoDB"],
    demo: "https://whatsapp-sender-production-a440.up.railway.app/",
    note: null,
  },
  {
    index: "04",
    title: "E-Commerce Store",
    tagline: "JAMstack Storefront",
    description:
      "Full-stack e-commerce platform with real-time inventory, Stripe checkout, Auth0 social login, and headless content via Sanity CMS.",
    tech: ["Next.js", "Sanity CMS", "Stripe", "Auth0", "MongoDB"],
    demo: null,
    note: null,
  },
];

function ProjectCard({ project, i }: { project: (typeof projects)[0]; i: number }) {
  const Wrapper = project.demo ? "a" : "div";
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
      className="h-full"
    >
      <Wrapper
        {...(project.demo
          ? { href: project.demo, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={`block-card group flex flex-col h-full p-6 sm:p-8 ${
          project.demo ? "block-card-hover" : ""
        }`}
      >
        <div className="flex items-start justify-between mb-6">
          <span className="font-heading font-black text-accent text-lg">
            ({project.index})
          </span>
          {project.demo ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-accent">
              <span className="w-2 h-2 bg-accent" /> Live
              <ArrowUpRight
                size={16}
                className="text-mute group-hover:text-accent transition-colors duration-200"
              />
            </span>
          ) : (
            <span className="text-xs font-bold uppercase tracking-wide text-mute">
              Case study
            </span>
          )}
        </div>

        <h3 className="font-black uppercase tracking-[-0.02em] text-3xl sm:text-4xl mb-1 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-heading font-bold uppercase tracking-wide text-sm text-mute mb-5">
          / {project.tagline}
        </p>

        <p className="text-mute leading-relaxed text-sm mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {project.note && (
          <p className="mt-4 text-xs text-mute/80 leading-relaxed border-t-2 border-line pt-3">
            {project.note}
          </p>
        )}
      </Wrapper>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" title="Selected Work" note="Real products, deployed and used — not just repos" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
