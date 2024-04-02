import React, { useState } from "react";
import style from "./Navigation.module.css";
import { CiMenuFries } from "react-icons/ci";
import { links } from "../../../data/data";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return isMenuOpen ? (
    <aside className={style.mobileNavContainer}>
      <CiMenuFries
        size={50}
        className={style.mobileNavBtn}
        onClick={() => toggleMenu()}
      />
      <ul className={style.mobileNavList}>
        {links.map((link, index) => (
          <li className={style.navItem} key={index}>
            <a href={`#${link}`} onClick={() => toggleMenu()}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  ) : (
    <CiMenuFries
      size={50}
      className={style.mobileBtn}
      onClick={() => toggleMenu()}
    />
  );
};

export default MobileNav;
