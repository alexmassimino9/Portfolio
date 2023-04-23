import React, { useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import projectData from "../../data/projectData";
import Project from "./Project";
import { styled } from "@mui/material/styles";

const Background = styled(Box)({
  background: "linear-gradient(180deg, #F9FAFB 0%, #EFF1F3 100%)",
});

const Projects = () => {
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, []);

  return (
    <Background>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            letterSpacing: "0.05em",
            textAlign: "center",
            color: "#1C1C1C",
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            mb: 4,
            fontWeight: 400,
            letterSpacing: "0.05em",
            textAlign: "center",
            color: "#4F4F4F",
          }}
        >
          Check out some of my recent projects below.
        </Typography>
        <Grid container spacing={4}>
          {projectData.map((project) => (
            <Project key={project.key} project={project} />
          ))}
        </Grid>
      </Container>
    </Background>
  );
};

export default Projects;
