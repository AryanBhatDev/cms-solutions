"use client";

import { cn } from "@/lib/utils";
import { Building2, HeartPulse, ShoppingBag, Truck } from "lucide-react";
import { useEffect, useState } from "react";

const industries = [
  {
    icon: Building2,
    name: "Real Estate & Construction",
    line: "Property management and construction technology solutions for modern developments.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    line: "Digital health platforms and patient care systems for critical environments.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    line: "Omnichannel retail solutions and e-commerce platforms that convert.",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    line: "Supply chain optimization and fleet management for operational excellence.",
  },
];

export function Industries() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % industries.length), 4000);
    return () => clearInterval(id);
  }, []);

  const current = industries[active];
  const Icon = current.icon;

  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
          INDUSTRIES SERVED
        </span>

        <div className="flex min-h-12 items-center gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
            <Icon className="size-5" />
          </span>
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">{current.name}</p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{current.line}</p>
          </div>
        </div>

        <div className="flex items-center gap-2" role="tablist" aria-label="Industries">
          {industries.map((ind, i) => (
            <button
              key={ind.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={ind.name}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === active ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
