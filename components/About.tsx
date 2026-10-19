import Section from "@/components/Section";
import { about } from "@/data/about";
import { SECTION_IDS } from "@/data/navigation";

export default function About() {
    return (
        <Section id={SECTION_IDS.about} eyebrow="À propos" title={about.title}>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                    {about.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>

                <ol aria-label="Parcours : géographie, numérique, développement web" className="relative space-y-8 border-l border-border pl-8" >
                    {about.path.map((step, index) => (
                        <li key={step.label} className="relative">
                            <span
                                aria-hidden="true"
                                className="absolute -left-[3.15rem] top-0 flex size-9 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-primary shadow-soft"
                            >
                                {index + 1}
                            </span>
                            <h3 className="text-lg font-semibold tracking-tight">
                                {step.label}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
                                {step.detail}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </Section>
    );
}
