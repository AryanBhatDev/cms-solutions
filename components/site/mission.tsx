import { Reveal } from "./reveal";

const stats = [
  { value: "2014", label: "Year founded" },
  { value: "10+ Years", label: "Combined experience" },
  { value: "4 Pillars", label: "Core service offerings" },
  { value: "Perth, WA", label: "Head office location" },
];

export function Mission() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card/40 bg-blueprint-sm">
      {/* rotating decorative schematic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.12] lg:block"
      >
        <svg
          width="420"
          height="420"
          viewBox="0 0 200 200"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="0.6"
          style={{ animation: "cmr-spin 60s linear infinite" }}
        >
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="62" />
          <circle cx="100" cy="100" r="34" />
          <path d="M10 100h180M100 10v180" />
          <path d="M30 30l140 140M170 30L30 170" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <circle
                key={i}
                cx={100 + Math.cos(a) * 90}
                cy={100 + Math.sin(a) * 90}
                r="3"
                fill="var(--primary)"
                stroke="none"
              />
            );
          })}
        </svg>
        <style>{`@keyframes cmr-spin { to { transform: rotate(360deg); } }`}</style>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
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
