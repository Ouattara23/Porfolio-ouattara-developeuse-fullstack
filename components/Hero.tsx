import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import PlaceholderTag from "@/components/PlaceholderTag";
import { SECTION_IDS } from "@/data/navigation";
import { profile } from "@/data/profile";
import { isFilled } from "@/lib/placeholder";

function hasProfilePhoto(): boolean {
    return existsSync(path.join(process.cwd(), "public", profile.photo));
}

function getInitials(name: string): string {
    return name
        .split(" ")
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase();
}

function ProfilePhoto() {
    return (
        <div className="animate-hero relative mx-auto w-full max-w-xs sm:max-w-sm" style={{ animationDelay: "200ms" }}>
            <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent/60"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-soft">
                {hasProfilePhoto() ? (
                    <Image
                        src={profile.photo}
                        alt={`Portrait de ${profile.name}`}
                        fill
                        priority
                        sizes="(min-width: 1024px) 384px, 80vw"
                        className="object-cover"
                        style={{ objectPosition: profile.photoPosition }}
                    />
                ) : (
                    <div
                        role="img"
                        aria-label={`Emplacement de la photo de ${profile.name}`}
                        className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center"
                    >
                        <span className="text-7xl font-semibold tracking-tight text-primary">
                            {getInitials(profile.name)}
                        </span>
                        <PlaceholderTag />
                        <span className="text-xs text-muted">{profile.photo}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Hero() {
    const cvAvailable = isFilled(profile.cvUrl);

    return (
        <section id={SECTION_IDS.home} className="relative overflow-x-clip py-14 sm:py-20 lg:py-24" >
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/10 blur-3xl" />

            <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                <div>
                    <p className="animate-hero inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted shadow-soft" style={{ animationDelay: "0ms" }}>
                        <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
                        {profile.availabilityBadge}
                    </p>

                    <p className="animate-hero mt-6 text-sm font-medium text-muted sm:text-base" style={{ animationDelay: "80ms" }}>
                        <span className="rounded-md bg-accent/15 px-2 py-0.5 font-semibold text-primary">
                            {profile.role}
                        </span>
                        <span aria-hidden="true" className="mx-2 text-border">
                            |
                        </span>
                        {profile.speciality}
                    </p>

                    <h1 className="animate-hero mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: "160ms" }}>
                        {profile.heroTitle}
                    </h1>

                    <p className="animate-hero mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg" style={{ animationDelay: "240ms" }}>
                        {profile.heroDescription}
                    </p>

                    <div className="animate-hero mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
                        <ButtonLink href={`#${SECTION_IDS.projects}`}>
                            Voir mes projets
                            <LuArrowRight aria-hidden="true" className="size-4" />
                        </ButtonLink>
                        <ButtonLink href={`#${SECTION_IDS.contact}`} variant="secondary">
                            Me contacter
                        </ButtonLink>
                    </div>

                    <div className="animate-hero mt-5" style={{ animationDelay: "400ms" }}>
                        {cvAvailable ? (
                            <ButtonLink
                                href={profile.cvUrl}
                                variant="ghost"
                                size="sm"
                                download
                                className="-ml-4"
                            >
                                <LuDownload aria-hidden="true" className="size-4" />
                                Télécharger mon CV
                            </ButtonLink>
                        ) : (
                            <p className="flex flex-wrap items-center gap-2 text-sm text-muted">
                                <LuDownload aria-hidden="true" className="size-4" />
                                Télécharger mon CV
                                <PlaceholderTag />
                            </p>
                        )}
                    </div>
                </div>

                <ProfilePhoto />
            </Container>
        </section>
    );
}
