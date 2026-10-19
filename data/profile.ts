import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Ouattara Yah",
  brand: "YAH.",
  title: "Développeuse Web | Intégratrice Dolibarr ERP/CRM",
  role: "Développeuse Web",
  speciality: "Intégratrice Dolibarr ERP/CRM",
  availabilityBadge: "Disponible pour des opportunités",
  heroTitle: "Je transforme des idées en expériences web modernes.",
  heroDescription:
    "Je conçois et développe des interfaces web modernes, responsives et fonctionnelles avec les technologies JavaScript modernes. J'aime transformer une idée en produit concret tout en continuant à apprendre et à évoluer.",
  photo: "/images/photo_hero.jpeg",
  // Cadrage vertical : la partie haute de la photo est floue, on recentre sur le visage.
  photoPosition: "50% 70%",
  // CV (PDF) servi depuis `public/`. Pour le remplacer, écraser ce fichier en gardant le même nom.
  cvUrl: "/cv-ouattara-yah.pdf",
  copyrightYear: 2026,
};
