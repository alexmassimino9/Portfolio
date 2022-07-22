// object of data for projects.
import img from "../../assets/projects/default-image.png";
import portfolioImg from "../../assets/projects/Portfolio.png";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
ligula lacus, congue sit amet scelerisque ut, vehicula non nunc.
Praesent ac ullamcorper diam, sit amet hendrerit velit. Cras vel
commodo quam, at pretium augue. Sed facilisis enim et sapien
varius, in sollicitudin velit porttitor. Aliquam neque leo,
feugiat a imperdiet.`;

const projectData = [
  {
    key: 0,
    name: "Portfolio",
    url: "https://alexmassimino9.github.io/portfolio/",
    img: portfolioImg,
    code: "https://github.com/alexmassimino9/portfolio",
    bio: "This is a portfolio hostng some of my most recent projects and endeavors. My portfolio is meant to be built with a minimal desgin style and emphasize my recent work and projects.",
    tech: "HTML, CSS, JavaScript, ReactJS, React Router, Material UI, Github, Git Pages",
  },
  {
    key: 1,
    name: "project 2",
    url: "https://github.com/alexmassimino9",
    img: img,
    code: "https://github.com/alexmassimino9",
    bio: lorem,
    tech: "....",
  },
];

export default projectData;
