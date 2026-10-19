import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express.js", "API REST"],
  },
  {
    id: "databases",
    label: "Bases de données",
    skills: ["MongoDB", "Mongoose", "Firebase", "IndexedDB"],
  },
  {
    id: "tools",
    label: "Outils",
    skills: ["Git", "GitHub", "Postman"],
  },
  {
    id: "erp-crm",
    label: "ERP / CRM",
    skills: ["Dolibarr ERP/CRM"],
    featured: true,
    description:
      "Intégration, configuration, personnalisation, digitalisation et accompagnement utilisateur.",
  },
];
