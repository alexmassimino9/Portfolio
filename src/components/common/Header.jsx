import React from "react";
import style from "./Header.module.css";
const Header = ({ title }) => {
  return (
    <div className={style.container}>
      <div className={style.underline}></div>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
