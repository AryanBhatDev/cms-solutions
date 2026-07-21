"use client";

import Image from "next/image";
import { Boxes } from "@/components/ui/background-boxes";
import { Reveal } from "./reveal";

const shots = [
  {
    src: "/images/service-software.webp",
    alt: "Custom software development",
    label: "Software Development",
  },
  {
    src: "/images/service-consultancy.webp",
    alt: "Strategic consulting session",
    label: "Consultancy",
  },
  {
    src: "/images/service-managed.webp",
    alt: "Application management dashboard",
    label: "App Managed Services",
  },
  {
    src: "/images/service-automation.webp",
    alt: "AI and automation",
    label: "Automation & AI",
  },
  {
    src: "/images/service-infrastructure.webp",
    alt: "IT infrastructure",
    label: "Managed Services",
  },
  {
    src: "/images/service-integration.webp",
    alt: "System integration",
    label: "Professional Services",
  },
  {
    src: "/images/service-migration.webp",
    alt: "Data migration",
    label: "Data Migration",
  },
  {
    src: "/images/service-design.webp",
    alt: "Design and marketing",
    label: "Design & Marketing",
  },
];

function GridItem({ shot, delay, className }: { shot: typeof shots[0]; delay: number; className?: string }) {
  return (
    <Reveal
      delay={delay}
      className={`pointer-events-auto group relative overflow-hidden rounded-xl border border-border bg-card ${className || ""}`}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="font-mono text-xs tracking-wider text-foreground">
          {shot.label}
        </span>
      </div>
    </Reveal>
  );
}

export function Showcase() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background">
      {/* Background Boxes - Full coverage */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-background">
        <Boxes />
        {/* Radial gradient for fading effect */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content - pointer-events-none so background is interactive */}
      <div className="pointer-events-none relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              02 — OUR WORK
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technology solutions built for real-world impact
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              From enterprise software to intelligent automation, our work spans the full spectrum
              of modern business technology needs.
            </p>
          </Reveal>
        </div>
        
        {/* Mobile Grid - 2 columns */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
          {shots.map((shot, i) => (
            <GridItem key={shot.label} shot={shot} delay={i * 50} className="h-[160px]" />
          ))}
        </div>

        {/* Desktop Bento Grid Layout - exact layout from image */}
        <div className="mt-12 hidden gap-4 md:grid md:grid-cols-4 md:grid-rows-[180px_180px_140px]">
          {/* Row 1: 4 equal boxes */}
          <GridItem shot={shots[0]} delay={0} />
          <GridItem shot={shots[1]} delay={60} />
          <GridItem shot={shots[2]} delay={120} />
          <GridItem shot={shots[3]} delay={180} />
          
          {/* Row 2-3 Left: Tall box spanning 2 rows */}
          <GridItem shot={shots[4]} delay={240} className="row-span-2" />
          
          {/* Row 2 Middle: Wide box spanning 2 cols */}
          <GridItem shot={shots[5]} delay={300} className="col-span-2" />
          
          {/* Row 2-3 Right: Tall box spanning 2 rows */}
          <GridItem shot={shots[7]} delay={360} className="row-span-2" />
          
          {/* Row 3 Middle: 2 small boxes */}
          <GridItem shot={shots[6]} delay={420} className="col-span-2" />
        </div>
      </div>
    </section>
  );
}
