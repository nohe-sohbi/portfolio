export type Project = {
  name: string;
  description: string;
  technologies: string;
  links: string;
  image?: string;
};

const ProjectsData: Project[] = [
  {
    name: "Project 1",
    description: "Project 1 description",
    technologies: "Project 1 technologies",
    links: "Project 1 links",
    image: "https://picsum.photos/300",
  },
  {
    name: "Project 2",
    description: "Project 2 description",
    technologies: "Project 2 technologies",
    links: "Project 2 links",
    image: "https://picsum.photos/200",
  },
  {
    name: "Project 3",
    description: "Project 3 description",
    technologies: "Project 3 technologies",
    links: "Project 3 links",
    image: "https://picsum.photos/200",
  },
  {
    name: "Project 4",
    description: "Project 4 description",
    technologies: "Project 4 technologies",
    links: "Project 4 links",
    image: "https://picsum.photos/200",
  },
  {
    name: "Project 5",
    description: "Project 5 description",
    technologies: "Project 5 technologies",
    links: "Project 5 links",
    image: "https://picsum.photos/200",
  },
  {
    name: "Project 6",
    description: "Project 6 description",
    technologies: "Project 6 technologies",
    links: "Project 6 links",
    image: "https://picsum.photos/200",
  },
];

export default ProjectsData;
