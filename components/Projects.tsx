"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    dir: "splitter/",
    title: "Splitter — Group Expense Manager",
    description:
      "Full-stack expense splitter with real-time sync (Firestore onSnapshot), multi-provider auth (Google, Phone OTP, Email/Password), and push notifications via Cloud Functions + FCM.",
    highlights: [
      "Privacy-first Firestore security rules enforcing group-scoped access via a per-user membership index — O(1) exists() rule-evaluation reads",
      "Mobile-installable PWA with settlement tracking, itemized balance breakdowns, and dark mode",
      "One-click recruiter demo login seeded with sample data",
    ],
    tech: ["React", "TypeScript", "Firebase", "Zustand", "PWA", "React Native (Expo)"],
    demo: "https://splitter-fd759.web.app/?test",
    note: null,
  },
  {
    dir: "railbuild-pro/",
    title: "RailBuild Pro — Railway Construction Management PWA",
    description:
      "Offline-capable PWA with multi-role auth (Admin / Manager / Worker), invite-code onboarding, and Firestore security rules enforcing role-based access scoped per company.",
    highlights: [
      "Real-time data sync via Firestore onSnapshot across 10+ modules",
      "Dashboard KPIs, Tasks, Crew, Equipment, Inventory, Safety Incidents, Payments, and Audit Logs",
    ],
    tech: ["React 18", "TypeScript", "Firebase", "Tailwind CSS", "Zustand", "Vite PWA"],
    demo: "https://railwaypro-17927.web.app/",
    note: "demo (password: Demo1234!): admin@demo.test · manager@demo.test · worker@demo.test",
  },
  {
    dir: "whatsapp-sender/",
    title: "WhatsApp Bulk Messaging Desktop App",
    description:
      "Cross-platform desktop app for automated WhatsApp messaging — 95% delivery success rate, 100+ concurrent requests, supporting Windows, macOS, and Linux.",
    highlights: [
      "JWT-secured REST API with QR-based WhatsApp Web auth and session persistence",
      "MongoDB (Mongoose ODM) with validated CSV import/export — 90% less manual data entry, 40% faster sends",
    ],
    tech: ["Node.js", "React", "Baileys API", "Express.js", "MongoDB"],
    demo: "https://whatsapp-sender-production-a440.up.railway.app/",
    note: null,
  },
  {
    dir: "ecommerce-store/",
    title: "E-Commerce Store",
    description:
      "Full-stack e-commerce platform with real-time inventory management, secure payment processing, and seamless user authentication, built on a JAMstack architecture.",
    highlights: [
      "Sanity CMS for headless content management",
      "Stripe payment gateway with secure checkout flow",
      "Auth0 authentication with social login support",
    ],
    tech: ["React", "Next.js", "Sanity CMS", "Stripe", "Auth0", "MongoDB"],
    demo: null,
    note: null,
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="term-window flex flex-col group"
    >
      <div className="term-chrome">
        <span className="term-dot bg-term-red" />
        <span className="term-dot bg-term-yellow" />
        <span className="term-dot bg-term-green" />
        <span className="ml-3 text-xs text-term-muted truncate">~/projects/{project.dir}</span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-term-text mb-3 group-hover:text-term-green transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-term-muted leading-relaxed mb-4">{project.description}</p>

        <ul className="space-y-2 text-sm text-term-muted mb-5">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="pl-5 relative">
              <span className="absolute left-0 text-term-green">&gt;</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          {project.tech.map((tech) => (
            <span key={tech} className="term-chip">
              {tech}
            </span>
          ))}
        </div>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-term-blue hover:text-term-green transition-colors w-fit"
          >
            <span className="text-term-green">$</span> open --live-demo
            <ExternalLink size={14} />
          </a>
        )}

        {project.note && (
          <p className="mt-3 text-xs text-term-yellow/90 leading-relaxed">
            <span className="text-term-muted"># </span>
            {project.note}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader command="ls -la ~/projects" comment="things I've built and shipped" />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.dir} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
