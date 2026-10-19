import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Section from "@/components/Section";
import TechIcon from "@/components/TechIcon";
import { SECTION_IDS } from "@/data/navigation";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const featured = skillCategories.filter((category) => category.featured);
  const regular = skillCategories.filter((category) => !category.featured);

  return (
    <Section
      id={SECTION_IDS.skills}
      eyebrow="Compétences"
      title="Compétences techniques"
      description="Les langages, outils et domaines sur lesquels je travaille, classés par catégorie."
    >
      <div className="space-y-6">
        {featured.map((category) => (
          <Card
            key={category.id}
            className="flex flex-col gap-5 border-accent/50 sm:flex-row sm:items-center"
          >
            <span
              aria-hidden="true"
              className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-primary"
            >
              <TechIcon id="dolibarr" className="size-7" />
            </span>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent-text">
                {category.label}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">
                {category.skills.join(", ")}
              </h3>
              {category.description ? (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {category.description}
                </p>
              ) : null}
            </div>
          </Card>
        ))}

        <div className="grid gap-6 md:grid-cols-2">
          {regular.map((category) => (
            <Card key={category.id}>
              <h3 className="text-lg font-semibold tracking-tight">
                {category.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
