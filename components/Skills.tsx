"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    key: "languages_and_tools",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "C++", "Java", "Python", "MySQL", "Figma", "JIRA", "GitHub"],
  },
  {
    key: "frontend",
    skills: ["React", "Next.js", "Redux (Saga)", "Tailwind CSS", "shadcn/ui", "PWA", "Responsive Design", "Web Components"],
  },
  {
    key: "backend_and_db",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase (Firestore, Auth, FCM, Storage)", "Zustand", "RESTful APIs"],
  },
  {
    key: "practices",
    skills: ["Agile", "SDLC", "Code Reviews", "OOP", "Performance Optimization", "Cross-functional Collaboration"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader command="cat ~/skills.json" comment="languages, frameworks & practices I work with" />

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="term-window"
            >
              <div className="px-5 py-3 border-b border-term-border text-sm">
                <span className="text-term-blue">&quot;{category.key}&quot;</span>
                <span className="text-term-muted">: [</span>
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="term-chip">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="px-5 pb-3 text-sm text-term-muted">],</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
