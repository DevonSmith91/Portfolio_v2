import DevonHeadshot from "@images/DevonHeadshot.jpg";
import Image from "next/image";
import styles from "@styles/pages/About.module.scss";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutContent}>
        <p>
          Hi there, I'm Devon Smith! I'm a web developer with 2+ years of
          experience working primarily on front-end projects and some full-stack
          projects as well. With a strong background in art and glasswork, I
          bring a keen eye for color patterns and aesthetics to my work in
          front-end development. I have a passion for creative problem-solving,
          and I approach each project with an open-minded and flexible attitude.
          My experience collaborating with teams in both leadership and
          supporting roles, as well as my patience and ability to effectively
          communicate complex ideas, has made me an effective team player and
          teacher. In my free time, I'm also an accomplished glass artist and
          owner of my own business, Pandemic Glass. I'm always excited to take
          on new challenges and am committed to delivering quality work that
          exceeds expectations.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={DevonHeadshot}
            alt="Devon Smith Headshot"
            fill="responsive"
            className={styles.headshotImage}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
