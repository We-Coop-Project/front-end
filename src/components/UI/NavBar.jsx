import React, { createContext, useState } from "react";
import VersionBtn from "./VersionBtn";
import Hamburger from "./HamburgerMenu/Hamburger";
import Logo from "../../assets/img/logo01.png";
import { Link } from "react-router-dom";

// export const MemberContext = createContext([false, () => {}]);

const NavBar = () => {
  // メンバーであるかどうかの判断で切替
  // const [isMember, setIsMember] = useState(false);

  return (
    // <MemberContext.Provider value={[isMember, setIsMember]}>
    <div className="NavBar">
      <div>
        <Link to={"/"}>
          <img
            className="w-5/12 lg:w-2/12 p-2  md:w-3/12"
            src={Logo}
            alt="top"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <VersionBtn />
        <Hamburger />
      </div>
    </div>
    // </MemberContext.Provider>
  );
};

export default NavBar;
