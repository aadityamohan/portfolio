"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const contactInfo = [
  {
    icon: Mail,
    label: "email",
    value: "mohanaaditya@gmail.com",
    href: "mailto:mohanaaditya@gmail.com",
  },
  {
    icon: Phone,
    label: "phone",
    value: "+91-7011808985",
    href: "tel:+917011808985",
  },
  {
    icon: Linkedin,
    label: "linkedin",
    value: "in/aadityaamohan",
    href: "https://www.linkedin.com/in/aadityaamohan/",
  },
  {
    icon: Github,
    label: "github",
    value: "@aadityamohan",
    href: "https://github.com/aadityamohan",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="ping aaditya --now" comment="open to interesting problems and good teams" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="term-window"
        >
          <div className="term-chrome">
            <span className="term-dot bg-term-red" />
            <span className="term-dot bg-term-yellow" />
            <span className="term-dot bg-term-green" />
            <span className="ml-3 text-xs text-term-muted">contact.sh</span>
          </div>

          <div className="p-5 sm:p-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 border border-term-border rounded bg-term-bg/50 hover:border-term-green/50 transition-colors group"
                >
                  <info.icon size={16} className="text-term-green shrink-0" />
                  <div className="text-sm min-w-0">
                    <span className="text-term-muted">{info.label}: </span>
                    <span className="text-term-text group-hover:text-term-green transition-colors break-all">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-5 text-sm text-term-muted flex items-center gap-2">
              <MapPin size={14} className="text-term-green" />
              Greater Noida, India
            </p>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center text-sm text-term-muted space-y-1"
        >
          <p>
            <span className="text-term-green">$</span> exit
          </p>
          <p>
            © 2026 Aaditya Mohan — process exited with code{" "}
            <span className="text-term-green">0</span>
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
