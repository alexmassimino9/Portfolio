import * as React from "react";
import AppBar from "@mui/material/AppBar";
import NavButton from "./NavButton";
import NavToolbar from "./NavToolbar";

const Navbar = () => {
  const pages = ["projects", "contact"];
  return (
    <AppBar>
      <NavToolbar>
        <NavButton to="/">Home</NavButton>
        {pages.map((page) => {
          return (
            <NavButton key={page} to={`/${page}`}>
              {page}
            </NavButton>
          );
        })}
      </NavToolbar>
    </AppBar>
  );
};

export default Navbar;
