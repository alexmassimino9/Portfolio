import React from "react";
import { IconButton, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2c2f33",
        color: "white",
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          href="https://github.com/alexmassimino9"
          target="_blank"
          rel="noreferrer noopener"
          sx={{
            color: "white",
            fontSize: "64px",
            marginRight: "20px",
            "&:hover": {
              color: "#8B8B8B",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/alexandermassimino/"
          target="_blank"
          rel="noreferrer noopener"
          sx={{
            color: "white",
            fontSize: "64px",
            marginRight: "20px",
            "&:hover": {
              color: "#8B8B8B",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          // prompt user to send email to alexmassimino9@gmail.com
          href="mailto:alexmassimino9@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          sx={{
            color: "white",
            fontSize: "64px",
            marginRight: "20px",
            "&:hover": {
              color: "#8B8B8B",
            },
          }}
        >
          <EmailIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
          © Alexander Massimino 2023
        </Typography>
        <Typography variant="caption" sx={{ fontSize: "12px", mt: 1 }}>
          created by Alexander Massimino - all rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
