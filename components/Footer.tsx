import Container from "@/components/Container";
import PlaceholderTag from "@/components/PlaceholderTag";
import SocialIcon from "@/components/SocialIcon";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { getSocialHref, opensInNewTab } from "@/lib/socials";

/** Réseaux affichés dans le footer (cahier des charges, section 19). */
const FOOTER_SOCIAL_IDS = ["linkedin", "github", "email"] as const;

export default function Footer() {
  const footerSocials = FOOTER_SOCIAL_IDS.flatMap((id) =>
    socials.filter((social) => social.id === id),
  );

  return (
    <footer className="border-t border-border bg-surface-muted/60">
      <Container className="flex flex-col gap-8 py-10 sm:py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 max-w-sm text-sm text-muted">{profile.title}</p>
        </div>

        <ul aria-label="Liens et réseaux" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerSocials.map((social) => {
            const href = getSocialHref(social);
            const content = (
              <>
                <SocialIcon id={social.id} className="size-4" />
                {social.label}
              </>
            );
            return (
              <li key={social.id} className="flex items-center gap-2 text-sm">
                {href ? (
                  <a
                    href={href}
                    target={opensInNewTab(social) ? "_blank" : undefined}
                    rel={opensInNewTab(social) ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline"
                  >
                    {content}
                  </a>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-2 text-muted">
                      {content}
                    </span>
                    <PlaceholderTag />
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </Container>

      <div className="border-t border-border">
        <Container className="py-5">
          <p className="text-sm text-muted">
            © {profile.copyrightYear} {profile.name}. Tous droits réservés.
          </p>
        </Container>
      </div>
    </footer>
  );
}
