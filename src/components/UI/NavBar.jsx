import React, { createContext, Provider, useState } from "react";
import VersionBtn from "./VersionBtn";
import Hamburger from "./HamburgerMenu/Hamburger";
// import MenuItem from "./HamburgerMenu/MenuItem";
import NonHamburger from "./HamburgerMenu/NonHamburger";

export const MemberContext = createContext(false, () => {});

const NavBar = () => {
  // メンバーであるかどうかの判断で切替
  const [isMember, setIsMember] = useState(false);

  return (
    <MemberContext.Provider value={[isMember, setIsMember]}>
      <div className="NavBar">
        <Hamburger />
        {/* <NonHamburger /> */}

        <VersionBtn />
      </div>
    </MemberContext.Provider>
  );
};

export default NavBar;
