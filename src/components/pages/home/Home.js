import { Box } from "@mui/material";
import React from "react";
import { WelcomeSection, SkillsSection } from "./";

const Home = () => {
  return (
    <Box
      sx={{
        marginTop: "11vh",
      }}
    >
      <WelcomeSection />
      <SkillsSection />
    </Box>
  );
};

export default Home;
