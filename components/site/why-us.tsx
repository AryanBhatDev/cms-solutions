import { BadgeCheck, Globe2, Handshake, Target } from "lucide-react";
import { Reveal } from "./reveal";

const principles = [
  {
    icon: Target,
    title: "Tailor-made Solutions",
    desc: "Every solution designed around your specific objectives and growth trajectory.",
  },
  {
    icon: Globe2,
    title: "Perth-Based, Global Mindset",
    desc: "Local expertise with access to global talent and innovation.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Excellence",
    desc: "A unique quality model benchmarked to international standards.",
  },
  {
    icon: Handshake,
    title: "Lasting Relationships",
    desc: "We measure success by your results, built on trust and mutual respect.",
  },
];

export function WhyUs() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.3em] text-primary">04 — WHY US</span>
          <h2 className="mt-4 max-w-2xl text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What clients rely on us for
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="flex flex-col bg-background p-7 transition-colors hover:bg-card"
              >
                <span className="grid size-11 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
