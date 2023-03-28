import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import CodeBlock from "@images/CodeBlock.jpg";

export default function HomePage() {
  const porfolioName = "Devon Smith";
  const heroTextContent =
    "Crafting captivating designs with meticulous attention to detail, backed by extensive experience in frontend web development.";

  return (
    <homepage className={styles.homepage}>
      <div className={styles.heroImage}>
        <Image
          src={CodeBlock}
          fill="responsive"
          quality={90}
          alt="Hero Image of a code block"
          priority
          // TODO: Sort out these sizes
          // sizes="(max-width: 768px) 100vw,
          //     (max-width: 1200px) 50vw,
          //     33vw"
        />
      </div>
      <div className={styles.heroText}>
        <div className={styles.heroTextContent}>
          <h1>{porfolioName}</h1>
          <p>{heroTextContent}</p>
          <div className={styles.buttonContainer}>
            <button className={`primary-outline`}>Resume</button>
            <button className={`primary-outline`}>Let's Chat</button>
          </div>
        </div>
      </div>
    </homepage>
  );
}
