import styles from "./SideMenu.module.scss";
import { NavLinks } from "../Navbar";
import cn from "classnames";

// TODO: Disable Scroll while open
const SideMenu = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  const showSideMenu = isSideMenuOpen ? styles.open : styles.close;

  return (
    <div className={cn(styles.sideMenuContainer, showSideMenu)}>
      <NavLinks
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
    </div>
  );
};

export default SideMenu;
