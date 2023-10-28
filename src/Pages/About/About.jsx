import React from "react";
import styles from "./About.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Goals from "../../components/Goals/Goals";
import { Goal } from "../../utilis/Goals";
import Contact from "../../components/Contact/Contact";
import Facebook from "./../../img/Facebook.png";
import Instagram from "./../../img/insta.png";
import Twitter from "./../../img/s-icon.png";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Navbar />
      <div className={styles.bodyContainer}>
        <div className={styles.heroSection}>
          <h1>Goal of Developer Student Club</h1>
          <div className={styles.goalsWrapper}>
            {Goal.map((item) => {
              return <Goals item={item} />;
            })}
          </div>
          <div className={styles.bottom}>
            <div className={styles.iconsWrapper}>
              <img
                className={styles.socialmediaIcon}
                src={Facebook}
                alt="socialmediaIcon"
              />
              <img
                className={styles.socialmediaIcon}
                src={Twitter}
                alt="socialmediaIcon"
              />
              <img
                className={styles.socialmediaIcon}
                src={Instagram}
                alt="socialmediaIcon"
              />
            </div>
            <div className={styles.btnWrapper}>
              <button className={styles.joinBtn}>Join the community</button>
            </div>
          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default About;
