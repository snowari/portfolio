import Header from "../components/ui/Header";
import IntroSection from "../components/intro/IntroSection";
import ProjectsSection from "../components/project/ProjectsSection";
import { projects } from "../data/project";

const Home = () => {
  return (
    <div className="bg-white isolate">
      <Header />
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <IntroSection id="home" className="snap-start" />
        <ProjectsSection projects={projects} />
      </main>
    </div>
  );
};

export default Home;
