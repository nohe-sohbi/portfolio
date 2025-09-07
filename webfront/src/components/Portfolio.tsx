import { Project } from "../projects/ProjectsData";
import ProjectTile from "./ProjectTile";

interface PortfolioProps {
  projects: Project[];
}

export function Portfolio({ projects }: PortfolioProps) {
  return (
    <div>
      <div className="projects">
        {projects.map((project) => (
          <ProjectTile key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
