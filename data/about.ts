import type { AboutContent } from "@/types";

/**
 * Texte de la section « À propos ». Il ne reprend que des éléments fournis
 * dans le cahier des charges : aucune date, aucun chiffre, aucune expérience inventés.
 */
export const about: AboutContent = {
  title: "De la géographie au développement web",
  paragraphs: [
    "Mon parcours a débuté par la géographie, avec une Licence à l'Université Alassane Ouattara. Mon intérêt pour le numérique m'a ensuite amenée à suivre la formation DigiFemmes, puis à me tourner vers le développement web.",
    "Je me forme actuellement à GoMyCode, en développement logiciel avec des compétences en intelligence artificielle. Je développe aussi mes compétences autour de Dolibarr ERP/CRM.",
    "J'aime comprendre, essayer, puis construire : transformer une idée en solution concrète, avec curiosité et sens du détail.",
  ],
  path: [
    {
      label: "Géographie",
      detail: "Licence à l'Université Alassane Ouattara.",
    },
    {
      label: "Numérique",
      detail: "Formation DigiFemmes.",
    },
    {
      label: "Développement web",
      detail:
        "Formation actuelle à GoMyCode, avec compétences en IA, et parcours autour de Dolibarr ERP/CRM.",
    },
  ],
};
