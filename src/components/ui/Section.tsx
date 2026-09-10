import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "./Container";
import { useReveal } from "../../hooks/useReveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Optional eyebrow + title header rendered above the content. */
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
};

export function Section({
  id,
  children,
  className,
  eyebrow,
  title,
  description,
}: SectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id={id} className={cn("scroll-mt-[4.5rem]", className)}>
      <Container>
        <div
          ref={ref}
          className={cn(
            "reveal pt-10 pb-(--space-section) sm:pt-14",
            visible && "is-visible"
          )}
        >
          {(eyebrow || title || description) && (
            <header className="mb-12 max-w-2xl sm:mb-16">
              {eyebrow && (
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary-400">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-h2 font-bold leading-[1.1]">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
                  {description}
                </p>
              )}
            </header>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
