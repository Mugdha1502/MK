import React from "react";

import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mugdha</h1>
        <a href="https://drive.google.com/file/d/182OXXEQ_jCR0008i4zSkhDv5oiJy-nXP/view?usp=drivesdk" className={styles.contactBtn}>Resume</a>
        <p className={styles.description}>
        I am currently a Engineering Student at Vidyalankar Polytechnic, pursuing a degree in Information Technology. I am passionate about my field as a software engineer, my field of interest is in software development, graphic design, data science, marketing and I am excited to embark on a professional journey where I can apply my academic knowledge and skills to real-world challenges.
        </p>
        <a href="mailto:mugdhakamble6@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("home/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};


export default Home;