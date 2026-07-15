"use client";

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";

const stats = [
  { value: "2014", label: "Year founded" },
  { value: "10+ Years", label: "Combined experience" },
  { value: "4 Pillars", label: "Core service offerings" },
  { value: "Perth, WA", label: "Head office location" },
];

export function Mission() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card/40">
      {/* Dotted Glow Background */}
      <DottedGlowBackground
        className="pointer-events-none"
        gap={20}
        radius={1.5}
        color="rgba(100, 100, 120, 0.4)"
        darkColor="rgba(180, 180, 200, 0.3)"
        glowColor="var(--primary)"
        darkGlowColor="var(--primary)"
        opacity={0.5}
        speedMin={0.3}
        speedMax={0.8}
        speedScale={0.8}
      />

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
                <motion.span 
                  className="font-heading text-2xl font-bold text-primary sm:text-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {s.value}
                </motion.span>
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
