import React from "react";
import styles from "./Top.module.css";
import { Button } from "../common";
import resume from "../../assets/Resume.pdf";
const Top = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topContent}>
        <h1>Alex Massimino</h1>
        <h2>Software Engineer</h2>
        <p>
          Experienced Software Engineer specializing in crafting engaging,
          data-driven web applications. Combining cutting-edge technologies with
          a keen eye for design to create intuitive and dynamic user
          experiences.
        </p>
      </div>
      <div className={styles.btnContainer}>
        <Button title="Projects" href={`/#projects`} />
        <Button
          title="Resume"
          href={resume}
          target="_blank"
          download={resume}
        />
      </div>
    </section>
  );
};

export default Top;
