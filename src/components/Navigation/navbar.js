import * as React from "react";
import AppBar from "@mui/material/AppBar";
import NavButton from "./navButton";
import NavToolbar from "./navToolbar";

const Navbar = () => {
  const pages = ["Projects", "Contact"];
  return (
    <AppBar>
      <NavToolbar>
        <NavButton to="/portfolio/">Home</NavButton>
        {pages.map((page) => {
          return (
            <NavButton key={page} to={`/portfolio/${page}`}>
              {page}
            </NavButton>
          );
        })}
      </NavToolbar>
    </AppBar>
  );
};

export default Navbar;
