import { Project } from "../projects/ProjectsData";
import ImageWithFallback from "./ImageWithFallback";
import { useStaggeredAnimation } from '../hooks/useAnimations';

interface ProjectTileProps extends Project {
  animationDelay?: number;
  isVisible?: boolean;
}
export default function ProjectTile({ animationDelay = 0, isVisible = false, ...data }: ProjectTileProps) {
  const shouldAnimate = useStaggeredAnimation(isVisible ? animationDelay : 0);
  return (
    <>
      <div
        className={`project-tile project-tile-animated ${shouldAnimate ? 'visible' : ''}`}
        onClick={() => data.links && window.open(data.links)}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        <h2>{data.name}</h2>
        <div className="technologies">
          {Array.isArray(data.technologies) ? (
            data.technologies.map((t: string, index: number) => (
              <ImageWithFallback
                key={`${data.name}-tech-${index}`}
                src={t}
                alt={`Technology ${index + 1}`}
                width={30}
                height={30}
                className="technology-icon"
                showSkeleton={true}
                lazy={true}
              />
            ))
          ) : (
            data.technologies && (
              <ImageWithFallback
                src={data.technologies}
                alt="Technology"
                width={30}
                height={30}
                className="technology-icon"
                showSkeleton={true}
                lazy={true}
              />
            )
          )}
        </div>
        <hr />

        <p className="text-description">{data.description}</p>

        {data.image && (
          <ImageWithFallback
            src={data.image}
            alt={`Screenshot of ${data.name} project`}
            className="image-description"
            showSkeleton={true}
            lazy={true}
          />
        )}
      </div>
    </>
  );
}
