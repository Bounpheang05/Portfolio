import type { Project } from "../types/projectData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className="group flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:border-primary-500/50 hover:bg-[color:var(--color-card)]">
      <div className="h-48 bg-[color:var(--color-bg)] relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-8 flex flex-col grow text-start">
        <span className="text-sm font-bold text-primary-500 uppercase">
          {project.tag}
        </span>
        <h3 className="text-2xl font-bold mt-4 text-text-primary">
          {project.title}
        </h3>
        <p className="text-text-muted mt-3 text-sm leading-relaxed line-clamp-3">
          {project.desc}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-3 py-2 text-xs text-text-muted bg-[color:var(--color-bg)]/70 rounded-sm border border-[color:var(--color-border)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="px-8 pb-8 mt-auto">
        <div className="flex gap-4 items-center text-primary-500">
          <a
            href={project.github}
            className="text-sm font-semibold hover:text-primary-400 transition-colors duration-200"
          >
            Github
          </a>
          <a
            href={project.demo}
            className="text-sm font-semibold hover:text-primary-400 transition-colors duration-200"
          >
            Demo
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
