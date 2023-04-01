import { useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import DSLogo from "@images/DSLogo.js";
import { Navbar } from "@components/common";
import handleSideMenu from "@/utils/handleSideMenu";
import getWindowWidth from "@/utils/getWindowWidth";
import { useAppContext } from "@components/context/AppContext";

// TODO: Animate Navbar to slide right when scrolling
// slide back in when scrolling up

// TODO: Change DSLogo to be text and background logo, add animation
// for rotation of background while hovering

const Header = () => {
  const { isSideMenuOpen, setIsSideMenuOpen } = useAppContext();
  const windowWidth = getWindowWidth();

  useEffect(() => {
    if (windowWidth >= 512) {
      if (isSideMenuOpen) {
        setIsSideMenuOpen(false);
      }
    }
  }, [windowWidth, isSideMenuOpen, setIsSideMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <div
            className={styles.logo}
            onClick={() => handleSideMenu(setIsSideMenuOpen)}
            onKeyDown={() => handleSideMenu(setIsSideMenuOpen)}
            role="button"
            tabIndex={0}
          >
            <DSLogo />
          </div>
        </Link>
      </div>
      <Navbar
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
    </header>
  );
};

export default Header;
