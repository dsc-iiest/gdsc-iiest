import React from "react";
import styles from "./Event.module.css";
import Navbar from "../../components/Navbar/Navbar";
import EventDetail from "../../components/EventDetail/EventDetail";
import Insta from "./../../img/insta.png";
import Twitter from "./../../img/s-icon.png";
import Facebook from "./../../img/Facebook.png";
import Footer from "../../components/Footer/Footer";

const Event = () => {
  return (
    <div className={styles.eventContainer}>
      <Navbar />
      <div className={styles.heroSection}>
        <EventDetail height={330} />
        <EventDetail height={370} />
        <EventDetail height={330} />
      </div>
      <div className={styles.bottom}>
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
        <div className={styles.btnWrapper}>
          <button className={styles.btn}>RSVP here</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
