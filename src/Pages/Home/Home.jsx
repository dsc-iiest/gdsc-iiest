import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import GdscImg from "./../../img/gdsc.png";
import Twitter from "./../../img/s-icon.png";
import Insta from "./../../img/insta.png";
import Facebook from "./../../img/Facebook.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.centerBox}>
        <div className={styles.info}>
          <h3>
            Google Developer Student Clubs are community groups for college and
            university students interested in Google developer technologies.
          </h3>
          <p>
            Students from all undergraduate or graduate programs with an
            interest in growing as a developer are welcome. By joining a GDSC,
            students grow their knowledge in a peer-to-peer learning environment
            and build solutions for local businesses and their community.{" "}
          </p>
          <p>
            Google Developer Student Clubs is a program supported by Google
            Developers.
          </p>
        </div>
        <div className={styles.gdscImgWrapper}>
          <img className={styles.gdscImg} src={GdscImg} alt="gdscImg" />
        </div>
      </div>
      <div className={styles.heroSection}>
        <div className={styles.socialmediaIconWrapper}>
          <img
            className={styles.socialmediaIcon}
            src={Insta}
            alt="Social media Icon"
          />
          <img
            className={styles.socialmediaIcon}
            src={Twitter}
            alt="Social media Icon"
          />
          <img
            className={styles.socialmediaIcon}
            src={Facebook}
            alt="Social media Icon"
          />
        </div>
        <div className={styles.explorebtnWrapper}>
          <button className={styles.exploreBtn}>Explore</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
