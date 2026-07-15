"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const OfficeMap = dynamic(() => import("./office-map"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full min-h-72 w-full place-items-center bg-muted">
      <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">LOADING MAP…</span>
    </div>
  ),
});

function LazyMap() {
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
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-full min-h-72 w-full">
      {shouldLoad ? (
        <OfficeMap />
      ) : (
        <div className="grid h-full min-h-72 w-full place-items-center bg-muted">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">MAP</span>
        </div>
      )}
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">07 — CONTACT US</span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Reach out with your project or consulting need and arrange a free-of-charge
              consultation with our team.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              <div className="flex flex-col gap-3 bg-background p-7">
                <span className="grid size-11 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <p className="font-heading text-sm font-semibold text-foreground">Head Office</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  1 Brewer Street,
                  <br />
                  Perth, WA 6000
                </p>
              </div>

              <div className="flex flex-col gap-3 bg-card p-7">
                <span className="grid size-11 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <p className="font-heading text-sm font-semibold text-foreground">Email</p>
                <a
                  href="mailto:info@cmrsolutions.com.au"
                  className="inline-flex items-center gap-1 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                >
                  info@cmrsolutions.com.au
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>

              <div className="flex flex-col gap-3 bg-card p-7">
                <span className="grid size-11 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <p className="font-heading text-sm font-semibold text-foreground">Phone</p>
                <a
                  href="tel:+61861022880"
                  className="inline-flex items-center gap-1 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                >
                  +61 (08) 6102 2880
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>

              <div className="flex flex-col gap-3 bg-background p-7">
                <p className="font-heading text-sm font-semibold text-foreground">Business Hours</p>
                <div className="text-sm leading-relaxed text-muted-foreground">
                  <p>Monday – Friday: 8AM – 6PM</p>
                  <p>Saturday: 9AM – 1PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full min-h-72 overflow-hidden rounded-xl border border-border">
              <LazyMap />
              <div className="pointer-events-none absolute left-4 top-4 z-[400] inline-flex items-center gap-2 rounded-full border border-border bg-card/85 px-3 py-1 font-mono text-xs tracking-wider text-muted-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-primary" />
                Perth, WA
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
