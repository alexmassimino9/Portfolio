import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = ["Home", "About", "Contact"];
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "lavender",
        height: "10vh",
        justifyContent: "center",
      }}
    >
      <ButtonGroup
        size="large"
        variant="text"
        sx={{
          backgroundColor: "lightgreen",
          alignSelf: "flex-end",
        }}
      >
        {pages.map((page) => (
          <>
            <Button>
              <Link to={`/${page}`}>{page}</Link>
            </Button>
          </>
        ))}
      </ButtonGroup>
    </AppBar>
  );
};

export default Navbar;
