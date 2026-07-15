import { ScrollLink } from "./scroll-link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-md border border-primary/40 bg-primary/10">
                <span className="block size-3 rounded-[2px] bg-primary" />
              </span>
              <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
                CMR Solutions PTY. LTD.
              </span>
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
                1 Brewer Street,
                <br />
                Perth, WA 6000
              </p>
              <a
                href="mailto:info@cmrsolutions.com.au"
                className="block transition-colors hover:text-foreground"
              >
                info@cmrsolutions.com.au
              </a>
              <a
                href="tel:+61861022880"
                className="block transition-colors hover:text-foreground"
              >
                +61 (08) 6102 2880
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
