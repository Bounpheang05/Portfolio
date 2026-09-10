import mypic from "../assets/mypic.png";
import { Section } from "../components/ui/Section";

const languages = [
  { name: "Lao", level: "Native", value: 95 },
  { name: "Thai", level: "Fluent", value: 85 },
  { name: "English", level: "Upper intermediate", value: 70 },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="02 — About"
      title="Software should be as beautiful as it is functional"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
        <div className="mx-auto w-full max-w-75">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-2xl bg-primary-500/15 blur-2xl"
            />
            <img
              src={mypic}
              alt="Portrait of Bounpheang Khampanyakhoun"
              width={300}
              height={360}
              loading="lazy"
              className="card-surface relative aspect-5/6 w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="space-y-4 text-base leading-relaxed text-fg-muted sm:text-lg">
            <p>
              I&apos;m a frontend developer with a background in{" "}
              <span className="text-fg">UI/UX</span>. I care about the details
              most people never notice — focus states, motion that means
              something, layouts that hold up at every screen size.
            </p>
            <p>
              My days go into the{" "}
              <span className="text-primary-300">React ecosystem</span>,
              performance work, and architectural patterns. The goal is always
              the same: products that are fast, accessible, and a genuine
              pleasure to use.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
              Languages
            </h3>
            <ul className="mt-5 space-y-5">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="mb-2 flex items-baseline justify-between text-sm">
                    <span className="font-medium text-fg">{l.name}</span>
                    <span className="text-fg-subtle">{l.level}</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={l.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${l.name}: ${l.level}`}
                    className="h-1.5 overflow-hidden rounded-full bg-elevated"
                  >
                    <div
                      className="h-full rounded-full bg-linear-to-r from-primary-500 to-secondary-400"
                      style={{ width: `${l.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
