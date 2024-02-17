import React from "react";
import style from "./Projects.module.css";
import { Header, Button } from "../common/";
import { projects } from "../../data/data";

const Projects = () => {
  // TODO: refactor into multiple smaller components to reduce complexity
  return (
    <section id="projects" className={style.container}>
      <Header title="Projects" />
      <div className={style.projectContainer}>
        <h4 className={style.featuredProjects}>Featured Projects</h4>
        <ul className={style.projectList}>
          {projects.map((project, projectIndex) => (
            <li key={project.id || projectIndex} className={style.project}>
              <div className={style.projectContent}>
                <div className={style.projectLeft}>
                  <h4>{project.title}</h4>
                  <img
                    src={project.img}
                    className={style.img}
                    alt={`${project.title} project`}
                  />
                  <ul className={style.techContainer}>
                    {project.tech.map((techItem, techIndex) => (
                      <li className={style.tech} key={techIndex}>
                        {techItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={style.projectRight}>
                  <h4 className={style.overviewTitle}>Overview</h4>
                  <p className={style.projectOverview}>{project.overview}</p>
                  <div className={style.projectLinks}>
                    {project.demoUrl && (
                      <Button
                        title="View Demo"
                        href={project.demoUrl}
                        className={style.demoButton}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    )}
                    {project.codeUrl && (
                      <Button
                        title="View Code"
                        href={project.codeUrl}
                        className={style.demoButton}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
