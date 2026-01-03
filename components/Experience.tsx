"use client";

import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "TURNS (Pay Range)",
    role: "Software Development Engineer - 1",
    period: "October 2024 - Present",
    location: "Noida, India",
    description: "Leading end-to-end UI/UX transformations and building scalable full-stack features for a growing platform.",
    achievements: [
      "Led comprehensive UI/UX revamp across key modules, introducing custom theme support and user preferences, resulting in increased user retention",
      "Built and integrated RESTful APIs for real-time user notifications, hold & resume order system, and CCI card payment integration",
      "Designed and deployed scalable components including dynamic subscription modals and advanced search functionality",
      "Drove performance optimizations resulting in faster load times and reduced user drop-off during critical interactions",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "UI/UX Design"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    company: "Careamicus",
    role: "Website Developer Intern",
    period: "September 2021 - March 2022",
    location: "Noida, India",
    description: "Developed and optimized company website to expand market reach and improve customer engagement.",
    achievements: [
      "Analyzed market opportunities and developed strategic website improvements to reach new audiences",
      "Implemented interactive chatbots for immediate customer engagement, increasing client acquisition by 30%",
      "Enhanced user experience with responsive design and improved site performance",
      "Streamlined communication channels enabling faster client response times",
    ],
    tech: ["JavaScript", "HTML/CSS", "Chatbot Integration", "Responsive Design"],
    gradient: "from-purple-500 to-pink-500",
  },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="glass-effect rounded-3xl p-8 relative overflow-hidden group"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.05 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 bg-gradient-to-br ${experience.gradient}`}
        />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <motion.h3
                whileHover={{ x: 10 }}
                className="text-3xl font-bold text-gradient mb-2"
              >
                {experience.company}
              </motion.h3>
              <motion.p
                whileHover={{ x: 10 }}
                transition={{ delay: 0.05 }}
                className="text-xl text-luxury-gold font-semibold mb-3"
              >
                {experience.role}
              </motion.p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6 text-themed-light">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-luxury-gold" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-luxury-gold" />
              <span>{experience.location}</span>
            </div>
          </div>

          <p className="text-themed-muted mb-6 leading-relaxed">
            {experience.description}
          </p>

          <div className="mb-6">
            <h4 className="text-luxury-gold font-semibold mb-3 flex items-center gap-2">
              <Briefcase size={18} />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                  className="text-themed-muted pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-luxury-gold"
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-luxury-gold/10 text-luxury-gold rounded-full text-sm border border-luxury-gold/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute -right-20 -top-20 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl group-hover:bg-luxury-gold/10 transition-colors duration-500"
        />
      </motion.div>

      {index < experiences.length - 1 && (
        <div className="flex justify-center py-8">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
            className="w-0.5 h-16 bg-gradient-to-b from-luxury-gold to-transparent origin-top"
          />
        </div>
      )}
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
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
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-themed-muted max-w-2xl mx-auto"
          >
            Building impactful solutions and driving innovation in professional environments
          </motion.p>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
