import React, { useContext } from "react";
import { MemberContext } from "../NavBar";
import { Link } from "react-router-dom";
import Button from "../Button";

const NonHamburger = () => {
  // ----------------------------------
  const isMember = useContext(MemberContext);

  const pathArray = isMember
    ? ["", "user", "input", "setting", "signout", "aboutus", "contact"]
    : ["", "signin", "singup", "aboutus", "contact"];

  const menu = isMember
    ? ["Home", "User", "Input", "Setting", "AboutUS", "Contact", "SignOut"]
    : ["Home", "Sign in", "Sing up", "AboutUS", "Contact"];
  // ----------------------------------

  const menuItems = menu.map((val, index) => {
    console.log("yooooo", val);
    return (
      <Link to={`/${pathArray[index]}`}>
        <li className="inline-block cursor-pointer p-6 ">{val}</li>
      </Link>
    );
  });

  return (
    <ul className="hidden lg:block ">
      {menuItems}
      <li className="inline-block cursor-pointer p-6 ">Sign Out</li>
      <Button id={"signout"} button="signout" />
    </ul>
  );
};
export default NonHamburger;
