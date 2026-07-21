"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollLink } from "./scroll-link";
import logoLight from "@/public/images/logo.png";
import logoDark from "@/public/images/dark-mode-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="relative h-10 w-[180px]">
              <Image
                src={logoLight}
                alt="CMR Solutions"
                fill
                sizes="180px"
                className={cn(
                  "object-contain object-left",
                  mounted && resolvedTheme === "light" ? "opacity-100" : "opacity-0"
                )}
              />
              <Image
                src={logoDark}
                alt="CMR Solutions"
                fill
                sizes="180px"
                className={cn(
                  "object-contain object-left",
                  !mounted || resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
                )}
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Australian technology &amp; ICT consulting — partners in innovation, delivering
              outcomes that matter since 2014.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground">NAVIGATE</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <ScrollLink
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground">CONTACT</h3>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-muted-foreground">
              <p>
                45 Ventnor Avenue,
                <br />
                West Perth, WA 6005
              </p>
              <a
                href="mailto:info@cmrsolutions.com.au"
                className="block transition-colors hover:text-foreground"
              >
                info@cmrsolutions.com.au
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CMRKASPPD SYSTEMS PTY LTD trading as CMR Solutions AU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
