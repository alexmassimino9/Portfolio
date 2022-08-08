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
    <main>
      <Container>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "apple-system",
          }}
          gutterBottom
          variant="h2"
          component="title"
        >
          Projects
        </Typography>
        {projectData.map((project) => {
          const { key, name, url, img, code, tech, bio } = project;
          return (
            <Card
              key={key}
              sx={{
                marginTop: "25px",
              }}
            >
              <CardMedia component="img" height="300" image={img} alt={name} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  fontFamily="'Edu VIC WA NT Beginner', cursive"
                  color="black"
                >
                  {name}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  fontFamily="Fira Sans, sans-serif"
                  color="black"
                >
                  {bio}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  color="secondary"
                  size="large"
                  variant="contained"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
                <Button
                  color="secondary"
                  size="large"
                  variant="contained"
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </Button>
                <Typography
                  sx={{
                    color: "black",
                  }}
                >
                  Tech used: {tech}
                </Typography>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </main>
  );
};

export default Projects;
