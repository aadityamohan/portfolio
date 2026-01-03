"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", setCanvasSize);

    const getIsLightMode = () => document.documentElement.classList.contains("light");

    const animate = () => {
      const isLight = getIsLightMode();
      ctx.fillStyle = isLight ? "rgba(250, 250, 250, 0.05)" : "rgba(5, 5, 5, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          particle.x -= dx * 0.01;
          particle.y -= dy * 0.01;
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );

        const isLight = getIsLightMode();
        const particleColor = isLight ? "rgba(139, 92, 246, 0.7)" : "rgba(212, 175, 55, 0.8)";
        gradient.addColorStop(0, particleColor);
        gradient.addColorStop(1, isLight ? "rgba(139, 92, 246, 0)" : "rgba(212, 175, 55, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.5;
            const lineColor = isLight ? `rgba(139, 92, 246, ${opacity})` : `rgba(212, 175, 55, ${opacity})`;
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 transition-colors duration-300" style={{
      backgroundColor: 'var(--bg-color, #050505)'
    }}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent pointer-events-none transition-colors duration-300" style={{
        backgroundImage: 'linear-gradient(to bottom, transparent, var(--bg-color-fade, rgba(5, 5, 5, 0.3)), var(--bg-color, #050505))'
      }} />
    </div>
  );
}
