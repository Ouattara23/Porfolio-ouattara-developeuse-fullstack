import type { IconType } from "react-icons";
import {
  LuBoxes,
  LuCode,
  LuLayoutTemplate,
  LuPencilRuler,
  LuWrench,
} from "react-icons/lu";
import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { SECTION_IDS } from "@/data/navigation";
import { services } from "@/data/services";
import type { ServiceId } from "@/types";

const icons: Record<ServiceId, IconType> = {
  "web-development": LuCode,
  "showcase-sites": LuLayoutTemplate,
  "dolibarr-integration": LuBoxes,
  "frontend-integration": LuPencilRuler,
  maintenance: LuWrench,
};

export default function Services() {
  return (
    <Section
      id={SECTION_IDS.services}
      eyebrow="Services"
      title="Ce que je peux vous aider à réaliser"
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.id];
          return (
            <li key={service.id}>
              <Card className="h-full">
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center rounded-lg bg-accent/15 text-primary"
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {service.description}
                </p>
              </Card>
            </li>
          );
        })}
      </ul>

      <div className="mt-10">
        <ButtonLink href={`#${SECTION_IDS.contact}`} variant="secondary">
          Parlons de votre projet
        </ButtonLink>
      </div>
    </Section>
  );
}
