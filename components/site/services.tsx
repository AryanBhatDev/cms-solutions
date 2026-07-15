"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { ScrollLink } from "./scroll-link";

const services = [
  {
    title: "Managed Services",
    desc: "Increase ICT operational efficiency whilst reducing costs — we handle the infrastructure so you can focus on the business.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    title: "Strategy Consulting",
    desc: "Insightful technology guidance that drives measurable innovation, productivity, and competitive advantage.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    title: "Professional Services",
    desc: "Implementation and integration expertise to connect your systems, automate workflows, and support your people.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
  {
    title: "Design & Marketing",
    desc: "Digital-first design and marketing services that amplify your brand and convert your audience into customers.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
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
              <motion.div
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card",
                  "transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                )}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={75}
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
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-foreground">
                    <span>Learn more</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
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
