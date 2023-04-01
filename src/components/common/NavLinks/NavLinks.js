import styles from "./NavLinks.module.scss";
import Link from "next/link";
import handleSideMenu from "@utils/handleSideMenu";
import { useAppContext } from "@components/context/AppContext";

const NavLinks = () => {
  const { setIsSideMenuOpen } = useAppContext();
  const links = ["About", "Portfolio", "Skills", "Contact"];

  return (
    <div className={styles.navLinkContainer}>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.toLowerCase()} className="navLink">
            <span
              onClick={() => handleSideMenu(setIsSideMenuOpen)}
              onKeyDown={() => handleSideMenu(setIsSideMenuOpen)}
              role="button"
              tabIndex={0}
            >
              {link}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
