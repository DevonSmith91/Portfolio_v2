import { useRouter } from "next/router";
import styles from "@styles/pages/Home.module.scss";
import Image from "next/image";
import CodeBlock from "@images/CodeBlock.jpg";
import cn from "classnames";

export default function HomePage() {
  const router = useRouter();

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
      <div className={styles.heroAction}>
        <div className={styles.heroText}>
          <div className={styles.heroTextContent}>
            <h1>{porfolioName}</h1>
            <p>{heroTextContent}</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonWrapper}>
            <a
              href="/Resume.pdf"
              download="Devon Smith Resume"
              className={cn(
                "button primary-outline resume-button",
                styles.resumeButton
              )}
            >
              Resume
            </a>
            <button
              className={cn(`primary-outline`, styles.chatButton)}
              onClick={() => {
                router.push("/contact");
              }}
            >
              {/* &apos; is for ' */}
              Let&apos;s Chat
            </button>
          </div>
        </div>
      </div>
    </homepage>
  );
}
