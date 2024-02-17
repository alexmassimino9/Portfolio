import React from "react";
import style from "./About.module.css";
import { Header, Button } from "../common";
import portrait from "../../assets/images/portrait.jpg";
import { Tech } from ".";
const About = () => {
  return (
    <section id="about" className={style.container}>
      <Header title="About" />
      <main className={style.content}>
        <div className={style.textContent}>
          <p>
            During my journey as a Frontend Engineer, I've had the opportunity
            to work in diverse industries, including Defense, Social Media, and
            Hospitality, where I've applied my skills to a variety of
            challenging projects.I specialize in developing intricate data
            visualizations, enhancing user understanding and interaction with
            robust user interfaces. My technical toolkit is centered around the
            MERN stack, enabling me to construct robust, scalable applications.
            Additionally, my experience with WordPress and AWS further broadens
            my capabilities in delivering comprehensive digital solutions.
            Beyond my professional pursuits, I am passionate about soccer,
            dedicating time to coaching youth teams, a commitment that reflects
            my enthusiasm for team building, collaboration and competitiveness.
          </p>
          <Button title="Contact Me" href={`/#contact`} />
        </div>
        <div className={style.imageContent}>
          <img src={portrait} alt="Alex Massimino" />
        </div>
      </main>
      <Tech />
    </section>
  );
};

export default About;
