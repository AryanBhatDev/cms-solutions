"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { BookOpen, Heart, Shield, Users } from "lucide-react";
import { Reveal } from "./reveal";

const values = [
  {
    icon: Users,
    title: "Client Focused Solutions",
    description:
      "A client-centric focus is at the core of who we are. We believe in fostering strong relationships with our clients to understand their needs and deliver the best outcomes.",
  },
  {
    icon: Shield,
    title: "Commitment to Quality",
    description:
      "We are committed to exceeding our clients' expectations by maintaining the highest quality standards throughout delivery and beyond.",
  },
  {
    icon: Heart,
    title: "Giving Back",
    description:
      "We are proud to support and give back where we can. We have supported various charities, community groups and causes through pro-bono work and other initiatives.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We value the continued expansion of knowledge and skills within our team, keeping up to date with technologies to provide innovative solutions.",
  },
];

export function Values() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card/40">
      {/* Dotted Glow Background */}
      <DottedGlowBackground
        className="pointer-events-none"
        gap={20}
        radius={1.5}
        color="rgba(100, 100, 120, 0.5)"
        darkColor="rgba(180, 180, 200, 0.4)"
        glowColor="var(--primary)"
        darkGlowColor="var(--primary)"
        opacity={0.7}
        speedMin={0.3}
        speedMax={0.6}
        speedScale={0.6}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              03 — OUR VALUES
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our vision is to add value to everything we do
            </h2>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              We are committed to delivering above and beyond our clients' expectations.
              Our vision is supported by our core values.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-2">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative flex h-full flex-col rounded-xl border border-border/50 bg-background p-6">
                    <div className="flex size-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
