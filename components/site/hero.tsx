"use client";

import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";
import { ScrollLink } from "./scroll-link";
import heroImage from "@/public/images/hero.webp";

const words = [
  { text: "Partners" },
  { text: "in" },
  { text: "innovation." },
  { text: "Not" },
  { text: "just" },
  { text: "providers.", className: "text-primary" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center overflow-hidden border-b border-border pt-16 sm:min-h-[700px] lg:min-h-[800px] lg:max-h-[900px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              CMR Solutions
            </h1>
            {/* Sparkles under title - theme aware colors */}
            <div className="relative h-8 w-full max-w-lg">
              <SparklesCore
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={60}
                className="h-full w-full"
                particleColor="hsl(var(--primary))"
                speed={0.4}
              />
            </div>
          </Reveal>
          
          <Reveal delay={160}>
            {/* Typewriter Effect - smaller font */}
            <TypewriterEffectSmooth
              words={words}
              className="mt-2 justify-start text-left text-base sm:text-lg md:text-xl"
              cursorClassName="bg-primary h-4 sm:h-5 md:h-6"
            />
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              Agile, scalable technology solutions tailored to your business — from managed services
              to strategic consulting. We embed with your team to deliver outcomes that last.
            </p>
          </Reveal>
          
          <Reveal delay={240}>
            <div className="mt-8">
              <Button
                size="lg"
                className="h-11 px-5 text-sm"
                nativeButton={false}
                render={
                  <ScrollLink href="#contact">
                    Get a Consultation
                    <ArrowRight />
                  </ScrollLink>
                }
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
