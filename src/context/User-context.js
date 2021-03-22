import React, { useState, createContext } from "react";

// export const UserContext = createContext({
//   userName: "",
//   setUserName: () => {},
// });
export const UserContext = createContext(["", () => {}]);

const UserContextProvider = (props) => {
  const [userNameInput, setUserNameInput] = useState("");

  return (
    <UserContext.Provider
      // value={{ userName: userNameInput, setUserName: setUserNameInput }}
      value={[userNameInput, setUserNameInput]}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
