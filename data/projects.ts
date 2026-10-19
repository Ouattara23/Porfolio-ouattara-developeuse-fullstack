import type { Project } from "@/types";
import { PLACEHOLDER } from "@/lib/placeholder";

/**
 * Projets présentés. Pour ajouter une capture : déposer l'image dans
 * `public/images/projects/` puis renseigner `image`. Pour les liens :
 * remplacer `[À RENSEIGNER]` par l'URL complète.
 */
export const projects: Project[] = [
  {
    id: "budgetapp",
    name: "BudgetApp",
    description:
      "Application de gestion de budget permettant de gérer les budgets et les transactions.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Firebase / IndexedDB"],
    note: "Le stockage (Firebase ou IndexedDB) dépend de la version finale.",
    image: "/images/projects/budgetapp.png",
    projectUrl: "https://budget-app-gestion-projet-final-j2r.vercel.app/",
    githubUrl: PLACEHOLDER,
  },
  {
    id: "elegance-parfum",
    name: "Elegance Parfum",
    description:
      "Site vitrine professionnel pour une marque de parfum située à Abidjan-Koumassi.",
    technologies: ["HTML", "CSS", "Responsive design"],
    image: "/images/projects/elegance-parfum.png",
    projectUrl: PLACEHOLDER,
    githubUrl: PLACEHOLDER,
  },
  {
    id: "dolibarr",
    name: "Dolibarr ERP/CRM",
    description:
      "Compétences et réalisations liées à l'intégration de Dolibarr ERP/CRM.",
    technologies: ["Dolibarr ERP/CRM"],
    highlights: [
      "Intégration",
      "Configuration",
      "Personnalisation",
      "Digitalisation",
      "Accompagnement utilisateur",
    ],
    projectUrl: PLACEHOLDER,
    githubUrl: PLACEHOLDER,
  },
];
