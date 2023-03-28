import styles from "./SideMenu.module.scss";
import { NavLinks } from "../Navbar";

const SideMenu = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  return (
    <div className={styles.sideMenuContainer}>
      <NavLinks
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
    </div>
  );
};

export default SideMenu;
