"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "アイウエオカキクケコサシスセソ01<>/{}[]$#&*+=?";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.ceil(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -50);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let last = 0;

    const draw = (time: number) => {
      raf = requestAnimationFrame(draw);
      if (time - last < 55) return;
      last = time;

      const style = getComputedStyle(document.documentElement);
      const bg = style.getPropertyValue("--term-bg").trim().split(" ").join(",");
      const green = style.getPropertyValue("--term-green").trim().split(" ").join(",");

      ctx.fillStyle = `rgba(${bg}, 0.12)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const y = drops[i] * fontSize;
        // bright head, dim trail handled by fade fill
        ctx.fillStyle = Math.random() > 0.97 ? `rgba(${green}, 0.9)` : `rgba(${green}, 0.45)`;
        ctx.fillText(char, i * fontSize, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 opacity-[0.16] [html.light_&]:opacity-[0.07] pointer-events-none"
    />
  );
}
