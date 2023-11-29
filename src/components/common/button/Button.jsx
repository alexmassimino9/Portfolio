import React from "react";
import "./Button.css";

const Button = ({ title, onClick, href }) => {
  return (
    <button onClick={onClick} href={href}>
      {title}
    </button>
  );
};

export default Button;
