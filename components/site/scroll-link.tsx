"use client";

import { scrollToSection } from "@/lib/scroll";
import { forwardRef } from "react";

type ScrollLinkProps = React.ComponentPropsWithoutRef<"a"> & { href: string };

/**
 * Anchor that scrolls to an in-page section so it sits centered in the
 * viewport — the exact behavior used by the navbar links.
 */
export const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(function ScrollLink(
  { href, onClick, children, ...props },
  ref,
) {
  return (
    <a
      ref={ref}
      href={href}
      onClick={(e) => {
        if (href.startsWith("#")) {
          e.preventDefault();
          scrollToSection(href);
          window.history.replaceState(null, "", href);
        }
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </a>
  );
});
