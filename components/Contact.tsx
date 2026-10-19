import ContactForm from "@/components/ContactForm";
import PlaceholderTag from "@/components/PlaceholderTag";
import Section from "@/components/Section";
import SocialIcon from "@/components/SocialIcon";
import { SECTION_IDS } from "@/data/navigation";
import { socials } from "@/data/socials";
import { getSocialHref, opensInNewTab } from "@/lib/socials";

export default function Contact() {
  return (
    <Section
      id={SECTION_IDS.contact}
      eyebrow="Contact"
      title="Construisons quelque chose ensemble."
      description="Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter."
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <ul className="space-y-5">
          {socials.map((social) => {
            const href = getSocialHref(social);
            const newTab = opensInNewTab(social);
            return (
              <li key={social.id} className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-primary"
                >
                  <SocialIcon id={social.id} className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted">{social.label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={newTab ? "_blank" : undefined}
                      rel={newTab ? "noopener noreferrer" : undefined}
                      className="break-words font-medium underline-offset-4 hover:underline"
                    >
                      {social.display}
                    </a>
                  ) : (
                    <PlaceholderTag className="mt-1" />
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="rounded-xl border border-border bg-surface p-6 shadow-soft sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
