import type { TimelineItem } from "@/types";

/**
 * Parcours, dans l'ordre d'affichage. Une période ou un établissement inconnu
 * s'écrit `[À RENSEIGNER]` (voir `lib/placeholder.ts`) et s'affiche comme tel.
 */
export const timeline: TimelineItem[] = [
  {
    id: "baccalaureat",
    period: "2019",
    title: "Baccalauréat",
    organization: "Lycée Classique et Moderne I de Bouaké"
  },
  {
    id: "licence-geographie",
    period: "2020-2023",
    title: "Licence en Géographie",
    organization: "Université Alassane Ouattara",
  },
  {
    id: "digifemmes",
    period: "Janvier 2025 - Mars 2025",
    title: "Formation numérique",
    organization: "DigiFemmes Academy",
    description: "Formation numérique et développement de compétences web.",
  },
  {
    id: "gomycode",
    period: "Mai 2026 - Octobre 2026",
    title: "Bootcamp Développement Logiciel avec compétences en IA",
    organization: "GoMyCode",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "ES6",
      "React",
      "TypeScript",
      "Node.js",
      "Next.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "API REST",
      "GitHub",
      "Postman",
      "Firebase",
    ],
  },
  {
    id: "dolibarr",
    period: "Juillet 2025",
    title: "Intégration Dolibarr ERP/CRM",
    description:
      "Formation et montée en compétences dans l'intégration Dolibarr ERP/CRM.",
  },
];
