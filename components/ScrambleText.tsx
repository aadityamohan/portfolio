"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}$#@%&*=+?~";

export default function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = text.length * 2 + 10;
    const interval = setInterval(() => {
      frame++;
      const revealed = Math.floor((frame / totalFrames) * text.length * 1.4);
      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealed) return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");
      setDisplay(next);
      if (revealed >= text.length) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
