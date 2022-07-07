import React from "react";
import { Container } from "@mui/system";

const About = () => {
  return (
    <Container
      fixed
      sx={{
        height: "100vh",
        bgcolor: "#EDDFB3",
      }}
    >
      <h1>
        I'm Alex and I{" "}
        <em>
          <s>don't</s>
        </em>{" "}
        know what I am doing
      </h1>
    </Container>
  );
};

export default About;
