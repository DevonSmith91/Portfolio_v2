import { useState, useEffect } from "react";
import styles from "./Layout.module.scss";
import { Header, Footer, SideMenu } from "@components/common";
import { useAppContext } from "@/components/context/AppContext";

const Layout = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const { windowWidth } = useAppContext();

  useEffect(() => {
    if (windowWidth >= 512) {
      if (isSideMenuOpen) {
        setIsSideMenuOpen(false);
      }
    }
  }, [windowWidth]);

  return (
    <div className={styles.layout}>
      <Header
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
