"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-gradient glow-text"
        >
          Aaditya
          <br />
          Mohan
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-3xl md:text-4xl text-luxury-gold mb-8 font-semibold"
        >
          Software Development Engineer (SDE 1)
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-themed-muted mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable full-stack applications with the MERN stack,
          leading UI/UX transformations, and crafting seamless user experiences
          with modern web technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/aadityamohan", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/aaditya-mohan", label: "LinkedIn" },
            { icon: Mail, href: "mailto:mohanaaditya@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="glass-effect p-4 rounded-full text-luxury-gold hover:bg-luxury-gold/10 transition-all"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#skills"
          variants={itemVariants}
          whileHover={{ y: 10 }}
          className="inline-block group"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-luxury-gold group-hover:scale-110 transition-transform"
          >
            <ChevronDown size={40} />
          </motion.div>
        </motion.a>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent, var(--bg-color-fade), var(--bg-color))'
      }} />
    </section>
  );
}
