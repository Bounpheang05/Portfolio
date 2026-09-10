import type { ElementType, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { useReveal } from "../../hooks/useReveal";

/** Wraps children in a scroll-reveal container. `stagger` cascades direct children. */
export function Reveal({
  as,
  stagger = false,
  className,
  children,
}: {
  as?: ElementType;
  stagger?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Comp = (as ?? "div") as ElementType;

  return (
    <Comp
      ref={ref}
      className={cn(
        stagger ? "reveal-stagger" : "reveal",
        visible && "is-visible",
        className
      )}
    >
      {children}
    </Comp>
  );
}
