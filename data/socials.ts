import type { SocialLink } from "@/types";

/**
 * Coordonnées et réseaux. Tant qu'une valeur vaut `[À RENSEIGNER]`, elle est
 * affichée comme telle et n'est pas cliquable.
 *
 * - email : adresse e-mail
 * - phone : numéro au format international (ex. `+2250789164708`), utilisé dans le lien `tel:`
 * - linkedin / github / whatsapp : URL complète (ex. `https://github.com/...`)
 */
export const socials: SocialLink[] = [
  {
    id: "email",
    label: "E-mail",
    value: "yahouattara64@gmail.com",
    display: "yahouattara64@gmail.com",
  },
  {
    id: "phone",
    label: "Téléphone",
    value: "+2250789164708",
    display: "+225 07 89 16 47 08",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/yah-ouattara-199a882b4/",
    display: "linkedin.com/in/yah-ouattara",
  },
  {
    id: "github",
    label: "GitHub",
    value: "https://github.com/Ouattara23",
    display: "github.com/Ouattara23",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "https://wa.me/2250789164708",
    display: "+225 07 89 16 47 08",
  },
];
