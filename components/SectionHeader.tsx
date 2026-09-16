"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-end justify-between gap-4 mb-12 pb-5 border-b-2 border-line"
    >
      <div className="flex items-start gap-4">
        <span className="font-heading font-black text-accent text-lg leading-none mt-2">
          ({index})
        </span>
        <h2 className="font-black uppercase tracking-[-0.02em] leading-none text-[clamp(2.2rem,6vw,4.5rem)]">
          {title}
        </h2>
      </div>
      {note && (
        <p className="text-mute text-sm uppercase tracking-[0.15em] max-w-xs">{note}</p>
      )}
    </motion.div>
  );
}
