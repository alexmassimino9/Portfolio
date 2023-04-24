import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#2ECC71", boxShadow: "none" }}>
      <Toolbar sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          My Portfolio
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            component={Link}
            to="/projects"
            sx={{
              margin: "0 15px",
              bgcolor: "#FFF",
              color: "#2ECC71",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#FFF",
                color: "#2ECC71",
                boxShadow: "none",
              },
            }}
          >
            Projects
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            sx={{
              bgcolor: "#FFF",
              color: "#2ECC71",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#FFF",
                color: "#2ECC71",
                boxShadow: "none",
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
