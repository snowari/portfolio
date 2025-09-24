import { type Project } from "../../data/project";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <>
      {projects.map((project, index) => (
        <section
          key={project.projectNumber}
          id={index === 0 ? "projects" : undefined}
          className="h-screen snap-start"
        >
          <ProjectCard {...project} />
        </section>
      ))}
    </>
  );
};

export default ProjectsSection;
