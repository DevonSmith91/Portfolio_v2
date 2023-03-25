import styles from "./Footer.module.scss";
import GithubIcon from "@images/GithubIcon.js";
import LinkedinLogo from "@/images/LinkedinLogo.js";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIconsContainer}>
        <div className={styles.icon}>
          <GithubIcon />
        </div>
        <div className={styles.icon}>
          <LinkedinLogo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
