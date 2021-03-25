import React, { createContext, useState } from "react";
import VersionBtn from "./VersionBtn";
import Hamburger from "./HamburgerMenu/Hamburger";
import Logo from "../../assets/img/logo01.png";

export const MemberContext = createContext(false, () => {});

const NavBar = () => {
  // メンバーであるかどうかの判断で切替
  const [isMember, setIsMember] = useState(false);

  return (
    <MemberContext.Provider value={[isMember, setIsMember]}>
      <div className="NavBar flex-row justify-between z-50">
        <div>
          <img className="w-5/12 lg:w-2/12 p-2" src={Logo} alt="top" />
        </div>
        <div className="flex">
          <VersionBtn />
          <Hamburger />
        </div>
      </div>
    </MemberContext.Provider>
  );
};

export default NavBar;
