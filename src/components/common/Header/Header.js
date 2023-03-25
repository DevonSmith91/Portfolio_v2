import styles from "./Header.module.scss";
import Link from "next/link";
import { Navbar } from "@components/common";
import DSLogo from "@images/DSLogo.svg";
import Image from "next/image";

// TODO: Animate Navbar to slide right when scrolling
// slide back in when scrolling up

// TODO: Change DSLogo to be text and logo, add animation
// for rotation of background while hovering

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={DSLogo} height={70} width={70} />
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
