import React from "react";
import "./Button.css";

const Button = ({ title, onClick, href, type }) => {
  return (
    <button onClick={onClick} type={type}>
      <a href={href}> {title}</a>
    </button>
  );
};

export default Button;
