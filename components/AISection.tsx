import type { IconType } from "react-icons";
import {
  LuBookOpen,
  LuCompass,
  LuFlaskConical,
  LuRocket,
  LuZap,
} from "react-icons/lu";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { ai } from "@/data/ai";
import { SECTION_IDS } from "@/data/navigation";
import type { AIUseId } from "@/types";

const icons: Record<AIUseId, IconType> = {
  learn: LuBookOpen,
  explore: LuCompass,
  prototype: LuFlaskConical,
  accelerate: LuZap,
  workflow: LuRocket,
};

export default function AISection() {
  return (
    <Section
      id={SECTION_IDS.ai}
      eyebrow="Intelligence artificielle"
      title={ai.title}
      description={ai.intro}
      tone="muted"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {ai.uses.map((use) => {
          const Icon = icons[use.id];
          return (
            <li key={use.id}>
              <Card className="flex h-full items-center gap-3 p-5 lg:flex-col lg:items-start lg:gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-primary"
                >
                  <Icon className="size-5" />
                </span>
                <span className="font-medium">{use.label}</span>
              </Card>
            </li>
          );
        })}
      </ul>

      <div className="mt-12">
        <h3 className="text-lg font-semibold tracking-tight">
          {ai.toolsTitle}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {ai.tools.map((tool) => (
            <li key={tool}>
              <Badge>{tool}</Badge>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {ai.toolsNote}
        </p>
      </div>
    </Section>
  );
}
