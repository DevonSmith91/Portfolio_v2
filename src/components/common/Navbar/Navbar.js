import styles from "./Navbar.module.scss";
import cn from "classnames";
import { NavLinks } from "@components/common";

const Navbar = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  const handleSideMenu = (event, isSideMenuOpen) => {
    setIsSideMenuOpen(!isSideMenuOpen);
    event.target.blur();
  };

  const sideMenuClass = isSideMenuOpen ? styles.open : "";

  return (
    <nav className={styles.navbar}>
      <div
        className={cn(styles.hamburgerContainer, sideMenuClass)}
        onClick={(event) => handleSideMenu(event, isSideMenuOpen)}
        onKeyDown={(event) => handleSideMenu(event, isSideMenuOpen)}
        role="button"
        tabIndex={0}
      >
        <div className={`${styles.hamInner}`} />
      </div>
      <div className={styles.desktopNav}>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
