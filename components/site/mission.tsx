"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const DottedGlowBackground = dynamic(
  () => import("@/components/ui/dotted-glow-background").then((mod) => mod.DottedGlowBackground),
  { ssr: false }
);

const stats = [
  { value: "2014", label: "Year founded" },
  { value: "10+ Years", label: "Combined experience" },
  { value: "4 Pillars", label: "Core service offerings" },
  { value: "Perth, WA", label: "Head office location" },
];

function LazyBackground() {
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
    <div ref={ref} className="absolute inset-0">
      {shouldLoad && (
        <DottedGlowBackground
          className="pointer-events-none"
          gap={24}
          radius={1}
          color="rgba(100, 100, 120, 0.3)"
          darkColor="rgba(180, 180, 200, 0.2)"
          glowColor="var(--primary)"
          darkGlowColor="var(--primary)"
          opacity={0.4}
          speedMin={0.2}
          speedMax={0.5}
          speedScale={0.5}
        />
      )}
    </div>
  );
}

export function Mission() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card/40">
      <LazyBackground />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              03 — OUR MISSION
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Partners in innovation. Not just providers.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              We build smarter businesses for our clients — with a team of strategic consultants,
              engineers, and delivery professionals committed to outcomes that matter.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {stats.map((s, i) => (
              <Reveal
                key={s.value}
                delay={i * 80}
                className="flex flex-col justify-between bg-background p-6 even:bg-card"
              >
                <span className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {s.value}
                </span>
                <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
