import { Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Home = () => {
  return (
    <Box sx={{}}>
      <main className="main">
        <section
          className="main-text"
          style={{
            border: "2px solid yellow",
            maxWidth: "70vw",
          }}
        >
          <h1>Welcome to my page</h1>
          <h2> Im Alex , a web developer</h2>
          <h3>
            My area of focus is primarily on the front-end. I specialize in
            creating web user interfaces using React and have extensive
            knowledge with various other technologies. My growth mindset and
            tenacious work ethics keep me motivated to continue expanding my
            skill set.
          </h3>
        </section>
        <section>
          <h4> Check out some of my projects: </h4>
          <button className="link"> projects</button>
          <button className="link">resume</button>
        </section>
      </main>
    </Box>
  );
};

export default Home;
