"use client";

import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
      className="relative flex min-h-svh items-center overflow-hidden border-b border-border pt-16"
    >
      {/* Full background image like rksppr */}
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
          quality={85}
        />
        {/* Light mode: lighter gradients to show more image */}
        {/* Dark mode: slightly stronger gradients for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-background from-20% via-background/60 to-transparent dark:from-background dark:from-25% dark:via-background/70 dark:to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent dark:from-background" />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
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
          
          {/* Typewriter Effect - smaller font */}
          <TypewriterEffectSmooth
            words={words}
            className="mt-2 justify-start text-left text-base sm:text-lg md:text-xl"
            cursorClassName="bg-primary h-4 sm:h-5 md:h-6"
          />
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Agile, scalable technology solutions tailored to your business — from software development
            to strategic consulting. We embed with your team to deliver outcomes that last.
          </p>
          
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
        </div>
      </div>
    </section>
  );
}
