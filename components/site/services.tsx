"use client";

import { Button } from "@/components/ui/button";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { 
  ArrowRight, 
  Bot, 
  Cloud, 
  Code2, 
  Lightbulb, 
  Server, 
  Palette, 
  Wrench,
  Database
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "./reveal";
import { ScrollLink } from "./scroll-link";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    shortDesc: "Custom software solutions",
    fullDesc: "We blend innovation, expertise, and passion to create custom software, web and mobile applications that redefine the future.",
    colors: [[59, 130, 246], [99, 102, 241]],
    bgColor: "bg-blue-900",
  },
  {
    icon: Lightbulb,
    title: "Consultancy",
    shortDesc: "Strategic technology guidance",
    fullDesc: "Comprehensive consulting services designed to elevate your business through strategic innovation and cutting-edge technology.",
    colors: [[251, 146, 60], [245, 158, 11]],
    bgColor: "bg-orange-900",
  },
  {
    icon: Cloud,
    title: "Application Managed Services",
    shortDesc: "Proactive app management",
    fullDesc: "Our dedicated team manages and supports your applications with 24/7 support, performance optimisation, and security compliance.",
    colors: [[34, 197, 94], [16, 185, 129]],
    bgColor: "bg-emerald-900",
  },
  {
    icon: Bot,
    title: "Automation & AI",
    shortDesc: "Intelligent automation",
    fullDesc: "Transform your operations with workflow automation, AI-driven insights, dynamic forms, and robotic process automation.",
    colors: [[147, 51, 234], [236, 72, 153]],
    bgColor: "bg-purple-900",
  },
  {
    icon: Server,
    title: "Managed Services",
    shortDesc: "24/7 IT infrastructure",
    fullDesc: "We handle your entire infrastructure — servers, networks, security, and support — so you can focus on growing your business.",
    colors: [[20, 184, 166], [6, 182, 212]],
    bgColor: "bg-teal-900",
  },
  {
    icon: Wrench,
    title: "Professional Services",
    shortDesc: "Implementation & integration",
    fullDesc: "We empower organisations to unify systems, streamline workflows, and enhance operational efficiency through seamless integration.",
    colors: [[239, 68, 68], [244, 63, 94]],
    bgColor: "bg-red-900",
  },
  {
    icon: Database,
    title: "Data Migration",
    shortDesc: "Secure data transitions",
    fullDesc: "Our expertise ensures smooth, secure migration processes — SharePoint, SQL Server, Exchange, Dynamics 365, and Power Platform.",
    colors: [[168, 85, 247], [192, 132, 252]],
    bgColor: "bg-violet-900",
  },
  {
    icon: Palette,
    title: "Design & Marketing",
    shortDesc: "Brand & digital presence",
    fullDesc: "Digital-first design and marketing that amplifies your brand and converts your audience into loyal customers.",
    colors: [[236, 72, 153], [249, 115, 22]],
    bgColor: "bg-pink-900",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <Reveal delay={index * 100}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative h-[20rem] overflow-hidden rounded-2xl border border-border bg-card p-2"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-background p-5">
          {/* Canvas Reveal Effect */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-0 overflow-hidden rounded-xl"
              >
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName={cn(service.bgColor, "rounded-xl")}
                  colors={service.colors}
                  dotSize={2}
                />
                {/* Dark overlay for text readability in both modes */}
                <div className="absolute inset-0 rounded-xl bg-black/60" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content */}
          <div className="relative z-10 flex flex-1 flex-col">
            {/* Icon */}
            <div className={cn(
              "flex size-11 items-center justify-center rounded-lg border transition-all duration-300",
              hovered 
                ? "border-white/30 bg-white/10 text-white" 
                : "border-primary/30 bg-primary/10 text-primary"
            )}>
              <Icon className="size-5" />
            </div>

            {/* Number */}
            <span className={cn(
              "mt-3 font-mono text-xs transition-colors duration-300",
              hovered ? "text-white/60" : "text-muted-foreground"
            )}>
              0{index + 1}
            </span>

            {/* Title */}
            <h3 className={cn(
              "mt-1.5 font-heading text-lg font-semibold transition-colors duration-300",
              hovered ? "text-white" : "text-foreground"
            )}>
              {service.title}
            </h3>

            {/* Description - changes on hover */}
            <p className={cn(
              "mt-2 flex-1 text-sm leading-relaxed transition-colors duration-300",
              hovered ? "text-white/90" : "text-muted-foreground"
            )}>
              {hovered ? service.fullDesc : service.shortDesc}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">01 — WHAT WE DO</span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Empowering you with tailored digital solutions and expert services
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              From custom software development to intelligent automation, CMR Solutions delivers
              end-to-end technology services that transform your business and drive growth.
            </p>
          </Reveal>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
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
