import React, { useEffect } from "react";
import { Container } from "@mui/system";
import projectData from "../data/projectData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Projects = () => {
  //render route to top of the component  !!TODO: make custom hook to make reusable for all routes on click
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      {projectData.map((project) => {
        const { key, name, url, img, code, tech } = project;
        return (
          <Card
            key={key}
            sx={{
              margin: "20px",
            }}
          >
            <CardMedia component="img" height="300" image={img} alt={name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography>{project.bio}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                variant="outlined"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
              <Button
                size="large"
                href={code}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </Button>
              <Typography>Tech used: {tech}</Typography>
            </CardActions>
          </Card>
        );
      })}
    </Container>
  );
};

export default Projects;
