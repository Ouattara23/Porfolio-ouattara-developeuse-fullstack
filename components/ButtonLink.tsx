import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-muted",
  ghost: "text-foreground hover:bg-surface-muted",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2",
  md: "px-5 py-3",
};

/** Classes d'un bouton : partagées par les liens (`ButtonLink`) et les vrais `<button>`. */
export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  extra = "",
): string {
  return `inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${extra}`;
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Ouvre le lien dans un nouvel onglet. */
  external?: boolean;
  /** Télécharge la cible (ex. un PDF) au lieu de naviguer. */
  download?: boolean;
  onClick?: () => void;
}

/** Lien stylé comme un bouton : un seul endroit pour les styles de CTA. */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  download = false,
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={buttonClassName(variant, size, className)}
    >
      {children}
    </a>
  );
}
