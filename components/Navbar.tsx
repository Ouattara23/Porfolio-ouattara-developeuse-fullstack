"use client";

import { useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";
import { navCta, navLinks, SECTION_IDS } from "@/data/navigation";
import { profile } from "@/data/profile";

const MOBILE_MENU_ID = "menu-mobile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);
  const brandName = profile.brand.replace(/\.$/, "");

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Aller au contenu principal
      </a>

      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-border bg-background/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a
            href={`#${SECTION_IDS.home}`}
            aria-label={`${profile.name} — retour à l'accueil`}
            className="text-lg font-semibold tracking-tight"
          >
            {brandName}
            <span aria-hidden="true" className="text-accent">
              .
            </span>
          </a>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ButtonLink
              href={navCta.href}
              size="sm"
              className="hidden lg:inline-flex"
            >
              {navCta.label}
            </ButtonLink>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={MOBILE_MENU_ID}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors duration-200 hover:bg-surface-muted lg:hidden"
            >
              {open ? (
                <LuX aria-hidden="true" className="size-5" />
              ) : (
                <LuMenu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </Container>

        <div
          id={MOBILE_MENU_ID}
          className={`absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background lg:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <Container className="py-4">
            <nav aria-label="Navigation mobile">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-3 text-base text-foreground transition-colors duration-200 hover:bg-surface-muted"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={navCta.href}
                onClick={closeMenu}
                className="mt-3 w-full"
              >
                {navCta.label}
              </ButtonLink>
            </nav>
          </Container>
        </div>
      </header>
    </>
  );
}
