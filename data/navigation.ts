import type { NavLink } from "@/types";

/** Identifiants des sections : partagés entre la navbar et les sections de la page. */
export const SECTION_IDS = {
  home: "accueil",
  about: "a-propos",
  skills: "competences",
  technologies: "technologies",
  projects: "projets",
  experience: "parcours",
  services: "services",
  ai: "intelligence-artificielle",
  contact: "contact",
} as const;

export const navLinks: NavLink[] = [
  { label: "Accueil", href: `#${SECTION_IDS.home}` },
  { label: "À propos", href: `#${SECTION_IDS.about}` },
  { label: "Compétences", href: `#${SECTION_IDS.skills}` },
  { label: "Projets", href: `#${SECTION_IDS.projects}` },
  { label: "Parcours", href: `#${SECTION_IDS.experience}` },
  { label: "Services", href: `#${SECTION_IDS.services}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
];

export const navCta: NavLink = {
  label: "Me contacter",
  href: `#${SECTION_IDS.contact}`,
};
