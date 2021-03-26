import React from "react";
import { Menu, MenuButton, MenuItem, Button } from "./index";
import "../HamburgerMenu/hamburger.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/Auth-context";
import { useHamOpen } from "../../../context/HamOpen-context";

const Hamburger = () => {
  const { currentUser, logout } = useAuth();
  const { menuOpen, setMenuOpen } = useHamOpen();

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

  const styles = {
    container: {
      animation: "3s appear forwards",
    },
    menuItem: {
      animation: "2s slideIn forwards",
    },
    line: {
      animation: "2s shrink forwards",
    },
  };

  return (
    <>
      <div className="z-50">
        {/*  もし左上なら、absolute top-1/3 left-3 z-50 */}
        <MenuButton onClick={() => handleMenuClick()} />
      </div>
      <Menu>
        {menuItems}
        {currentUser ? (
          <div style={styles.container}>
            <div style={styles.menuItem}>
              <div className="text-center mt-14">
                <Button id="signOut" button="Sign Out" onClick={logout} />
              </div>
            </div>
          </div>
        ) : null}
      </Menu>
    </>
  );
};

export default Hamburger;
