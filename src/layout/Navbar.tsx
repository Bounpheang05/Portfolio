import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../assets/logo.png";
import { cn } from "../lib/cn";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const IDS = ["hero", ...LINKS.map((l) => l.id)];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          aria-label="Bounpheang — home"
          className="flex items-center gap-2.5"
        >
          <img src={logo} width={30} height={30} alt="" className="h-[30px] w-[30px] object-contain" />
          <span className="font-display text-sm font-semibold tracking-tight">
            Bounpheang
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active === l.id
                    ? "text-primary-300"
                    : "text-fg-muted hover:text-fg"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-2 inline-flex h-9 items-center rounded-lg border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:border-primary-400/60 hover:bg-elevated"
            >
              Get in touch
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-fg transition-colors hover:bg-elevated md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <HiXMark className="h-6 w-6" aria-hidden="true" />
          ) : (
            <HiBars3 className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-bg md:hidden"
      >
        <ul className="flex flex-col px-4 py-3">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  active === l.id
                    ? "bg-elevated text-primary-300"
                    : "text-fg-muted hover:bg-elevated hover:text-fg"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
