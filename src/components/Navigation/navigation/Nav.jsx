import React from "react";
import { links } from "../../../data/data";
import style from "./Navigation.module.css";
const Nav = () => {
  return (
    <ul className={style.navList}>
      {links.map((link, index) => {
        return (
          <li className={style.navItem} key={index}>
            <a href={`#${link}`}>{link}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
