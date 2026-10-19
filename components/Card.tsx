import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Carte commune : bordure légère, coins arrondis, ombre discrète, survol doux. */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-accent/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}
