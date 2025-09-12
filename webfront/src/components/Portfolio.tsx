import { Project } from "../projects/ProjectsData";
import ProjectTile from "./ProjectTile";
import { useScrollAnimation } from '../hooks/useAnimations';

interface PortfolioProps {
  projects: Project[];
}

export function Portfolio({ projects }: PortfolioProps) {
  const { ref: portfolioRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={portfolioRef as React.RefObject<HTMLDivElement>}>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectTile 
            key={project.name} 
            {...project} 
            animationDelay={index * 150}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}
