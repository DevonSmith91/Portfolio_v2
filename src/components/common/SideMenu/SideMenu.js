import styles from "./SideMenu.module.scss";
import { NavLinks } from "@components/common";
import cn from "classnames";
import { useAppContext } from "@components/context/AppContext";

// TODO: Disable Scroll while open
const SideMenu = () => {
  const { isSideMenuOpen } = useAppContext();
  const showSideMenu = isSideMenuOpen ? styles.open : styles.close;

  return (
    <div className={cn(styles.sideMenuContainer, showSideMenu)}>
      <NavLinks />
    </div>
  );
};

export default SideMenu;
