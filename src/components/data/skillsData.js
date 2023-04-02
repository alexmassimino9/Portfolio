import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaGitAlt,
} from "react-icons/fa";
const skillsData = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React", icon: FaReact },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "MUI" },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express" },
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "AWS Amplify" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "DynamoDB", icon: FaDatabase },
      { name: "MongoDB" },
      { name: "MySQL" },
    ],
  },
  {
    title: "Cloud Services",
    skills: [
      { name: "AWS EC2", icon: FaCloud },
      { name: "Lambda" },
      { name: "S3" },
      { name: "CloudFront" },
      { name: "Route 53" },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Agile Development" },
      { name: "CI/CD" },
      { name: "Scrum" },
      { name: "Jira" },
      { name: "Confluence" },
    ],
  },
];

export default skillsData;
