import React from "react";
import "./Button.css";

const Button = ({ title, onClick, href }) => {
  return (
    <button onClick={onClick} href={href}>
      <a href={href}> {title}</a>
    </button>
  );
};

export default Button;
