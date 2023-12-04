import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import skillsData from "../../data/skillsData";

const SkillCard = ({ title, skills }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "2rem",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
        textAlign: "center",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          color: "#2ECC71",
          marginBottom: "2rem",
          fontSize: "2rem",
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill) => (
          <Grid item xs={4} key={skill.name}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {skill.icon &&
                React.createElement(skill.icon, { size: 48, color: "#2ECC71" })}
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  marginTop: "1rem",
                  fontFamily: "Montserrat, sans-serif",
                  color: "#444444",
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SkillsSection = () => {
  return (
    <Box
      sx={{
        padding: "4rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1F1F1",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          marginBottom: "4rem",
          textAlign: "center",
          color: "#444444",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "3.5rem",
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={4}>
        {skillsData.map((skill) => (
          <Grid item xs={12} md={6} lg={4} key={skill.title}>
            <SkillCard title={skill.title} skills={skill.skills} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
