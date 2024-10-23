import { Project } from "../projects/ProjectsData";

export default function ProjectTile(data: Project) {
  return (
    <>
      <div className="project-tile" onClick={() => window.open(data.links)}>
        <h2>
          {data.name} - {data.technologies}
        </h2>

        <hr />

        <p>{data.description}</p>

        <img src={data.image} alt={data.name} />
      </div>
    </>
  );
}
