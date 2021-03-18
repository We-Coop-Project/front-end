import React, { useState, useContext } from "react";
import { MemberContext } from "../NavBar";
import { Menu, MenuButton, MenuItem } from "./index";
import "../HamburgerMenu/hamburger.css";
import { Link } from "react-router-dom";

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
    ? ["Home", "User", "Input", "Setting", "Sign Out", "AboutUS", "Contact"]
    : ["Home", "Sign in", "Sing up", "AboutUS", "Contact"];
  // ----------------------------------

  const menuItems = menu.map((val, index) => {
    return (
      <Link to={`/${pathArray[index]}`}>
        <MenuItem
          key={index}
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
    </>
  );
};

export default Hamburger;
