import { PLACEHOLDER } from "@/lib/placeholder";

interface PlaceholderTagProps {
  className?: string;
}

/** Signale visuellement une information encore à fournir (`[À RENSEIGNER]`). */
export default function PlaceholderTag({ className = "" }: PlaceholderTagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-dashed border-accent/70 px-1.5 py-0.5 text-xs font-medium text-accent-text ${className}`}
    >
      {PLACEHOLDER}
    </span>
  );
}
