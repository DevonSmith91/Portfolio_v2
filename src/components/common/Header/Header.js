import styles from "./Header.module.scss";
import Link from "next/link";
import { Navbar } from "@components/common";
import DSLogo from "@images/DSLogo.js";

// TODO: Animate Navbar to slide right when scrolling
// slide back in when scrolling up

// TODO: Change DSLogo to be text and logo, add animation
// for rotation of background while hovering

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <div className={styles.logo}>
            <DSLogo />
          </div>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
