import React, { useState } from "react";
import style from "./Navigation.module.css";
import { useMediaQuery } from "react-responsive";
import { CiMenuBurger } from "react-icons/ci";
import { links } from "../../../data/data";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
          <>
            <li>
              <CiMenuBurger
                onClick={toggleMenu}
                className={style.mobileBtn}
                size="35"
              />
            </li>
            {isMenuOpen && (
              <div className={style.mobileMenu}>
                {links.map((item, index) => (
                  <li className={style.navItem} key={index}>
                    <a href={`#${item}`} onClick={() => setIsMenuOpen(false)}>
                      {item.toUpperCase()}
                    </a>
                  </li>
                ))}
              </div>
            )}
          </>
        ) : (
          links.map((item, index) => (
            <li className={style.navItem} key={index}>
              <a href={`#${item}`}>{item.toUpperCase()}</a>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
