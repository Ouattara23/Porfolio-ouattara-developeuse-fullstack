"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Fait apparaître son contenu en douceur quand il entre dans l'écran.
 *
 * Le contenu est visible par défaut (HTML rendu côté serveur, JavaScript
 * désactivé, ou préférence « réduire les animations ») : il n'est masqué que
 * par ce composant, et seulement s'il se trouve sous la ligne de flottaison.
 * L'état est porté par l'attribut `data-reveal`, que React ne gère pas : pas
 * de re-rendu, donc pas de clignotement.
 */
export default function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    // Repart d'un état neutre (le mode strict de React exécute l'effet deux fois en développement).
    delete element.dataset.reveal;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Déjà visible au chargement : on ne le masque pas (évite un clignotement).
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    element.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
