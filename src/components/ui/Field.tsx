import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

/** shadcn-style Field / Label / Control / Error composition. */

export function Field({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-fg"
    >
      {children}
      {required && (
        <span className="ml-0.5 text-danger" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

export function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} role="alert" className="text-sm text-danger">
      {children}
    </p>
  );
}

const controlClass = (invalid?: boolean) =>
  cn(
    "w-full rounded-xl border bg-surface px-4 py-3 text-fg placeholder:text-fg-subtle outline-none transition-colors duration-200 focus:ring-2 focus:ring-primary-400/25",
    invalid
      ? "border-danger focus:border-danger"
      : "border-border focus:border-primary-400"
  );

export function Input({
  invalid,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return <input className={cn(controlClass(invalid), className)} {...props} />;
}

export function Textarea({
  invalid,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      className={cn(controlClass(invalid), "resize-none", className)}
      {...props}
    />
  );
}
