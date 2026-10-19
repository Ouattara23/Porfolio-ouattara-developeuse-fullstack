/** Marqueur imposé par le cahier des charges pour toute information manquante. */
export const PLACEHOLDER = "[À RENSEIGNER]";

/** Vrai lorsque la valeur est renseignée (ni vide, ni le marqueur `[À RENSEIGNER]`). */
export function isFilled(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim() !== "" && value !== PLACEHOLDER;
}
