import type { SocialLink } from "@/types";
import { isFilled } from "@/lib/placeholder";

/**
 * Lien cliquable d'une coordonnée, ou `null` tant que la valeur n'est pas
 * renseignée (elle reste alors affichée comme `[À RENSEIGNER]`, sans lien).
 */
export function getSocialHref(social: SocialLink): string | null {
  if (!isFilled(social.value)) return null;
  if (social.id === "email") return `mailto:${social.value}`;
  if (social.id === "phone") return `tel:${social.value}`;
  return social.value;
}

/** Seuls les liens vers un site externe s'ouvrent dans un nouvel onglet (pas `mailto:` ni `tel:`). */
export function opensInNewTab(social: SocialLink): boolean {
  return social.id !== "email" && social.id !== "phone";
}
