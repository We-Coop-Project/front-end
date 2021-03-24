import React, { useState } from "react";
// import { MemberContext } from "../NavBar";
import { Menu, MenuButton, MenuItem, Button } from "./index";
import "../HamburgerMenu/hamburger.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/Auth-context";

const Hamburger = () => {
  const { currentUser, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // ----------------------------------

  const pathArray = currentUser
    ? ["", "user", "input", "setting", "aboutus", "contact"]
    : ["", "signin", "aboutus", "contact"];

  const menu = currentUser
    ? ["Home", "User", "Input", "Setting", "About Us", "Contact"]
    : ["Home", "Sign In", "About Us", "Contact"];
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
      <div className="z-50">
        {/*  もし左上なら、absolute top-1/3 left-3 z-50 */}
        <MenuButton open={menuOpen} onClick={() => handleMenuClick()} />
      </div>
      <Menu open={menuOpen}>
        {menuItems}
        {currentUser ? (
          <div className="text-center mt-5">
            <Button id="signOut" button="Sign Out" onClick={logout} />
          </div>
        ) : null}
      </Menu>
    </>
  );
};

export default Hamburger;
