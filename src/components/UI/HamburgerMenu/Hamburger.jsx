import React, { useState, useContext } from "react";
import { MemberContext } from "../NavBar";
import { Menu, MenuButton, MenuItem } from "./index";
import "../HamburgerMenu/hamburger.css";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // スタイリングはテイルウィンドであとでやる
  const styles = {
    container: {
      textAlign: "center",
      position: "absolute",
      top: "30%",
      left: "3%",
      zIndex: "99",
      opacity: 0.9,
      display: "flex",
      alignItems: "center",
      // background: "black",
      // width: "100%",
      color: "white",
      fontFamily: "Lobster",
    },
    logo: {
      margin: "0 auto",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      filter: menuOpen ? "blur(2px)" : null,
      transition: "filter 0.5s ease",
    },
  };

  // const menuAll = ["Home", "Sign in", "Sing up", "AboutUS", "Contact"];
  // const menuMember = [
  //   "Home",
  //   "User",
  //   "Input",
  //   "Setting",
  //   "Sign Out",
  //   "AboutUS",
  //   "Contact",
  // ];

  // ----------------------------------
  const isMember = useContext(MemberContext);
  const menu = isMember
    ? ["Home", "User", "Input", "Setting", "Sign Out", "AboutUS", "Contact"]
    : ["Home", "Sign in", "Sing up", "AboutUS", "Contact"];
  // ----------------------------------

  const menuItems = menu.map((val, index) => {
    return (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}
        onClick={() => {
          handleLinkClick();
        }}
      >
        {val}
      </MenuItem>
    );
  });

  return (
    <>
      <div style={styles.container} className="text-black">
        <MenuButton
          open={menuOpen}
          onClick={() => handleMenuClick()}
          color="white"
        />
      </div>
      <Menu open={menuOpen}>{menuItems}</Menu>
    </>
  );
};

export default Hamburger;
