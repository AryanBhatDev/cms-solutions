import { Reveal } from "./reveal";

export function Team() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">05 — OUR TEAM</span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Experienced consultants and engineers you can trust
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              At CMR Solutions, we&apos;re equipped with extensive expertise in cutting-edge
              technologies and industry-specific knowledge. Our agile approach and deep
              understanding of the digital landscape allow us to develop robust, scalable, and
              efficient solutions — keeping you ahead in a fast-evolving market.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Our commitment goes beyond providing technology solutions. By working closely with
              our clients at every step — from initial consultation to final deployment — we
              ensure every solution aligns with your unique objectives.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
