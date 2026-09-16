"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Asterisk, Github, Linkedin, Mail, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const links = [
  { icon: Mail, label: "mohanaaditya@gmail.com", href: "mailto:mohanaaditya@gmail.com" },
  { icon: Phone, label: "+91-7011808985", href: "tel:+917011808985" },
  { icon: Github, label: "github.com/aadityamohan", href: "https://github.com/aadityamohan" },
  { icon: Linkedin, label: "in/aadityaamohan", href: "https://www.linkedin.com/in/aadityaamohan/" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="04" title="Contact" note="Open to full-time roles & ambitious product work" />

        <motion.a
          href="mailto:mohanaaditya@gmail.com"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="block-card block-card-hover group block p-8 sm:p-14 mb-6"
        >
          <div className="flex items-center gap-3 text-accent mb-6">
            <Asterisk size={28} strokeWidth={2.5} />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">
              Have a project in mind?
            </span>
          </div>
          <p className="font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2.4rem,8vw,6.5rem)]">
            Let&apos;s build
            <br />
            <span className="text-accent">something great</span>
            <ArrowUpRight className="inline-block ml-3 w-[clamp(2rem,6vw,5rem)] h-[clamp(2rem,6vw,5rem)] text-mute group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
          </p>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block-card block-card-hover group flex items-center gap-3 px-4 py-4"
            >
              <link.icon size={16} className="text-accent shrink-0" />
              <span className="text-sm text-mute group-hover:text-fg transition-colors duration-200 break-all">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>

        <footer className="pt-6 border-t-2 border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs uppercase tracking-wide text-mute">
          <p>© 2026 Aaditya Mohan</p>
          <p>Greater Noida, India — Open to remote</p>
          <p>
            Next.js + Tailwind <span className="text-accent">/</span> Netlify
          </p>
        </footer>
      </div>
    </section>
  );
}
