import React from "react";
import { Toolbar } from "@mui/material";
const NavToolbar = ({ children }) => {
  return (
    <Toolbar
      sx={{
        bgcolor: "var(--main)",
        justifyContent: "center",
      }}
    >
      {children}
    </Toolbar>
  );
};

export default NavToolbar;
