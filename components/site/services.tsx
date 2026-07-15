import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Reveal } from "./reveal";
import { ScrollLink } from "./scroll-link";

import serviceManagedImg from "@/public/images/service-managed.webp";
import serviceStrategyImg from "@/public/images/service-strategy.webp";
import serviceProfessionalImg from "@/public/images/service-professional.webp";
import serviceDesignImg from "@/public/images/service-design.webp";

const services: { title: string; desc: string; image: StaticImageData }[] = [
  {
    title: "Managed Services",
    desc: "Increase ICT operational efficiency whilst reducing costs — we handle the infrastructure so you can focus on the business.",
    image: serviceManagedImg,
  },
  {
    title: "Strategy Consulting",
    desc: "Insightful technology guidance that drives measurable innovation, productivity, and competitive advantage.",
    image: serviceStrategyImg,
  },
  {
    title: "Professional Services",
    desc: "Implementation and integration expertise to connect your systems, automate workflows, and support your people.",
    image: serviceProfessionalImg,
  },
  {
    title: "Design & Marketing",
    desc: "Digital-first design and marketing services that amplify your brand and convert your audience into customers.",
    image: serviceDesignImg,
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
        
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 100}
            >
              <div
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card",
                  "transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                )}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-mono text-xs text-primary/80">
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={400} className="mt-10 flex justify-start">
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
