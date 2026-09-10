import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-fg-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
