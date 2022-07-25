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
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        gutterBottom
        variant="h1"
        component="div"
      >
        Projects
      </Typography>
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
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                fontFamily="'Edu VIC WA NT Beginner', cursive"
              >
                {name}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                fontFamily="Fira Sans, sans-serif"
                fontWeight="800"
              >
                {project.bio}
              </Typography>
            </CardContent>
            <CardActions className="cardActions">
              <Button
                size="large"
                color="error"
                variant="contained"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Button>
              <Button
                size="large"
                color="error"
                variant="contained"
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
