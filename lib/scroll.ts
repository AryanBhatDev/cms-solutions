import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

const NAV_HEIGHT = 64;

/**
 * Scrolls to a section so that it sits centered in the viewport.
 * Sections shorter than the viewport are vertically centered; taller
 * sections are aligned just below the fixed navbar.
 */
export function scrollToSection(hash: string) {
  if (typeof window === "undefined") return;
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const elTop = rect.top + window.scrollY;
  const elHeight = rect.height;

  const centerOffset = (window.innerHeight - elHeight) / 2;
  const target = elTop - Math.max(NAV_HEIGHT, centerOffset);

  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.2 });
  } else {
    window.scrollTo({ top: target, behavior: "smooth" });
  }
}
