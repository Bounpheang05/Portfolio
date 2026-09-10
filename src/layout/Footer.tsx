import { FaGithub } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { Container } from "../components/ui/Container";

const socials = [
  { label: "GitHub", href: "https://github.com/Bounpheang05", Icon: FaGithub, external: true },
  { label: "Email", href: "mailto:bounpheang088@gmail.com", Icon: SiGmail, external: false },
  { label: "WhatsApp", href: "https://wa.me/8562092942017", Icon: SiWhatsapp, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col items-center gap-6 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display font-semibold">Bounpheang Khampanyakhoun</p>
            <p className="mt-1 text-sm text-fg-subtle">
              Frontend developer &middot; open to work
            </p>
          </div>

          <ul className="flex gap-5">
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-fg-muted transition-colors hover:bg-elevated hover:text-primary-300"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="pb-10 text-center text-xs text-fg-subtle sm:text-left">
          &copy; {new Date().getFullYear()} &mdash; Built with React, TypeScript &amp; Tailwind.
        </p>
      </Container>
    </footer>
  );
}
