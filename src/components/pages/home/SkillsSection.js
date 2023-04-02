import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import skillsData from "../../data/skillsData";

const SkillCard = ({ title, skills }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "1.5rem",
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
          fontWeight: 700,
          color: "#2ECC71",
          marginBottom: "0.5rem",
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
              {skill.icon && React.createElement(skill.icon, { size: 48 })}
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 500, marginTop: "0.5rem" }}
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
    <Box sx={{ backgroundColor: "#F4F4F4", padding: "2rem" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}
      >
        Skills
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
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
