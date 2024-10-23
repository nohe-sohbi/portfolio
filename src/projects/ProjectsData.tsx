export type Project = {
  name: string;
  description: string;
  technologies?: string | string[];
  links?: string;
  image?: string;
  size?: string;
};

const ProjectsData: Project[] = [
  {
    name: "Go Techniques",
    description:
      "Website who can generate quotes based on the clients request for Geotechnical services.",
    technologies: [
      "src/assets/technologies/PHP.png",
      "src/assets/technologies/MySQL.png",
      "src/assets/technologies/HTML5.png",
      "src/assets/technologies/CSS3.png",
    ],
    links: "https://gotechniques.fr",
    image: "src/assets/websites/gotechniques.fr.png",
    size: "100%",
  },
  {
    name: "Fuzion",
    description:
      "Web builder for making an executable binded into another executable with custom parameters.",
    technologies: [
      "src/assets/technologies/PHP.png",
      "src/assets/technologies/CSHARP.png",
      "src/assets/technologies/HTML5.png",
      "src/assets/technologies/CSS3.png",
    ],
    links: "Project 2 links",
    image: "src/assets/websites/crypter.png",
    size: "100%",
  },
  {
    name: "AsyncNode",
    description:
      "Single page website to provide custom web developpement prestations for customers.",
    technologies: [
      "src/assets/technologies/PHP.png",
      "src/assets/technologies/HTML5.png",
      "src/assets/technologies/CSS3.png",
    ],
    links: "Project 3 links",
    image: "src/assets/websites/asyncnode.png",
    size: "100%",
  },
  {
    name: "Mon petit cadeau",
    description:
      "Custom project to provide guessing game to customers who doesn't have gift ideas.",
    technologies: [
      "src/assets/technologies/PHP.png",
      "src/assets/technologies/MySQL.png",
      "src/assets/technologies/HTML5.png",
      "src/assets/technologies/CSS3.png",
    ],
    links: "Project 4 links",
    image: "src/assets/websites/mon-petit-cadeau.png",
  },
  {
    name: "SNAgency",
    description:
      "SMMA agency website specialised in google ads management campaigns.",
    technologies: [
      "src/assets/technologies/PHP.png",
      "src/assets/technologies/MySQL.png",
      "src/assets/technologies/HTML5.png",
      "src/assets/technologies/CSS3.png",
    ],
    links: "Project 5 links",
    image: "src/assets/websites/snagency.png",
  },
  {
    name: "Elite-Cheaters",
    description:
      "Aside project to sell custom cheating softwares for different games.",
    technologies: [
      "src/assets/technologies/PHP.png",
      "src/assets/technologies/MySQL.png",
      "src/assets/technologies/HTML5.png",
      "src/assets/technologies/CSS3.png",
    ],
    image: "src/assets/websites/elite-cheaters.png",
  },
];

export default ProjectsData;
