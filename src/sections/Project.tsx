import { projects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <section id="project" className="min-h-screen py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary-500 ">
            Featured Work
          </h2>
          <p className="text-text-muted  mt-2 ">
            A collection of things I've built <br />
            Note: All Projects list here aren't complete yet just for
            demonstration purposes <br />I will update more projects in the
            future, so stay tuned!
          </p>
          <span></span>
        </header>
        <ul className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
