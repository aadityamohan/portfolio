"use client";

import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

export default function SectionHeader({
  command,
  comment,
}: {
  command: string;
  comment: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="text-term-muted text-sm mb-2">
        <span className="text-term-muted/60"># </span>
        {comment}
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words">
        <span className="text-term-green mr-3 text-glow">$</span>
        <ScrambleText text={command} className="text-term-text" />
      </h2>
    </motion.div>
  );
}
