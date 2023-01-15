import React, { createContext, useState, useContext } from "react";

let NavContext = createContext({});

export const NavProvider = ({ children }) => {
  let [navOpen, setNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(NavContext);
}
