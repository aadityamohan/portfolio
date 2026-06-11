"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StatusBar from "@/components/StatusBar";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const MatrixRain = dynamic(() => import("@/components/MatrixRain"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <MatrixRain />
      <div className="crt-overlay" aria-hidden />
      <main className="relative pb-10">
        <Navigation />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <StatusBar />
    </SmoothScroll>
  );
}
