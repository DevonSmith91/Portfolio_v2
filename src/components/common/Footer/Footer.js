import styles from "./Footer.module.scss";

const Footer = () => {
  const handleTalk = () => {
    console.log("clicked");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.contactButton}>
        <button onClick={handleTalk()}>Let's Talk</button>
      </div>
      <div className={styles.socialIcons}>test</div>
    </footer>
  );
};

export default Footer;
