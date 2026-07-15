"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Building2, Factory, HeartPulse, Landmark, ShoppingBag, Truck } from "lucide-react";
import { Reveal } from "./reveal";

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    desc: "Property management and construction technology solutions.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "Digital health platforms and patient care systems.",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    desc: "Omnichannel retail and e-commerce platforms.",
  },
  {
    icon: Truck,
    name: "Logistics",
    desc: "Supply chain optimization and fleet management.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Industrial IoT and production automation.",
  },
  {
    icon: Landmark,
    name: "Finance",
    desc: "Secure fintech and regulatory compliance systems.",
  },
];

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const Icon = industry.icon;
  
  return (
    <Reveal delay={index * 60}>
      <div className="relative h-full rounded-xl border border-border p-1.5">
        <GlowingEffect
          spread={30}
          glow={true}
          disabled={false}
          proximity={50}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col items-center gap-3 rounded-lg bg-card p-5 text-center transition-colors hover:bg-card/80">
          <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
            <Icon className="size-5" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              {industry.name}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {industry.desc}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Industries() {
  return (
    <section className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="mt-3 text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Expertise across sectors
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
