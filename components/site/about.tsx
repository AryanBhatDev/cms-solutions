import Image from "next/image";
import { Reveal } from "./reveal";
import aboutImage from "@/public/images/about.webp";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <span className="font-mono text-xs tracking-[0.3em] text-primary">06 — ABOUT US</span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Smarter businesses for our clients, better outcomes for everyone
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                At CMR Solutions, we deliver value to clients and communities — creating smarter
                businesses and driving tangible outcomes. We&apos;re not just service providers;
                we&apos;re partners invested in your success.
              </p>
              <p>
                CMR Solutions comprises a team of high-caliber strategic consultants, engineers,
                and project delivery professionals. Our head office is in Perth, Australia, and
                we&apos;ve been committed to driving business value across all industry verticals.
              </p>
              <p>
                We offer a range of services — software development, consultancy, application managed
                services, and automation & AI — enabled by experience, proven methodologies, and
                innovation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
              <Image
                src={aboutImage}
                alt="CMR Solutions team collaborating"
                fill
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
