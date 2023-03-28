import styles from "./NavLinks.module.scss";
import Link from "next/link";
import handleSideMenu from "@/utils/handleSideMenu";

const NavLinks = ({ setIsSideMenuOpen }) => {
  const links = ["About", "Portfolio", "Skills", "Contact"];

  return (
    <div className={styles.navLinkContainer}>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.toLowerCase()} className="navLink">
            <span onClick={() => handleSideMenu(setIsSideMenuOpen)}>
              {link}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
