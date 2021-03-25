import React from "react";
import { useHamOpen } from "../../../context/HamOpen-context";

const Menu = (props) => {
  const { menuOpen } = useHamOpen();

  return (
    <div
      className={`absolute top-0 left-0 h${
        menuOpen ? "-screen" : "-0"
      } w-screen bg-black bg-opacity-75 `}
      // display: "flex",
      // flexDirection: "column",
      // color: "#fafafa",
    >
      {menuOpen ? <div className="pt-16">{props.children}</div> : null}
    </div>
  );
};

export default Menu;
