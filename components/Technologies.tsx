import Card from "@/components/Card";
import Section from "@/components/Section";
import TechIcon from "@/components/TechIcon";
import { SECTION_IDS } from "@/data/navigation";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <Section
      id={SECTION_IDS.technologies}
      eyebrow="Technologies"
      title="Technologies utilisées"
      tone="muted"
    >
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {technologies.map((technology) => (
          <li key={technology.id}>
            <Card className="flex h-full flex-col items-center gap-3 p-5 text-center">
              <TechIcon id={technology.id} className="size-8 text-primary" />
              <span className="text-sm font-medium">{technology.name}</span>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
