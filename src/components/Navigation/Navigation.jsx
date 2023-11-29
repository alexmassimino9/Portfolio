import React from "react";
import "./Navigation.css";
const Navigation = () => {
  const links = ["About", "Experience", "Work", "Services"];
  return (
    <nav className="container">
      <ul className="nav-list">
        <li className="brand-container">
          <a className="brand" href="/">
            AM
          </a>
        </li>
        {links.map((item, index) => {
          return (
            <li className="nav-item list-item" key={index}>
              <a href={`/`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
