import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";
import { ScrollLink } from "./scroll-link";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1800&q=70"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-30"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s build what&apos;s next.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Arrange a free-of-charge consultation with CMR Solutions.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={
                <ScrollLink href="#contact">
                  Get a Consultation
                  <ArrowRight />
                </ScrollLink>
              }
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
