"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    index: "A",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Redux (Saga)", "Tailwind CSS", "shadcn/ui", "PWA", "Web Components", "Responsive Design"],
  },
  {
    index: "B",
    title: "Backend & Data",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase (Firestore, Auth, FCM)", "Zustand", "RESTful APIs", "MySQL"],
  },
  {
    index: "C",
    title: "Languages & Tools",
    skills: ["JavaScript", "C++", "Java", "Python", "Figma", "JIRA", "GitHub"],
  },
  {
    index: "D",
    title: "Practices",
    skills: ["Agile", "SDLC", "Code Reviews", "OOP", "Performance Optimization", "Cross-functional Collaboration"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="03" title="Toolbox" note="The stack behind the shipping" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="block-card"
            >
              <div className="flex items-center justify-between border-b-2 border-line px-6 py-4">
                <h3 className="font-black uppercase tracking-[-0.01em] text-2xl">
                  {category.title}
                </h3>
                <span className="w-9 h-9 bg-accent text-accent-fg font-heading font-black flex items-center justify-center text-sm">
                  {category.index}
                </span>
              </div>
              <div className="p-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag hover:text-accent hover:border-accent">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
