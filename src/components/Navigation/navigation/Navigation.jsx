import React from "react";
import style from "./Navigation.module.css";
import { useMediaQuery } from "react-responsive";
import { CiMenuBurger } from "react-icons/ci";
const Navigation = () => {
  const links = ["About", "Experience", "Projects", "Services", "Contact"];
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
        {isMobile ? (
          <li>
            <CiMenuBurger width="40px" className={style.mobileBtn} size="30" />
          </li>
        ) : (
          links.map((item, index) => {
            return (
              <li className={style.navItem} key={index}>
                <a href={`/`}>{item}</a>
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
