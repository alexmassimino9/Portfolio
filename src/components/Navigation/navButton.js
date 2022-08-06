import React from "react";
import { Button } from "@mui/material";
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

export default NavButton;
