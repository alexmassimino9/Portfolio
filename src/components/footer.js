import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <section className="footer">
      <button className="btn-icon">
        <a href="https://github.com/alexmassimino9">
          <GitHubIcon
            className="icon"
            sx={{
              fontSize: "45px",
            }}
          />
        </a>
      </button>
      <button className="btn-icon">
        <a href="https://github.com/alexmassimino9">
          <LinkedInIcon
            className="icon"
            sx={{
              fontSize: "45px",
            }}
          />
        </a>
      </button>
      <button className="btn-icon">
        <a href="https://github.com/alexmassimino9">
          <InstagramIcon
            className="icon"
            sx={{
              fontSize: "45px",
            }}
          />
        </a>
      </button>
      <span className="copyright"> Alexander Massimino 2022 ©</span>
    </section>
  );
};

export default Footer;
