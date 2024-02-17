import React, { useState } from "react";
import style from "./Navigation.module.css";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return isMenuOpen ? (
    <>
      <div>enter side menu</div>
    </>
  ) : (
    <CiMenuFries
      size={50}
      className={style.mobileBtn}
      onClick={() => toggleMenu()}
    />
  );
};

export default MobileNav;
