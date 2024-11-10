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
      "An innovative web platform streamlining the process of obtaining geotechnical service quotes. Developed with a focus on user experience, this solution enables clients to receive comprehensive quotes from multiple providers through an automated system, significantly reducing the time and effort typically required in the quotation process.",
    technologies: [
      "/technologies/PHP.png",
      "/technologies/MySQL.png",
      "/technologies/HTML5.png",
      "/technologies/CSS3.png",
    ],
    links: "https://gotechniques.fr",
    image: "/websites/gotechniques.fr.png",
    size: "100%",
  },
  {
    name: "Fuzion",
    description:
      "A sophisticated web-based executable builder offering advanced customization capabilities for software development. This tool streamlines the process of creating bound executables with custom parameters, featuring an intuitive interface and robust security measures to ensure reliable application deployment.",
    technologies: [
      "/technologies/PHP.png",
      "/technologies/CSHARP.png",
      "/technologies/HTML5.png",
      "/technologies/CSS3.png",
    ],
    links: "/websites/crypter.png",
    image: "/websites/crypter.png",
    size: "100%",
  },
  {
    name: "AsyncNode",
    description:
      "A modern, responsive single-page application showcasing professional web development services. Built with performance and user experience in mind, this platform demonstrates technical expertise while maintaining elegant design principles and seamless navigation.",
    technologies: [
      "/technologies/PHP.png",
      "/technologies/HTML5.png",
      "/technologies/CSS3.png",
    ],
    links: "/websites/asyncnode.png",
    image: "/websites/asyncnode.png",
    size: "100%",
  },
  {
    name: "Mon petit cadeau",
    description:
      "An interactive gift recommendation platform utilizing intelligent algorithms to solve the challenge of gift selection. This innovative solution guides users through an engaging question-based journey to discover perfect gift ideas, making the gift-giving process both fun and efficient.",
    technologies: [
      "/technologies/PHP.png",
      "/technologies/MySQL.png",
      "/technologies/HTML5.png",
      "/technologies/CSS3.png",
    ],
    links: "/websites/mon-petit-cadeau.png",
    image: "/websites/mon-petit-cadeau.png",
  },
  {
    name: "SNAgency",
    description:
      "A professional SMMA agency website specializing in Google Ads campaign management. This platform showcases comprehensive digital marketing services, featuring detailed campaign optimization strategies, and proven results to help businesses maximize their advertising ROI.",
    technologies: [
      "/technologies/PHP.png",
      "/technologies/MySQL.png",
      "/technologies/HTML5.png",
      "/technologies/CSS3.png",
    ],
    links: "/websites/snagency.png",
    image: "/websites/snagency.png",
  },
  {
    name: "Elite-Cheaters",
    description:
      "A specialized platform developed for gaming enthusiasts, offering custom software solutions for various gaming applications. This project demonstrates advanced software development capabilities while maintaining secure user authentication and seamless payment processing.",
    technologies: [
      "/technologies/PHP.png",
      "/technologies/MySQL.png",
      "/technologies/HTML5.png",
      "/technologies/CSS3.png",
    ],
    links: "/websites/elite-cheaters.png",
    image: "/websites/elite-cheaters.png",
  },
];

export default ProjectsData;
