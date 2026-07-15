"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        !mounted ? "Toggle theme" : isDark ? "Switch to light theme" : "Switch to dark theme"
      }
      className={cn(
        "relative grid size-9 place-items-center overflow-hidden rounded-md bg-transparent text-foreground transition-colors hover:bg-secondary",
        className,
      )}
    >
      <Sun
        className={cn(
          "absolute size-5 text-primary transition-all duration-500 ease-out",
          mounted && isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
      <Moon
        className={cn(
          "absolute size-5 transition-all duration-500 ease-out",
          !mounted || isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
