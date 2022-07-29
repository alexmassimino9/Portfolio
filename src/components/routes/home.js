import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import resume from "../../assets/Amassimino.png";

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/portfolio/projects";
    navigate(path);
  };

  return (
    <Box
      sx={{
        fontFamily: "Edu VIC WA NT Beginner, cursive",
      }}
    >
      <main className="main">
        <section className="main-text">
          <h3>Welcome to my page</h3>
          <h2> Im Alex , a web developer</h2>
          <h5 className="bio">
            A majority of my experience has been developing front end components
            and user interfaces using React JS , JavaScript, CSS, and HTML, to
            name a few. I enjoy the problem solving aspect that developing
            provides me. Always having something new to learn fuels my passion!
          </h5>

          <h4> Get to know know more about me</h4>
          <button className="btn" onClick={() => routeChange()}>
            projects
          </button>
          <button className="btn">
            <a id="resume" href={resume} download>
              resume
            </a>
          </button>
        </section>
      </main>
    </Box>
  );
};

export default Home;
