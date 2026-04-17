import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Project from "../sections/Project";
import Skill from "../sections/Skill";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />

      <Skill />

      <Project />
      <Contact />
    </main>
  );
};

export default Home;
