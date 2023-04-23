import { Typography, Button, Box, Grid } from "@mui/material";
import resume from "../../../assets/AmassiminoResume.pdf";
import { useNavigate } from "react-router-dom";

function WelcomeSection() {
  const navigate = useNavigate();
  const handleProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "2rem auto",
        maxWidth: "800px",
        padding: "1rem",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "1.5rem", fontWeight: 700 }}>
        Hello, I'm Alex.
      </Typography>
      <Typography
        variant="h2"
        sx={{ marginBottom: "1rem", fontWeight: 500, color: "#1A1A1A" }}
      >
        Frontend Developer.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "1.5rem",
          fontWeight: 300,
          lineHeight: "1.8",
          color: "#666666",
          maxWidth: "600px",
        }}
      >
        As a skilled frontend developer, I specialize in creating robust and
        scalable web applications using cutting-edge technologies such as React,
        Node.js, MongoDB, and Express. I have experience developing RESTful APIs
        and implementing user-friendly and visually appealing designs using
        frameworks like Material-UI. My passion for technology drives me to stay
        up-to-date with the latest industry advancements, providing my clients
        with innovative and effective solutions. I am committed to delivering
        high-quality results and always strive to exceed client expectations.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 500,
              borderRadius: "50px",
              textTransform: "none",
              padding: "12px 32px",
              backgroundColor: "#2ECC71",
              "&:hover": { backgroundColor: "#27AE60" },
              width: "100%",
            }}
            onClick={handleProjectsClick}
          >
            View My Projects
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontWeight: 500,
              borderRadius: "50px",
              textTransform: "none",
              padding: "12px 32px",
              borderColor: "#2ECC71",
              color: "#2ECC71",
              "&:hover": { borderColor: "#27AE60", color: "#27AE60" },
              width: "100%",
            }}
            href={resume}
            download
          >
            Download My Resume
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WelcomeSection;
