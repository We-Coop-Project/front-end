import React, { useContext } from "react";
import { MemberContext } from "../NavBar";
import { Link } from "react-router-dom";

const NonHamburger = () => {
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
      <Link to={`/${pathArray[index]}`}>
        <li className="inline-block cursor-pointer p-6 ">{val}</li>
      </Link>
    );
  });

  return <ul className="hidden lg:block ">{menuItems}</ul>;
};

export default NonHamburger;
