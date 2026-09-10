import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-55 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-500 text-[#04121d] hover:bg-primary-400 shadow-[0_8px_30px_-10px_rgb(56_189_248/0.5)]",
  outline:
    "border border-border-strong text-fg hover:border-primary-400/60 hover:bg-elevated",
  ghost: "text-fg-muted hover:text-fg hover:bg-elevated",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-sm",
};

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  const Comp = (as ?? "button") as ElementType;
  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
