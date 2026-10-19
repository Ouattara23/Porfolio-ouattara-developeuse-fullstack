import type { ReactNode } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** `muted` alterne un fond beige pour rythmer la page. */
  tone?: "default" | "muted";
  children: ReactNode;
}

/** Gabarit commun des sections : repère, titre accessible et espacement. */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  tone = "default",
  children,
}: SectionProps) {
  const headingId = `${id}-titre`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-16 sm:py-24 ${
        tone === "muted" ? "border-y border-border bg-surface-muted/60" : ""
      }`}
    >
      <Container>
        <Reveal><header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-text">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </header></Reveal>
        <Reveal className="mt-12">{children}</Reveal>
      </Container>
    </section>
  );
}
