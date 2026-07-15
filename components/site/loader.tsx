"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [mounted, setMounted] = useState(false);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setDone(true), 800);
    const t2 = setTimeout(() => setHidden(true), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? "none" : "auto" }}
    >
      <div className="flex flex-col items-center gap-6">
        <svg width="180" height="40" viewBox="0 0 180 40" fill="none" className="overflow-visible">
          <line x1="8" y1="20" x2="172" y2="20" stroke="var(--border)" strokeWidth="2" />
          <line
            x1="8"
            y1="20"
            x2="172"
            y2="20"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="164"
            strokeDashoffset="164"
            className="animate-[cmr-signal_0.8s_ease-out_forwards]"
          />
          {[8, 90, 172].map((cx, i) => (
            <circle
              key={cx}
              cx={cx}
              cy="20"
              r="4"
              fill="var(--background)"
              stroke="var(--primary)"
              strokeWidth="2"
              className="animate-[cmr-node_0.3s_ease-out_both]"
              style={{ animationDelay: `${0.15 + i * 0.25}s` }}
            />
          ))}
        </svg>
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
          CMR SOLUTIONS
        </span>
      </div>
      <style>{`
        @keyframes cmr-signal { to { stroke-dashoffset: 0; } }
        @keyframes cmr-node { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}
