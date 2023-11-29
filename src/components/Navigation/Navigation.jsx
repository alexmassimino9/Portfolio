import React from "react";
import "./Navigation.css";
import { useMediaQuery } from "react-responsive";
import { CiMenuBurger } from "react-icons/ci";
const Navigation = () => {
  const links = ["About", "Experience", "Work", "Services"];
  const isMobile = useMediaQuery({
    query: "(max-width: 996px)",
  });
  // const handleMobile = () => {};
  return (
    <nav className="container">
      <ul className="nav-list">
        <li className="brand-container">
          <a className="brand" href="/">
            AM
          </a>
        </li>
        {isMobile ? (
          <li>
            <CiMenuBurger
              onPress=""
              width="20px"
              className="mobile-btn"
              size="30"
            />
          </li>
        ) : (
          links.map((item, index) => {
            return (
              <li className="nav-item list-item list-item-mobile" key={index}>
                <a href={`/`}>{item}</a>
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
