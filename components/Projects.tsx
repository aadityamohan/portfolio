"use client";

import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "WhatsApp Bulk Messaging Application",
    description: "Cross-platform desktop application for automated WhatsApp messaging with 95% delivery success rate. Features secure WhatsApp Web integration using Baileys library, QR code authentication, and session persistence with automatic reconnection handling.",
    highlights: [
      "95% message delivery success rate across 1000+ contacts",
      "RESTful API with rate limiting and JWT authentication",
      "MongoDB integration with optimized indexing for fast queries",
      "40% reduction in message sending time through queue management",
    ],
    tech: ["Node.js", "React", "Baileys API", "Express.js", "MongoDB", "JWT"],
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/aadityamohan/whatsapp-bulk-messaging",
    live: "#",
  },
  {
    title: "E-Commerce Store",
    description: "Full-stack e-commerce platform featuring real-time inventory management, secure payment processing, and seamless user authentication. Built with modern JAMstack architecture for optimal performance.",
    highlights: [
      "Integrated Sanity CMS for headless content management",
      "Stripe payment gateway with secure checkout flow",
      "Auth0 authentication with social login support",
      "Responsive design with optimized mobile experience",
    ],
    tech: ["React", "Next.js", "Sanity CMS", "Stripe", "Auth0", "MongoDB"],
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/aadityamohan/ecommerce-store",
    live: "https://ecommerce-store-demo.vercel.app",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative glass-effect rounded-3xl p-8 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
      />

      <div className="relative z-10">
        <motion.h3
          animate={{ x: isHovered ? 10 : 0 }}
          className="text-3xl font-bold text-gradient mb-4"
        >
          {project.title}
        </motion.h3>

        <motion.p
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ delay: 0.05 }}
          className="text-themed-muted mb-4 leading-relaxed"
        >
          {project.description}
        </motion.p>

        <motion.div
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ delay: 0.08 }}
          className="mb-6"
        >
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.15 + idx * 0.1 }}
                className="text-themed-light text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-luxury-gold"
              >
                {highlight}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-luxury-gold/10 text-luxury-gold rounded-full text-sm border border-luxury-gold/20"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ delay: 0.15 }}
          className="flex gap-4"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-luxury-gold hover:bg-luxury-gold/10 transition-all"
          >
            <Github size={20} />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-luxury-gold text-luxury-dark rounded-full hover:bg-luxury-darkGold transition-all"
          >
            <ExternalLink size={20} />
            <span>Live</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 0 : -180,
        }}
        className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-transparent rounded-full blur-2xl"
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-themed-muted max-w-2xl mx-auto"
          >
            Personal projects showcasing full-stack development and technical innovation
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
