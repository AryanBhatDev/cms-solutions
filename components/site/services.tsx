import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Layers,
  LineChart,
  Megaphone,
  Server,
} from "lucide-react";
import { Reveal } from "./reveal";
import { ScrollLink } from "./scroll-link";

const services = [
  {
    icon: Server,
    title: "Managed Services",
    desc: "Increase ICT operational efficiency whilst reducing costs — we handle the infrastructure so you can focus on the business.",
  },
  {
    icon: LineChart,
    title: "Strategy Consulting",
    desc: "Insightful technology guidance that drives measurable innovation, productivity, and competitive advantage.",
  },
  {
    icon: Layers,
    title: "Professional Services",
    desc: "Implementation and integration expertise to connect your systems, automate workflows, and support your people.",
  },
  {
    icon: Megaphone,
    title: "Design & Marketing",
    desc: "Digital-first design and marketing services that amplify your brand and convert your audience into customers.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">01 — SERVICES</span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Four pillars. One partner. End-to-end technology services.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              From day-to-day IT operations to long-term digital strategy, CMR Solutions provides
              end-to-end services that keep your business efficient, innovative, and competitive.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isDark = i % 2 === 0;
            return (
              <Reveal
                key={s.title}
                delay={(i % 2) * 80}
                className={cn(
                  "group relative flex flex-col p-7 transition-colors",
                  isDark ? "bg-background" : "bg-card",
                  "hover:bg-secondary",
                )}
              >
                <span className="grid size-11 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-4 font-mono text-xs text-muted-foreground/60">0{i + 1}</span>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120} className="mt-8 flex justify-start">
          <Button
            size="lg"
            className="h-11 px-5 text-sm"
            nativeButton={false}
            render={
              <ScrollLink href="#contact">
                Discuss your requirements
                <ArrowRight />
              </ScrollLink>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
