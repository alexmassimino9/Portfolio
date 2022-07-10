import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import LandingPage from "./landingPage";
const Navbar = () => {
  const pages = ["Home", "About", "Contact"];
  return (
    <>
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
          <Link to={"/"}>
            <CodeIcon
              sx={{
                bgcolor: "lightBlue",
                position: "absolute",
                right: "90%",
              }}
              fontSize="large"
            ></CodeIcon>
          </Link>
          {pages.map((page) => (
            <Button>
              <Link to={`/${page}`}>{page}</Link>
            </Button>
          ))}
        </ButtonGroup>
      </AppBar>
      <LandingPage />
    </>
  );
};

export default Navbar;
