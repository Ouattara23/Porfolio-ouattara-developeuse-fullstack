"use client";

import { useSyncExternalStore } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { THEME_STORAGE_KEY } from "@/lib/theme";

/** Le thème vit dans la classe `dark` de <html> : on s'y abonne plutôt que de dupliquer l'état. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Stockage indisponible (navigation privée, etc.) : le thème reste appliqué pour la session.
    }
  };

  const label = isDark ? "Passer en mode clair" : "Passer en mode sombre";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors duration-200 hover:bg-surface-muted"
    >
      {/* Les deux icônes sont dans le HTML : le CSS choisit la bonne, sans flash au chargement. */}
      <LuMoon aria-hidden="true" className="size-5 dark:hidden" />
      <LuSun aria-hidden="true" className="hidden size-5 dark:block" />
    </button>
  );
}
