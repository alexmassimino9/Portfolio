// object of data for projects.
import img from "../../assets/projects/default-image.png";
import portfolioImg from "../../assets/projects/Portfolio.png";
import taskifyimg from "../../assets/projects/Taskify.png";
import coachesCodeImg from "../../assets/projects/CoachesCode.png";

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
    bio: "Welcome to my portfolio, where I showcase some of my latest projects and endeavors. My portfolio embodies a sleek and minimal design, deliberately highlighting my most recent and noteworthy work.",
    tech: "JavaScript, React, React Router, MUI",
  },
  {
    key: 1,
    name: "Taskify",
    url: "https://github.com/alexmassimino9/react-typescript-task-app",
    img: taskifyimg,
    code: "https://github.com/alexmassimino9/react-typescript-task-app",
    bio: "While this project is a conventional todo app, it stands out due to its implementation in TypeScript. The app offers fundamental CRUD operations and serves as a significant milestone for me as my initial project in TypeScript integration.",
    tech: "TypeScript,JavaScript, React, ",
  },
  {
    key: 2,
    name: "Coaches Code",
    url: "https://main.d20njt9dmt5i9j.amplifyapp.com/",
    img: coachesCodeImg,
    code: "https://github.com/alexmassimino9/CoachesCode",
    bio: "Coach's Code employs a user-friendly chat interface to enhance the user experience for coaches, allowing them to communicate, access resources, and receive support. The platform's intuitive design is accessible for coaches of all levels, empowering them to improve their coaching skills and relationships with their athletes.",
    tech: "React, MUI, AWS(Amplify, Cognito, Lambda), GraphQL",
  },
];

export default projectData;
