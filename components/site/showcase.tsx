"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

import showcase1 from "@/public/images/showcase-1.webp";
import showcase2 from "@/public/images/showcase-2.webp";
import showcase3 from "@/public/images/showcase-3.webp";
import showcase4 from "@/public/images/showcase-4.webp";

const Boxes = dynamic(
  () => import("@/components/ui/background-boxes").then((mod) => mod.Boxes),
  { ssr: false }
);

const shots: {
  src: StaticImageData;
  alt: string;
  label: string;
  span: string;
  sizes: string;
}[] = [
  {
    src: showcase1,
    alt: "Modern office workspace with technology infrastructure",
    label: "Enterprise solutions",
    span: "sm:col-span-2 sm:row-span-2",
    sizes: "(max-width: 640px) 100vw, 50vw",
  },
  {
    src: showcase2,
    alt: "Team collaborating on digital strategy",
    label: "Strategic consulting",
    span: "",
    sizes: "(max-width: 640px) 50vw, 25vw",
  },
  {
    src: showcase3,
    alt: "Data analytics dashboard on screen",
    label: "Data-driven insights",
    span: "",
    sizes: "(max-width: 640px) 50vw, 25vw",
  },
  {
    src: showcase4,
    alt: "Technical team working on system integration",
    label: "System integration",
    span: "sm:col-span-2",
    sizes: "(max-width: 640px) 100vw, 50vw",
  },
];

function LazyBoxes() {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 z-0 h-full w-full overflow-hidden",
        "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      )}
    >
      {shouldLoad && <Boxes />}
    </div>
  );
}

export function Showcase() {
  return (
    <section className="relative min-h-[600px] overflow-hidden border-b border-border bg-background">
      <LazyBoxes />

      {/* Content */}
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
              From enterprise infrastructure to digital transformation, our work is built for the
              demands of modern business environments.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 lg:gap-4">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.label}
              delay={(i % 4) * 90}
              className={`pointer-events-auto group relative overflow-hidden rounded-lg border border-border bg-card ${shot.span}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                loading="lazy"
                placeholder="blur"
                sizes={shot.sizes}
                className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="font-mono text-xs tracking-wider text-foreground">
                  {shot.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
