import Badge from "@/components/Badge";
import PlaceholderTag from "@/components/PlaceholderTag";
import Section from "@/components/Section";
import { timeline } from "@/data/experience";
import { SECTION_IDS } from "@/data/navigation";
import { isFilled } from "@/lib/placeholder";

export default function Experience() {
    return (
        <Section id={SECTION_IDS.experience} eyebrow="Parcours" title="Formation et parcours" tone="muted" >
            <ol className="relative max-w-3xl space-y-10 border-l border-border pl-8">
                {timeline.map((item) => (
                    <li key={item.id} className="relative">
                        <span
                            aria-hidden="true"
                            className="absolute -left-[2.4rem] top-1.5 size-3 rounded-full border-2 border-accent bg-background"
                        />

                        <p className="text-sm font-medium">
                            {isFilled(item.period) ? (
                                <span className="text-accent-text">{item.period}</span>
                            ) : (
                                <PlaceholderTag />
                            )}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                            {item.title}
                        </h3>
                        {item.organization ? (
                            <p className="mt-0.5 text-sm font-medium text-primary sm:text-base">
                                {item.organization}
                            </p>
                        ) : null}
                        {item.description ? (
                            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                                {item.description}
                            </p>
                        ) : null}

                        {item.technologies ? (
                            <ul
                                aria-label={`Technologies étudiées : ${item.organization ?? item.title}`}
                                className="mt-4 flex flex-wrap gap-2"
                            >
                                {item.technologies.map((technology) => (
                                    <li key={technology}>
                                        <Badge>{technology}</Badge>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </li>
                ))}
            </ol>
        </Section>
    );
}
