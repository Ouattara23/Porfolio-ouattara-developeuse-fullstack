import type { ReactNode } from "react";

/** Pastille de texte (compétence, technologie). */
export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface-muted px-2.5 py-1 text-sm text-foreground">
      {children}
    </span>
  );
}
