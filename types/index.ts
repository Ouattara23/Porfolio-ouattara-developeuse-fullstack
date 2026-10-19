export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  /** Points clés affichés sous la description (ex. intégration, configuration). */
  highlights?: string[];
  /** Précision éventuelle (ex. choix technique encore ouvert). */
  note?: string;
  /** Chemin public d'une capture (ex. `/images/projects/budgetapp.png`) ; sinon un emplacement est affiché. */
  image?: string;
  /** URL du projet en ligne ; `[À RENSEIGNER]` tant qu'elle manque. */
  projectUrl: string;
  /** URL du dépôt GitHub ; `[À RENSEIGNER]` tant qu'elle manque. */
  githubUrl: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
  /** Catégorie mise particulièrement en avant (ex. Dolibarr ERP/CRM). */
  featured?: boolean;
  description?: string;
}

export type TechnologyId =
  | "html"
  | "css"
  | "tailwind"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "nodejs"
  | "express"
  | "mongodb"
  | "firebase"
  | "git"
  | "github"
  | "dolibarr";

export interface Technology {
  id: TechnologyId;
  name: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  id: "email" | "phone" | "linkedin" | "github" | "whatsapp";
  label: string;
  /** URL ou adresse ; vaut `[À RENSEIGNER]` tant que l'information manque. */
  value: string;
  /** Texte affiché pour la coordonnée (ex. l'adresse e-mail). */
  display: string;
}

export interface Profile {
  name: string;
  brand: string;
  title: string;
  role: string;
  speciality: string;
  availabilityBadge: string;
  heroTitle: string;
  heroDescription: string;
  /** Chemin public de la photo de profil. */
  photo: string;
  /** Cadrage de la photo dans son cadre (valeur CSS `object-position`, ex. `50% 70%`). */
  photoPosition?: string;
  /** Lien du CV à télécharger ; `[À RENSEIGNER]` tant que le fichier manque. */
  cvUrl: string;
  copyrightYear: number;
}

export interface AboutStep {
  label: string;
  detail: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  path: AboutStep[];
}

export interface TimelineItem {
  id: string;
  /** Année ou période ; `[À RENSEIGNER]` tant qu'elle manque. */
  period: string;
  title: string;
  organization?: string;
  description?: string;
  technologies?: string[];
}

export type ServiceId =
  | "web-development"
  | "showcase-sites"
  | "dolibarr-integration"
  | "frontend-integration"
  | "maintenance";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
}

export type AIUseId = "learn" | "explore" | "prototype" | "accelerate" | "workflow";

export interface AIUse {
  id: AIUseId;
  label: string;
}

export interface AIContent {
  title: string;
  intro: string;
  uses: AIUse[];
  toolsTitle: string;
  tools: string[];
  toolsNote: string;
}

export interface SeoContent {
  title: string;
  description: string;
  siteName: string;
  /** Locale Open Graph (ex. `fr_FR`). */
  locale: string;
}
