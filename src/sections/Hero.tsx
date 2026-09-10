import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <Container>
        <div className="grid items-center gap-12 pt-12 pb-24 sm:pt-16 sm:pb-28 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          {/* ---- Left: intro ---- */}
          <Reveal stagger className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-fg-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for work
            </p>

            <h1 className="mt-6">
              <span className="block font-mono text-sm font-medium uppercase tracking-[0.28em] text-primary-300">
                Frontend Developer
              </span>
              <span className="mt-3 block text-display font-bold leading-[0.95] tracking-[-0.025em] [hyphens:none]">
                Bounpheang
                <br />
                <span className="text-gradient">Khampanyakhoun</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">
              I build fast, accessible web applications with React, TypeScript
              and Tailwind &mdash; where clean code meets considered design.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#work" size="lg">
                View my work
                <HiArrowDown className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button as="a" href="#contact" variant="outline" size="lg">
                Get in touch
                <HiArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <dl className="mt-14 grid max-w-md grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border font-mono text-sm sm:grid-cols-3">
              {[
                { label: "Focus", value: "Frontend / UI" },
                { label: "Stack", value: "React · TS" },
                { label: "Based in", value: "Laos" },
              ].map((item) => (
                <div key={item.label} className="bg-surface px-4 py-3">
                  <dt className="text-xs text-fg-subtle">{item.label}</dt>
                  <dd className="mt-1 text-fg">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* ---- Right: code signature (desktop only) ---- */}
          <Reveal className="hidden lg:block">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-full bg-primary-500/10 blur-3xl"
              />
              <figure className="card-surface relative overflow-hidden rounded-2xl">
                <figcaption className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                  </span>
                  <span className="font-mono text-xs text-fg-subtle">developer.ts</span>
                </figcaption>
                <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                  <code>
                    <span className="text-secondary-400">const</span>{" "}
                    <span className="text-primary-300">bounpheang</span>{" "}
                    <span className="text-fg-subtle">=</span>{" "}
                    <span className="text-fg-subtle">{"{"}</span>
                    {"\n"}
                    {"  "}role<span className="text-fg-subtle">:</span>{" "}
                    <span className="text-success">"Frontend&nbsp;Developer"</span>
                    <span className="text-fg-subtle">,</span>
                    {"\n"}
                    {"  "}stack<span className="text-fg-subtle">:</span>{" "}
                    <span className="text-fg-subtle">[</span>
                    <span className="text-success">"React"</span>
                    <span className="text-fg-subtle">,</span>{" "}
                    <span className="text-success">"TypeScript"</span>
                    <span className="text-fg-subtle">,</span>{" "}
                    <span className="text-success">"Tailwind"</span>
                    <span className="text-fg-subtle">],</span>
                    {"\n"}
                    {"  "}focus<span className="text-fg-subtle">:</span>{" "}
                    <span className="text-success">"accessible,&nbsp;fast&nbsp;UI"</span>
                    <span className="text-fg-subtle">,</span>
                    {"\n"}
                    {"  "}open<span className="text-fg-subtle">:</span>{" "}
                    <span className="text-primary-300">true</span>
                    <span className="text-fg-subtle">,</span>
                    {"\n"}
                    <span className="text-fg-subtle">{"}"}</span>
                  </code>
                </pre>
              </figure>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
