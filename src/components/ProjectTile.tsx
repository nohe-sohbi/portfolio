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
            data.technologies.map((t: string) => <img src={t} width={30} />)
          ) : (
            <img src={data.technologies} />
          )}
        </div>
        <hr />

        <p className="text-description">{data.description}</p>

        {data.image && (
          <img
            className="image-description"
            src={data.image}
            alt={data.name}
            style={{
              objectFit: "cover",
              width: "80%",
              borderRadius: 10,
              border: "1px solid #995d25",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              textAlign: "center",
              display: "block",
              margin: "0 auto",
              marginBottom: "10px",
            }}
          />
        )}
      </div>
    </>
  );
}
