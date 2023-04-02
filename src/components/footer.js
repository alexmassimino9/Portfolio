import React from "react";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2c2f33",
        color: "white",
        height: "15vh",
        width: "100%",
      }}
    >
      <IconButton
        href="https://github.com/alexmassimino9"
        target="_blank"
        rel="noreferrer noopener"
        sx={{ color: "white", fontSize: "45px", marginRight: "20px" }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/alexmassimino9/"
        target="_blank"
        rel="noreferrer noopener"
        sx={{ color: "white", fontSize: "45px", marginRight: "20px" }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/minocodes/"
        target="_blank"
        rel="noreferrer noopener"
        sx={{ color: "white", fontSize: "45px", marginRight: "20px" }}
      >
        <InstagramIcon />
      </IconButton>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "10px",
        }}
      >
        <span> © Alexander Massimino 2022 </span>
        <span style={{ marginTop: "5px" }}>
          created by Alexander Massimino - all rights reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
