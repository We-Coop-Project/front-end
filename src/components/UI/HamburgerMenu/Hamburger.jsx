import React, { useState, useContext, useEffect } from "react";
import { MemberContext } from "../NavBar";
import { Menu, MenuButton, MenuItem } from "./index";
import "../HamburgerMenu/hamburger.css";
import { Link } from "react-router-dom";
import VersionBtn from "../VersionBtn";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // ----------------------------------
  const isMember = useContext(MemberContext);

  const pathArray = isMember
    ? ["", "user", "input", "setting", "signout", "aboutus", "contact"]
    : ["", "signin", "singup", "aboutus", "contact"];

  const menu = isMember
    ? ["Home", "User", "Input", "Setting", "Sign Out", "AboutUs", "Contact"]
    : ["Home", "Sign in", "Sing up", "AboutUs", "Contact"];
  // ----------------------------------

  const menuItems = menu.map((val, index) => {
    return (
      <Link to={`/${pathArray[index]}`} key={index}>
        <MenuItem
          delay={`${index * 0.1}s`}
          onClick={() => {
            handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      </Link>
    );
  });

  return (
    <>
      <div className="absolute top-1/3 left-3 z-50">
        <MenuButton open={menuOpen} onClick={() => handleMenuClick()} />
      </div>
      <Menu open={menuOpen}>{menuItems}</Menu>
      {/* <li>
        <VersionBtn />
      </li> */}
    </>
  );
};

export default Hamburger;