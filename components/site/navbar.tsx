"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ScrollLink } from "./scroll-link";
import { ThemeToggle } from "./theme-toggle";
import logoLight from "@/public/images/logo.png";
import logoDark from "@/public/images/dark-mode-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(href);
    window.history.replaceState(null, "", href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <ScrollLink
          href="#home"
          onClick={(e) => handleNav(e, "#home")}
          className="flex items-center gap-2"
          aria-label="CMR Solutions home"
        >
          <div className="relative h-12 w-[240px]">
            <Image
              src={logoLight}
              alt="CMR Solutions"
              fill
              sizes="240px"
              className={cn(
                "object-contain object-left",
                mounted && resolvedTheme === "light" ? "opacity-100" : "opacity-0"
              )}
              priority
              fetchPriority="high"
              placeholder="blur"
            />
            <Image
              src={logoDark}
              alt="CMR Solutions"
              fill
              sizes="240px"
              className={cn(
                "object-contain object-left",
                !mounted || resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
              )}
              priority
              fetchPriority="high"
              placeholder="blur"
            />
          </div>
        </ScrollLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <ScrollLink
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="lg"
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={
              <ScrollLink href="#contact" onClick={(e) => handleNav(e, "#contact")}>
                Get in Touch
              </ScrollLink>
            }
          />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-9 place-items-center rounded-md border border-border text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <ScrollLink
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}

            <li className="pt-2 pb-1">
              <Button
                className="w-full"
                size="lg"
                nativeButton={false}
                render={
                  <ScrollLink href="#contact" onClick={(e) => handleNav(e, "#contact")}>
                    Get in Touch
                  </ScrollLink>
                }
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
