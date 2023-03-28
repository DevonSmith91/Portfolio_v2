import styles from "./Header.module.scss";
import Link from "next/link";
import DSLogo from "@images/DSLogo.js";
import { Navbar } from "@components/common";
import handleSideMenu from "@/utils/handleSideMenu";

// TODO: Animate Navbar to slide right when scrolling
// slide back in when scrolling up

// TODO: Change DSLogo to be text and background logo, add animation
// for rotation of background while hovering

const Header = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <div
            className={styles.logo}
            onClick={() => handleSideMenu(setIsSideMenuOpen)}
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
