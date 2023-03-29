import styles from "./Navbar.module.scss";
import cn from "classnames";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  const handleSideMenu = (event, isSideMenuOpen) => {
    setIsSideMenuOpen(!isSideMenuOpen);
    event.target.blur();
  };

  const sideMenuClass = isSideMenuOpen ? styles.open : "";

  return (
    <nav className={styles.navbar}>
      <div
        onClick={(event) => handleSideMenu(event, isSideMenuOpen)}
        role="button"
        tabIndex={0}
        className={cn(styles.hamburgerContainer, sideMenuClass)}
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
