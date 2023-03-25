import styles from "@/styles/Home.module.scss";

export default function HomePage() {
  return (
    <homepage className={styles.homepage}>
      <div className={styles.heroImage}>
        <div className={styles.placeholderImg}>Placeholder Image</div>
      </div>
      <div className={styles.heroText}>
        <div className={styles.heroTextContent}>
          <h1>Devon Smith</h1>
          <p>
            Crafting captivating designs with meticulous attention to detail,
            backed by extensive experience in frontend web development.
          </p>
          <button>Resume</button>
        </div>
      </div>
    </homepage>
  );
}
