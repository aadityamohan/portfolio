"use client";

import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { useRef } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "mohanaaditya@gmail.com", href: "mailto:mohanaaditya@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-7011808985", href: "tel:+917011808985" },
  { icon: MapPin, label: "Location", value: "India", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aadityaamohan/" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
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
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-themed-muted max-w-2xl mx-auto"
          >
            Let&apos;s collaborate and build something amazing together
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex flex-col items-center gap-4 glass-effect p-8 rounded-2xl group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors"
                >
                  <info.icon className="text-luxury-gold" size={28} />
                </motion.div>
                <div className="text-center">
                  <p className="text-themed-light text-sm mb-1">{info.label}</p>
                  <p className="text-themed text-base font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="glass-effect p-6 rounded-full text-luxury-gold hover:bg-luxury-gold/10 transition-all"
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-20 text-themed-light"
      >
        <p>&copy; 2026 Aaditya Mohan. All rights reserved.</p>
      </motion.footer>
    </section>
  );
}
