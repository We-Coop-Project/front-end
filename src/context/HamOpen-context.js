import React, { createContext, useContext, useState } from "react";

const HamOpenContext = createContext();

export const useHamOpen = () => {
  return useContext(HamOpenContext);
};

export const HamOpenProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const value = {
    menuOpen,
    setMenuOpen,
  };
  return (
    <HamOpenContext.Provider value={value}>{children}</HamOpenContext.Provider>
  );
};
