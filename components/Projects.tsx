import type { ReactNode } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight, LuCheck, LuImage } from "react-icons/lu";
import Badge from "@/components/Badge";
import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Card";
import PlaceholderTag from "@/components/PlaceholderTag";
import Section from "@/components/Section";
import { SECTION_IDS } from "@/data/navigation";
import { projects } from "@/data/projects";
import { isFilled } from "@/lib/placeholder";
import type { Project } from "@/types";

interface ProjectLinkProps {
  label: string;
  url: string;
  icon: ReactNode;
}

/** Lien actif si l'URL est renseignée, sinon marqueur `[À RENSEIGNER]` non cliquable. */
function ProjectLink({ label, url, icon }: ProjectLinkProps) {
  if (isFilled(url)) {
    return (
      <ButtonLink href={url} variant="secondary" size="sm" external>
        {icon}
        {label}
      </ButtonLink>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-3 py-2 text-sm text-muted">
      {icon}
      {label}
      <PlaceholderTag />
    </span>
  );
}

/**
 * Le cadre suit le ratio des captures (1344×630, soit environ 32/15) : elles
 * sont affichées en entier, sans rognage. Un aperçu manquant garde le même cadre.
 */
function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[32/15] overflow-hidden rounded-lg border border-border bg-surface-muted">
      {project.image ? (
        <Image
          src={project.image}
          alt={`Aperçu du projet ${project.name}`}
          fill
          sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 90vw"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`Emplacement de l'aperçu du projet ${project.name}`}
          className="flex h-full flex-col items-center justify-center gap-2 text-muted"
        >
          <LuImage aria-hidden="true" className="size-7" />
          <PlaceholderTag />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id={SECTION_IDS.projects}
      eyebrow="Projets"
      title="Projets réalisés"
      description="Une sélection de réalisations, avec les technologies utilisées."
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <Card className="flex h-full flex-col gap-5">
              <ProjectImage project={project} />

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                {project.highlights ? (
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm"
                      >
                        <LuCheck
                          aria-hidden="true"
                          className="size-4 shrink-0 text-accent-text"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <ul
                aria-label={`Technologies de ${project.name}`}
                className="flex flex-wrap gap-2"
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>
                    <Badge>{technology}</Badge>
                  </li>
                ))}
              </ul>

              {project.note ? (
                <p className="text-xs leading-relaxed text-muted">
                  {project.note}
                </p>
              ) : null}

              <div className="mt-auto flex flex-wrap gap-2 pt-1">
                <ProjectLink
                  label="Voir le projet"
                  url={project.projectUrl}
                  icon={<LuArrowUpRight aria-hidden="true" className="size-4" />}
                />
                <ProjectLink
                  label="GitHub"
                  url={project.githubUrl}
                  icon={<FaGithub aria-hidden="true" className="size-4" />}
                />
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
