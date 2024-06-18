import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me saying Hi!"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
              I am an enthusiastic person. I am passionate about innovating secure and efficient technology solutions. At my university I have focused on developing a strong foundation in computer science and information technology, with coursework in software development, network security, and database management. I have honed my skills in various programming languages, including Java, HTML, CSS, C++ and DBMS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
              Looking ahead, my goal is to contribute to the development of innovative IT solutions that enhance user experience and security
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
              When I'm not immersed in coding or studying, I enjoy dancing, playing the badminton and reading novels. These activities help me maintain a balanced and well-rounded lifestyle.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;