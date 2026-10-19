import type { MetadataRoute } from "next";
import { isSiteUrlConfigured, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Une adresse de sitemap absolue n'a de sens qu'avec une adresse publique connue.
    ...(isSiteUrlConfigured ? { sitemap: `${SITE_URL}/sitemap.xml` } : {}),
  };
}
