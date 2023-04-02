import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import projectData from "../../data/projectData";
import Project from "./Project";

const Projects = () => {
  //render route to top of the component  !!TODO: make custom hook to make reusable for all routes on click
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
          }}
        >
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projectData.map((project) => (
            <Project key={project.key} project={project} />
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Projects;
