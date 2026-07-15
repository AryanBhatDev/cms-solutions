"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type SparklesProps = {
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = ({
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor,
  particleDensity = 100,
}: SparklesProps) => {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const newParticles = Array.from({ length: particleDensity }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: (Math.random() * 2 + 1) / speed,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [particleDensity, minSize, maxSize, speed]);

  if (!mounted) return null;

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ background }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size * 4,
            height: particle.size * 4,
            backgroundColor: particleColor || "currentColor",
            boxShadow: `0 0 ${particle.size * 8}px ${particle.size * 2}px ${particleColor || "currentColor"}`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
