import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const links = ["About", "Portfolio", "Skills", "Contact"];
  return (
    <navbar className={styles.navbar}>
      {links.map((link, index) => {
        return (
          <Link href={link.toLowerCase()} className={styles.navLink}>
            {link}
          </Link>
        );
      })}
    </navbar>
  );
};

export default Navbar;
