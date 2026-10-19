import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { seo } from "@/data/seo";
import { isSiteUrlConfigured, SITE_URL } from "@/lib/site";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  applicationName: seo.siteName,
  authors: [{ name: seo.siteName }],
  // Le lien canonique et l'URL Open Graph exigent une adresse publique connue.
  ...(isSiteUrlConfigured ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: seo.locale,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    ...(isSiteUrlConfigured ? { url: "/" } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1020" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
