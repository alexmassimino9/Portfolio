import React from "react";
import "./Button.css";

const Button = ({ title, onClick, href, type, download }) => {
  return (
    <a href={href} download={download} onClick={onClick} type={type}>
      {title}
    </a>
  );
};

export default Button;
