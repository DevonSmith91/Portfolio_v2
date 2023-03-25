import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const links = ["About", "Portfolio", "Skills", "Contact"];
  return (
    <nav className={styles.navbar}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.toLowerCase()}
            className={`${styles.navLink} navLink`}
          >
            {link}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
