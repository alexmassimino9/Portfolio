import * as React from "react";
import AppBar from "@mui/material/AppBar";

import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = ["Projects", "Contact"];
  return (
    <AppBar>
      <Toolbar className="navbar">
        <Link to="/portfolio/" className="link">
          Home
        </Link>
        {pages.map((page) => {
          return (
            <Link key={page} className="link" to={`/portfolio/${page}`}>
              {page}
            </Link>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
