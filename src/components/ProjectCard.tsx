import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import type { Project } from "../types/projectData";
import { Tag } from "./ui/Tag";
import { cn } from "../lib/cn";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <li
      className={cn(
        "card-surface group relative flex flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-border-strong",
        featured && "lg:col-span-2 lg:flex-row"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-elevated",
          featured
            ? "aspect-video lg:aspect-auto lg:min-h-72 lg:w-1/2"
            : "aspect-video"
        )}
      >
        {imgOk ? (
          <img
            src={project.image}
            alt={`${project.title} — screenshot`}
            loading="lazy"
            width={800}
            height={450}
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary-500/20 via-elevated to-secondary-500/20"
          >
            <span className="font-display text-5xl font-bold text-fg/15">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary-300">
            {project.tag}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold text-fg">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
          {project.desc}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-5 pt-6">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — live demo (opens in a new tab)`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-primary-300"
          >
            Live demo
            <HiArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — source code on GitHub (opens in a new tab)`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <FaGithub className="h-4 w-4" aria-hidden="true" />
            Code
          </a>
        </div>
      </div>
    </li>
  );
}
