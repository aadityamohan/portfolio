"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      type: "spring",
      stiffness: 60,
      damping: 16,
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [isInView, value, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
