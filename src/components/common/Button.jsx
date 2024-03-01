import React from "react";
import style from "./Button.module.css";

const Button = ({ title, onClick, href, type, download }) => {
  return (
    <a
      className={style.btn}
      href={href}
      download={download}
      onClick={onClick}
      type={type}
    >
      {title}
    </a>
  );
};

export default Button;
