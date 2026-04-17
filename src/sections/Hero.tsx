import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-app-bg text-text-primary">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-colors duration-300">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-500 leading-tight">
            Hi, I'm <span className="text-white">Bounpheang</span>
          </h1>

          <h2 className="text-2xl md:text-4xl text-text-secondary font-medium pt-4">
            Frontend Developer
          </h2>

          <p className="pt-6 text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Crafting modern web applications with precision and clean code. I build immersive digital experiences that live at the intersection of design and technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#project"
            className="inline-flex items-center justify-center rounded-2xl bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-400 shadow-lg shadow-primary-600/20"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl border border-app-border bg-transparent px-8 py-3 text-sm font-semibold text-text-primary transition-all duration-200 hover:bg-app-surface"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
