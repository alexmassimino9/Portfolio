import React from "react";
import "./Button.css";

const Button = ({ title, onClick, href, type, download }) => {
  return (
    <button onClick={onClick} type={type}>
      <a href={href} download={download}>
        {title}
      </a>
    </button>
  );
};

export default Button;
