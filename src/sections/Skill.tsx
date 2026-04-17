import { Skills } from "../data/skillsData";

const Skill = () => {
  return (
    <section
      id="skill"
      className="min-h-screen bg-app-bg text-text-secondary flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-500 tracking-tight">
            The Toolkit
          </h2>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Technologies I use to bring digital vision to life, focusing on 
            performance, scalability, and user experience.
          </p>
        </div>

        {/* Skills Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Skills.map((skill) => (
            <li 
              key={skill.id}
              className="group p-8 bg-app-surface border border-app-border rounded-2xl 
                         hover:border-primary-500/50 hover:bg-app-card 
                         transition-all duration-300 transform hover:-translate-y-2 
                         flex flex-col items-center text-center shadow-lg"
            >
              {/* Icon Container */}
              <div className="mb-5 p-4 bg-app-bg rounded-xl text-primary-500 
                              group-hover:text-primary-400 group-hover:scale-110 
                              transition-all duration-300 text-5xl">
                <skill.Icon />
              </div>

              {/* Text Content */}
              <h3 className="text-text-primary text-xl font-bold mb-2">
                {skill.name}
              </h3>
              
              <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                {skill.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skill;