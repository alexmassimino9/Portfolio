import React, { useState } from "react";
import style from "./Navigation.module.css";
import { CiMenuFries } from "react-icons/ci";
import { links } from "../../../data/data";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return !isMenuOpen ? ( // negate this to fix
    <aside className={style.mobileNavContainer}>
      <ul className={style.navList}>
        {links.map((link, index) => {
          return (
            <li className={style.navItem} key={index}>
              <a>{link}</a>
            </li>
          );
        })}
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
