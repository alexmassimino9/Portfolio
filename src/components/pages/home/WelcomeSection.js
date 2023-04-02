import { Typography, Button, Box, Grid } from "@mui/material";
import resume from "../../../assets/Amassimino.png";

function WelcomeSection() {
  const handleProjectsClick = () => {
    // handle routing logic
  };

  return (
    <Box sx={{ textAlign: "center", margin: "2rem auto", maxWidth: "800px" }}>
      <Typography variant="h3" sx={{ marginBottom: "1.5rem", fontWeight: 700 }}>
        Hello, I'm Alex.
      </Typography>
      <Typography
        variant="h2"
        sx={{ marginBottom: "1rem", fontWeight: 500, color: "#1A1A1A" }}
      >
        I'm a Frontend Developer.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "1.5rem",
          fontWeight: 300,
          lineHeight: "1.8",
          color: "#666666",
        }}
      >
        I specialize in creating high-quality, modern web applications using
        cutting-edge technologies such as React, TypeScript, JavaScript, and AWS
        services including Amplify, EC2, and DynamoDB. I have extensive
        experience building both RESTful APIs and GraphQL APIs and I leverage
        frameworks like MUI to ensure a polished and user-friendly experience.
        My passion for technology motivates me to constantly learn and stay
        up-to-date with the latest advancements in the industry. This helps me
        provide the most innovative and effective solutions for my clients.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
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
            }}
            onClick={handleProjectsClick}
          >
            View My Projects
          </Button>
        </Grid>
        <Grid item>
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
