import React from "react";
import styles from "./EventDetail.module.css";

const EventDetail = ({ height }) => {
  return (
    <div
      className={styles.eventdetailContainer}
      style={{ height: `${height}px` }}
    >
      <div className={styles.whiteBox}></div>
      <div>
        <p className={styles.eventDetails}>Event Details</p>
        <p className={styles.description}>Description</p>
      </div>
    </div>
  );
};

export default EventDetail;
