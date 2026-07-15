"use client";

import { Button } from "@/components/ui/button";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { ScrollLink } from "./scroll-link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Animated SVG Lines */}
      <BackgroundLines className="absolute inset-0 z-[1] opacity-40" svgOptions={{ duration: 15 }}>
        <div />
      </BackgroundLines>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <motion.span 
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs tracking-wider text-muted-foreground backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Technology &amp; ICT Consulting · Perth, WA
            </motion.span>
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
                className="group h-11 px-5 text-sm"
                nativeButton={false}
                render={
                  <ScrollLink href="#contact">
                    Get a Consultation
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
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

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-primary">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="2"/>
            <motion.circle 
              cx="8" 
              cy="8" 
              r="2" 
              fill="currentColor"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
