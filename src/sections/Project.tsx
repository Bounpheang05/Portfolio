import { projects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

export default function Project() {
  return (
    <Section
      id="work"
      eyebrow="01 — Selected work"
      title="Things I've designed and built"
      description="A sample of projects. Some are still in progress — they're here to show how I approach interfaces, structure and detail."
    >
      <Reveal stagger>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured={i === 0} />
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
