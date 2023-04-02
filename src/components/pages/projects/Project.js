import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  CardActions,
} from "@mui/material";

const Project = ({ project }) => {
  const { name, url, img, code, tech, bio } = project;

  const handleViewDemoClick = () => window.open(url, "_blank").focus();
  const handleViewCodeClick = () => window.open(code, "_blank").focus();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt={name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1, padding: "1.5rem" }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ mb: "1rem", fontFamily: "Montserrat", fontWeight: 600 }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: "1.5rem", fontFamily: "Roboto", fontWeight: 300 }}
          >
            {bio}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: "1.5rem" }}>
            {tech.split(",").map((t, index) => (
              <Typography
                key={index}
                variant="body2"
                color="secondary"
                sx={{ fontFamily: "Roboto", fontWeight: 400 }}
              >
                {t}
              </Typography>
            ))}
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", padding: "1.5rem" }}>
          <Button
            size="large"
            variant="contained"
            onClick={handleViewDemoClick}
            sx={{
              mr: "1rem",
              fontFamily: "Roboto",
              fontWeight: 400,
              backgroundColor: "#2ECC71",
              color: "white",
              "&:hover": { backgroundColor: "#27AE60" },
            }}
          >
            View Demo
          </Button>
          <Button
            size="large"
            variant="outlined"
            onClick={handleViewCodeClick}
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              color: "#2ECC71",
              borderColor: "#2ECC71",
            }}
          >
            View Code
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Project;
