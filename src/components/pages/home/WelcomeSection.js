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
        Alex Massimino
      </Typography>
      <Typography
        variant="h4"
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
        As a frontend developer, I specialize in React, TypeScript, MUI, and
        Redux. My expertise lies in building data-driven user interfaces, , and
        custom data visualization dashboards. I am proficient in using React
        hooks and Redux to manage state and have a strong understanding of
        responsive web design principles. I stay up-to-date with the latest
        technologies to deliver impactful products. With experience using agile
        methodologies, Jira, and Git, I work efficiently and effectively in team
        environments.
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
