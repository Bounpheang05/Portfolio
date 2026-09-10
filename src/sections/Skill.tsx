import { Skills } from "../data/skillsData";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

export default function Skill() {
  return (
    <Section
      id="stack"
      eyebrow="03 — Stack"
      title="The tools I reach for"
      description="Technologies I use day to day, chosen for performance, type safety and long-term maintainability."
    >
      <Reveal stagger>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Skills.map((s) => (
            <li
              key={s.id}
              className="card-surface group flex flex-col gap-3 rounded-xl p-5 transition-colors duration-300 hover:border-border-strong"
            >
              <span className="text-2xl text-primary-300 transition-colors group-hover:text-primary-400">
                <s.Icon aria-hidden="true" focusable="false" />
              </span>
              <span className="font-display text-sm font-semibold text-fg">
                {s.name}
              </span>
              <span className="text-xs leading-relaxed text-fg-subtle">
                {s.text}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
