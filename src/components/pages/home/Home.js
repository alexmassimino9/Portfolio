import { Box } from "@mui/material";
import { WelcomeSection, SkillsSection } from "./";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100%",
        paddingTop: 10,
        fontFamily: "Roboto, sans-serif",
        paddingBottom: 40,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #e0e0e0, #111)",
      }}
    >
      <div>
        <WelcomeSection />
        <div style={{ height: 80 }} />
        <SkillsSection />
      </div>
    </Box>
  );
};

export default Home;
