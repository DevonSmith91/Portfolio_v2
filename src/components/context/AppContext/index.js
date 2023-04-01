import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const values = {
    isSideMenuOpen,
    setIsSideMenuOpen,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
