"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";

export function TracingBeamWrapper({ children }: { children: React.ReactNode }) {
  return (
    <TracingBeam className="relative">
      {children}
    </TracingBeam>
  );
}
