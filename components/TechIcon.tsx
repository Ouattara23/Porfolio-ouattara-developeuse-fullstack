import type { IconType } from "react-icons";
import {
  SiCss,
  SiDolibarr,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { TechnologyId } from "@/types";

const icons: Record<TechnologyId, IconType> = {
  html: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  dolibarr: SiDolibarr,
};

interface TechIconProps {
  id: TechnologyId;
  className?: string;
}

/** Icône décorative d'une technologie (le nom est toujours affiché à côté). */
export default function TechIcon({ id, className }: TechIconProps) {
  const Icon = icons[id];
  return <Icon aria-hidden="true" className={className} />;
}
