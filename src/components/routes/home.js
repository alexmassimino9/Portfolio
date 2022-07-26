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
            My area of focus is primarily on the front-end. I specialize in
            creating web user interfaces using React and have extensive
            knowledge with various other technologies. My growth mindset and
            tenacious work ethics keep me motivated to continue expanding my
            skill set.
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
