import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material/";
import { Link } from "react-router-dom";

const NavButton = ({ to, children }) => {
  return (
    <Button
      sx={{
        bgcolor: "var(--mainLight)",
        "&:hover": {
          bgcolor: "var(--mainDark)",
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
    <AppBar>
      <Toolbar
        sx={{
          bgcolor: "purple",
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
