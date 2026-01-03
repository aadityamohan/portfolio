"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "JavaScript", level: 93 },
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX Design", level: 88 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 83 },
      { name: "RESTful APIs", level: 92 },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "C++", level: 80 },
      { name: "Java", level: 78 },
      { name: "Python", level: 75 },
      { name: "Git & GitHub", level: 93 },
      { name: "JIRA", level: 85 },
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "R Programming", level: 72 },
      { name: "Tableau", level: 70 },
      { name: "Data Analysis", level: 75 },
      { name: "SQL", level: 80 },
      { name: "Figma", level: 82 },
    ],
  },
];

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="glass-effect rounded-3xl p-8 hover:shadow-2xl hover:shadow-luxury-gold/20 transition-all duration-300"
    >
      <h3 className="text-3xl font-bold text-gradient mb-8">{category.title}</h3>
      <div className="space-y-6">
        {category.skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-themed font-medium">{skill.name}</span>
              <span className="text-luxury-gold">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--input-bg)' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.2 + idx * 0.1 + 0.3 }}
                className="h-full bg-gradient-to-r from-luxury-gold to-yellow-200 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gradient mb-6"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-themed-muted max-w-2xl mx-auto"
          >
            Mastering the latest technologies to build exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
