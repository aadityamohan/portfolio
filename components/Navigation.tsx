"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="max-w-6xl mx-auto block-card bg-ink/90 backdrop-blur-md flex items-center justify-between pl-4 pr-3 py-2.5">
        <a href="#home" className="flex items-center gap-3 cursor-pointer group">
          <span className="w-9 h-9 bg-accent text-accent-fg font-heading font-black flex items-center justify-center text-sm">
            AM
          </span>
          <span className="font-heading font-bold uppercase tracking-wide text-sm hidden sm:block group-hover:text-accent transition-colors duration-200">
            Aaditya Mohan
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium uppercase tracking-wide text-mute hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a href="mailto:mohanaaditya@gmail.com" className="btn-block !px-4 !py-2">
            Hire me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex items-center justify-center border-2 border-line text-fg hover:border-accent hover:text-accent transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-6xl mx-auto mt-2 block-card bg-ink/95 backdrop-blur-md p-3"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium uppercase tracking-wide text-mute hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="mailto:mohanaaditya@gmail.com"
                onClick={() => setIsOpen(false)}
                className="btn-block mt-2"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
