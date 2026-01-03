"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative">
        <CustomCursor />
        <Scene3D />
        <Navigation />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
