import styles from "./Header.module.scss";
import Link from "next/link";
import { Navbar } from "@components/common";

// TODO: Animate Navbar to slide right when scrolling
// slide back in when scrolling up
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>LOGO</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
