import coachesCodeImg from "../assets/images/images/coachesCode.png";
import portfolioImg from "../assets/images/images/portfolio.png";
import taskifyImg from "../assets/images/images/taskify.png";
const expList = [
  {
    title: "Upwork",
    position: "Full Stack Developer",
    data: [
      "Achieved the prestigious Top Rated status, reflecting a 100% job success rate due to exceptional performance.",
      "Expertly designed, developed, and launched over 12 CMS websites, managing SQL databases for diverse client needs.",
      "Engineered a robust payment application using third party APIs, AWS, and React.",
      "Innovatively implemented UI/UX enhancements for Polk County’s recycling website using TypeScript, React, and MUI.",
      "Pioneered a webcasting feature for a VR training app, using Express.js, React, and socket.io, enhancing training.",
    ],
  },
  {
    title: "Z Axis Solutions",
    position: "Front End Developer",
    data: [
      "Revitalized the re-sharing feature, significantly boosting user engagement with over 1000 new users in the first month.",
      "Developed a dynamic chat feature using Socket.io and REST API, substantially increasing mobile app user interaction.",
      "Crafted responsive web components in React, integrating API calls with Axios and managing state with Redux and React hooks.",
      "Created dynamic data visualization widgets for analytics using Chart.js, enhancing user insights.",
      "Refined RESTful service architecture using Express.js and MongoDB, optimizing client-side data consumption.",
    ],
  },
  {
    title: "Crowdbotics",
    position: "Front End Developer (Contract)",
    data: [
      "Utilized cutting-edge technologies including React and Material UI to introduce and refine key UI features.",
      "Diligently documented progress and managed tasks using Jira, ensuring transparency and efficiency.",
      "Played a vital role in developing a data-driven dashboard for a DoD client, aiding in advanced pilot training.",
      "Actively engaged in an Agile environment, contributing to all Scrum ceremonies and bolstering product development.",
    ],
  },
];

const projects = [
  {
    title: "Coaches Code",
    description:
      "A web app that connects coaches with students in need of tutoring services.",
    img: coachesCodeImg,
    tech: ["React", "AWS Amplify", "GraphQL", "DynamoDB"],
    overview:
      "Coaches Code is an innovative web application designed to bridge the gap between experienced coaches and students seeking personalized tutoring. Utilizing the latest web technologies, it offers a platform for coaches to offer their services and for students to find the right guidance for their educational needs.",
    demoUrl: "",
    codeUrl: "https://github.com/alexmassimino9/CoachesCode",
  },
  {
    title: "Personal Portfolio",
    description:
      "A showcase of my development journey, featuring my projects, skills, and accomplishments. This portfolio is built with a focus on responsive design and seamless user experience, highlighting my expertise in React, AWS, and Material UI.",
    img: portfolioImg,
    tech: ["React", "AWS", "JavaScript", "Material UI"],
    overview:
      "This personal portfolio is a reflection of my growth as a developer. It showcases a range of projects, each illustrating different skills and technologies. Designed with attention to detail, the portfolio represents both my technical abilities and my journey in the world of web development.",
    demoUrl: "http://alexmassimino.com",
    codeUrl: "https://github.com/alexmassimino9/portfolio",
  },
  {
    title: "Taskify",
    description:
      "Taskify is a task management app built using React and TypeScript, marking my first venture into using TypeScript in project development. It features functionalities to add, edit, and remove tasks, providing a streamlined user interface for effective task organization.",
    img: taskifyImg,
    tech: ["React", "TypeScript", "CSS", "HTML"],
    overview:
      "Taskify is a sleek, user-friendly task management application, highlighting my first use of TypeScript in conjunction with React. The app features a clean interface for managing daily tasks, with capabilities for adding, editing, and marking tasks as complete.",
    codeUrl: "https://github.com/alexmassimino9/react-typescript-task-app",
    demoUrl: "/",
  },
];
const links = ["about", "experience", "projects", "contact"];
export { expList, projects, links };
