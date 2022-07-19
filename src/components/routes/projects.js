import React, { useEffect } from "react";
import { Container } from "@mui/system";

const Projects = () => {
  //render route to top of the component  !!TODO: make custom hook to make reusable for all routes on click
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, []);
  return (
    <Container
      fixed
      sx={{
        bgcolor: "#EDDFB3",
      }}
    >
      <div>
        <h2>projects</h2>
      </div>
    </Container>
  );
};

export default Projects;
