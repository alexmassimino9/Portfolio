import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <section className="footer">
      <button className="btn-icon">
        <a
          href="https://github.com/alexmassimino9"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon
            className="icon"
            sx={{
              fontSize: "45px",
            }}
          />
        </a>
      </button>
      <button className="btn-icon">
        <a
          href="https://github.com/alexmassimino9"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon
            className="icon"
            sx={{
              fontSize: "45px",
            }}
          />
        </a>
      </button>
      <button className="btn-icon">
        <a
          href="https://www.instagram.com/minocodes/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <InstagramIcon
            className="icon"
            sx={{
              fontSize: "45px",
            }}
          />
        </a>
      </button>
      <span className="copyright"> © Alexander Massimino 2022 </span>
      <span
        style={{
          color: "white",
          fontSize: "10px",
        }}
      >
        created by Alexander Massimino - all rights reserved
      </span>
    </section>
  );
};

export default Footer;
