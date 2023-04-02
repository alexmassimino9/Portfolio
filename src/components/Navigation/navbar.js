import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material/";
import { Link } from "react-router-dom";

const NavButton = ({ to, children }) => {
  return (
    <Button
      sx={{
        bgcolor: "#2ECC71",
        color: "#FFF",
        "&:hover": {
          bgcolor: "#27AE60",
        },
        margin: "5px",
      }}
      className="link"
      variant="contained"
      component={Link}
      to={to}
    >
      {children}
    </Button>
  );
};

const Navbar = () => {
  const pages = ["projects", "contact"];
  return (
    <AppBar sx={{ bgcolor: "#F4F4F4", color: "#1A1A1A" }}>
      <Toolbar
        sx={{
          height: "10vh",
          justifyContent: "center",
        }}
      >
        <NavButton to="/">Home</NavButton>
        {pages.map((page) => {
          return (
            <NavButton key={page} to={`/${page}`}>
              {page}
            </NavButton>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
