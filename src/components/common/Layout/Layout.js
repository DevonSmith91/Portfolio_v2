import { useState } from "react";
import styles from "./Layout.module.scss";
import { Header, Footer, SideMenu } from "@components/common";

const Layout = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div className={styles.layout}>
      <Header
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      {isSideMenuOpen && (
        <SideMenu
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
