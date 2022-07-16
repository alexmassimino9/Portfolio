import * as React from "react";
import AppBar from "@mui/material/AppBar";

import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = ["Projects", "Contact"];
  return (
    <AppBar position="sticky">
      <Toolbar className="navbar">
        <Link to="/" className="link">
          Home
        </Link>
        {pages.map((page) => {
          return (
            <Link key={page} className="link" to={`/${page}`}>
              {page}
            </Link>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
