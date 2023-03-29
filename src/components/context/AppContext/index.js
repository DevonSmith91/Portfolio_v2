import { createContext, useContext, useState, useEffect } from "react";
import getWindowWidth from "@/utils/getWindowWidth";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [windowWidth, setWindowWidth] = useState();

  const currentWindowWidth = getWindowWidth();

  useEffect(() => {
    if (currentWindowWidth !== windowWidth) {
      setWindowWidth(currentWindowWidth);
    }
  }, [currentWindowWidth]);

  const values = {
    windowWidth,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
