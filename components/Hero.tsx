"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Asterisk, Github, Linkedin, Mail } from "lucide-react";
import CountUp from "./CountUp";

const stats = [
  { value: 1.5, suffix: "+", decimals: 1, label: "Years in production" },
  { value: 3, suffix: "", decimals: 0, label: "Live products" },
  { value: 10, suffix: "+", decimals: 0, label: "Modules shipped" },
  { value: 95, suffix: "%", decimals: 0, label: "Delivery success" },
];

const socials = [
  { icon: Github, href: "https://github.com/aadityamohan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aadityaamohan/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mohanaaditya@gmail.com", label: "Email" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-36 pb-20 overflow-hidden">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden />

      <div className="max-w-6xl mx-auto w-full">
        {/* eyebrow row */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-mute">
            Greater Noida, India
          </p>
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent font-medium">
            <span className="w-2.5 h-2.5 bg-accent" />
            Open to work
          </p>
        </motion.div>

        {/* giant editorial name */}
        <div className="relative mb-10">
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-black uppercase leading-[0.88] tracking-[-0.03em] text-[clamp(3.2rem,13vw,11rem)]"
          >
            Aaditya
          </motion.h1>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="font-black uppercase leading-[0.88] tracking-[-0.03em] text-[clamp(3.2rem,13vw,11rem)] flex items-center gap-2 sm:gap-4"
          >
            Mohan
            <Asterisk
              className="text-accent w-[clamp(2.6rem,9vw,7.5rem)] h-[clamp(2.6rem,9vw,7.5rem)] shrink-0"
              strokeWidth={2.5}
            />
          </motion.h1>
        </div>

        {/* role block row */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-[1fr_auto] gap-8 md:items-end mb-14"
        >
          <div>
            <div className="font-heading font-bold uppercase text-xl sm:text-2xl space-y-1 mb-5">
              <p>/ Software Engineer — SDE-1 @ <span className="text-accent">PayRange</span></p>
              <p>/ Frontend & Full-Stack</p>
              <p>/ React · TypeScript · Firebase</p>
            </div>
            <p className="text-mute max-w-xl leading-relaxed">
              I design and ship production-grade web products — POS platforms,
              real-time PWAs, and design systems used by real customers every day.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col gap-3">
            <a href="#work" className="btn-block">
              See my work <ArrowDownRight size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch <ArrowUpRight size={16} />
            </a>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center border-2 border-line text-mute hover:text-accent hover:border-accent transition-colors duration-200 cursor-pointer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* stats blocks */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="grid grid-cols-2 lg:grid-cols-4 border-2 border-line divide-y-2 lg:divide-y-0 divide-x-0 [&>*+*]:border-l-2 [&>*+*]:border-line max-lg:[&>*:nth-child(3)]:border-l-0 max-lg:[&>*:nth-child(odd)]:border-l-0"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface p-5 sm:p-6 hover:bg-accent group transition-colors duration-200">
              <p className="font-heading font-black text-3xl sm:text-4xl group-hover:text-accent-fg transition-colors duration-200">
                <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="text-mute text-xs uppercase tracking-wide mt-1.5 group-hover:text-accent-fg/80 transition-colors duration-200">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
