import React, { createContext, Provider, useState } from "react";
import VersionBtn from "./VersionBtn";
import Hamburger from "./HamburgerMenu/Hamburger";

export const MemberContext = createContext(false, () => {});

const NavBar = () => {
  // メンバーであるかどうかの判断で切替
  const [isMember, setIsMember] = useState(false);

  return (
    <MemberContext.Provider value={[isMember, setIsMember]}>
      <div className="NavBar">
        <Hamburger />
        <VersionBtn />
      </div>
    </MemberContext.Provider>
  );
};

export default NavBar;
