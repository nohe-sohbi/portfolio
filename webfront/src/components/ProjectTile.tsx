import { Project } from "../projects/ProjectsData";

export default function ProjectTile(data: Project) {
  return (
    <>
      <div
        className="project-tile"
        onClick={() => data.links && window.open(data.links)}
      >
        <h2>{data.name}</h2>
        <div className="technologies">
          {Array.isArray(data.technologies) ? (
            data.technologies.map((t: string, index: number) => (
              <img key={`${data.name}-tech-${index}`} src={t} width={30} alt={`Technology ${index + 1}`} />
            ))
          ) : (
            <img src={data.technologies} alt="Technology" />
          )}
        </div>
        <hr />

        <p className="text-description">{data.description}</p>

        {data.image && (
          <img className="image-description" src={data.image} alt={data.name} />
        )}
      </div>
    </>
  );
}
