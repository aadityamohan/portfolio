"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative">
        <Navigation />
        <Hero />
        <TechMarquee />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
