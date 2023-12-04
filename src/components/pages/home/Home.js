import { Box } from "@mui/material";
import { WelcomeSection, SkillsSection } from "./";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100%",
        paddingTop: 10,
        fontFamily: "Roboto, sans-serif",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #e0e0e0, #111)",
      }}
    >
      <WelcomeSection />
      <SkillsSection />
      <Contact />
    </Box>
  );
};

export default Home;
