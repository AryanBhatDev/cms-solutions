import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";
import { ScrollLink } from "./scroll-link";
import heroImage from "@/public/images/hero.webp";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* Background Image - priority loaded with blur placeholder */}
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

      {/* Subtle grid pattern - CSS only */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Technology &amp; ICT Consulting · Perth, WA
            </span>
          </Reveal>
          
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              CMR Solutions{" "}
              <span className="text-muted-foreground">PTY. LTD.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={160}>
            <p className="mt-5 text-lg font-medium text-foreground sm:text-xl">
              Partners in innovation. Not just providers.
            </p>
            <p className="mt-2 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              Agile, scalable technology solutions tailored to your business — from managed services
              to strategic consulting. We embed with your team to deliver outcomes that last.
            </p>
          </Reveal>
          
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
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
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground">
                <MapPin className="size-3.5 text-primary" />
                10+ Years Experience · Perth-Based, Global Mindset
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
