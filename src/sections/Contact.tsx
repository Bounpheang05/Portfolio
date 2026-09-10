import { useState, type FormEvent } from "react";
import { HiCheckCircle } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import {
  Field,
  FieldError,
  FieldLabel,
  Input,
  Textarea,
} from "../components/ui/Field";

const EMAIL_TO = "bounpheang088@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = { name?: string; email?: string; message?: string };
type Status = "idle" | "submitting" | "success";

const channels = [
  { label: "GitHub", value: "@Bounpheang05", href: "https://github.com/Bounpheang05", Icon: FaGithub, external: true },
  { label: "Email", value: EMAIL_TO, href: `mailto:${EMAIL_TO}`, Icon: SiGmail, external: false },
  { label: "WhatsApp", value: "+856 20 9294 2017", href: "https://wa.me/8562092942017", Icon: SiWhatsapp, external: true },
];

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitFailed, setSubmitFailed] = useState(false);

  const validate = (v: typeof values): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(v.email)) e.email = "Enter a valid email address.";
    if (!v.message.trim()) e.message = "Please write a short message.";
    else if (v.message.trim().length < 10)
      e.message = "A little more detail, please (10+ characters).";
    return e;
  };

  const onChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((p) => ({ ...p, [field]: e.target.value }));
      if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
    };

  const onBlur = (field: keyof typeof values) => () =>
    setErrors((p) => ({ ...p, [field]: validate(values)[field] }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      setSubmitFailed(true);
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }

    setSubmitFailed(false);
    setStatus("submitting");
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    );
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
    setStatus("success");
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <Section
      id="contact"
      eyebrow="04 — Contact"
      title="Let's build something"
      description="Open to new projects, collaborations and roles. Send a note and I'll reply soon."
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <ul className="space-y-3">
          {channels.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card-surface flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-border-strong"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-elevated text-primary-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-[0.15em] text-fg-subtle">
                    {label}
                  </span>
                  <span className="block truncate text-sm text-fg">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <form
          noValidate
          onSubmit={onSubmit}
          className="card-surface rounded-2xl p-6 sm:p-8"
        >
          <div className="space-y-5">
            <Field>
              <FieldLabel htmlFor="name" required>
                Name
              </FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={onChange("name")}
                onBlur={onBlur("name")}
                invalid={!!errors.name}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <FieldError id="name-error">{errors.name}</FieldError>}
            </Field>

            <Field>
              <FieldLabel htmlFor="email" required>
                Email
              </FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={values.email}
                onChange={onChange("email")}
                onBlur={onBlur("email")}
                invalid={!!errors.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <FieldError id="email-error">{errors.email}</FieldError>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="message" required>
                Message
              </FieldLabel>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange("message")}
                onBlur={onBlur("message")}
                invalid={!!errors.message}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <FieldError id="message-error">{errors.message}</FieldError>
              )}
            </Field>

            <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full">
              {status === "submitting" ? "Opening your email…" : "Send message"}
            </Button>

            <p aria-live="polite" className="min-h-5 text-sm">
              {status === "success" && (
                <span className="inline-flex items-center gap-1.5 text-success">
                  <HiCheckCircle className="h-4 w-4" aria-hidden="true" />
                  Your email app should now be open with the message ready.
                </span>
              )}
              {submitFailed && Object.keys(errors).length > 0 && (
                <span className="text-danger">
                  Please fix the highlighted fields and try again.
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
