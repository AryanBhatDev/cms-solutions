import Image from "next/image";
import { Reveal } from "./reveal";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Modern office workspace with technology infrastructure",
    label: "Enterprise solutions",
    span: "sm:col-span-2 sm:row-span-2",
    sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 600px",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    alt: "Team collaborating on digital strategy",
    label: "Strategic consulting",
    span: "",
    sizes: "(max-width: 640px) 50vw, 25vw",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    alt: "Data analytics dashboard on screen",
    label: "Data-driven insights",
    span: "",
    sizes: "(max-width: 640px) 50vw, 25vw",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    alt: "Technical team working on system integration",
    label: "System integration",
    span: "sm:col-span-2",
    sizes: "(max-width: 640px) 100vw, 50vw",
  },
];

export function Showcase() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-blueprint-sm">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              02 — OUR WORK
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technology solutions built for real-world impact
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              From enterprise infrastructure to digital transformation, our work is built for the
              demands of modern business environments.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 lg:gap-4">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.src}
              delay={(i % 4) * 90}
              className={`group relative overflow-hidden rounded-lg border border-border ${shot.span}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                loading="lazy"
                sizes={shot.sizes}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="font-mono text-xs tracking-wider text-foreground">
                  {shot.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
