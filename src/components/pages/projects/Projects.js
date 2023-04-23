import React, { useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import projectData from "../../data/projectData";
import Project from "./Project";
import { styled } from "@mui/material/styles";

const Background = styled(Box)({
  backgroundColor: "#F8F8F8",
});

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Background>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            letterSpacing: "0.05em",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            color: "#1C1C1C",
            textShadow: "2px 2px #F8F8F8",
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
            fontFamily: "Roboto, sans-serif",
            color: "#4F4F4F",
            lineHeight: "1.5em",
          }}
        >
          Check out some of my recent projects below.
        </Typography>
        <Grid container spacing={4}>
          {projectData.map((project) => (
            <Project
              key={project.key}
              project={project}
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.2s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            />
          ))}
        </Grid>
      </Container>
    </Background>
  );
};

export default Projects;
