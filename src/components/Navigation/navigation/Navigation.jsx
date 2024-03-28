import React from "react";
import style from "./Navigation.module.css";
import { useMediaQuery } from "react-responsive";
import { Nav, MobileNav } from "../";
const Navigation = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 996px)",
  });

  return (
    <nav className={style.container}>
      <ul className={style.navList}>
        <li className={style.brandContainer}>
          <a className={style.brand} href="/">
            AM
          </a>
        </li>
        {isMobile ? <MobileNav /> : <Nav />}
      </ul>
    </nav>
  );
};

export default Navigation;
