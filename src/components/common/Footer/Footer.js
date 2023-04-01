import styles from "./Footer.module.scss";
import Link from "next/link";
import GithubIcon from "@images/GithubIcon.js";
import LinkedinLogo from "@/images/LinkedinLogo.js";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.socialIconsContainer}>
      <div className={styles.icon}>
        <Link href="https://github.com/DevonSmith91">
          <GithubIcon />
        </Link>
      </div>
      <div className={styles.icon}>
        <Link href="https://www.linkedin.com/in/devonsmith91/">
          <LinkedinLogo />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
