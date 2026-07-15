"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: { duration?: number };
}) => {
  return (
    <div className={cn("relative w-full", className)}>
      <SVGBackgroundLines svgOptions={svgOptions} />
      {children}
    </div>
  );
};

const SVGBackgroundLines = ({
  svgOptions,
}: {
  svgOptions?: { duration?: number };
}) => {
  const duration = svgOptions?.duration ?? 10;

  const paths = useMemo(() => [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
    "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
    "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
    "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
    "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
    "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
    "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
    "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
    "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
  ], []);

  return (
    <div className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      <svg
        className="absolute h-full w-full text-primary"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path, index) => (
          <motion.path
            key={`path-${index}`}
            d={path}
            stroke="currentColor"
            strokeOpacity={0.15}
            strokeWidth={0.5 + (index % 3) * 0.3}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: duration + index * 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
};
