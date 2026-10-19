import type { MetadataRoute } from "next";
import { isSiteUrlConfigured, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sans adresse publique, un sitemap listerait des URL `localhost` : on le laisse vide.
  if (!isSiteUrlConfigured) return [];

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
