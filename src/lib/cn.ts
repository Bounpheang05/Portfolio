type ClassValue = string | number | false | null | undefined;

/** Minimal className joiner — no dependency needed for a portfolio. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
