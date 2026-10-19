import { isFilled } from "@/lib/placeholder";

const FALLBACK_SITE_URL = "http://localhost:3000";
const configuredUrl = process.env.SITE_URL;

/**
 * Vrai quand l'adresse publique du site est définie (variable `SITE_URL`, voir
 * `.env.example`). Sans elle, le sitemap reste vide et le lien canonique n'est
 * pas émis. Les URL absolues des images de partage (Open Graph) retombent alors
 * sur `localhost` : renseigner `SITE_URL` avant la mise en ligne.
 */
export const isSiteUrlConfigured = isFilled(configuredUrl);

/** Adresse publique du site, sans slash final. */
export const SITE_URL = isFilled(configuredUrl)
  ? configuredUrl.trim().replace(/\/+$/, "")
  : FALLBACK_SITE_URL;
