import React from "react";
import styles from "./Goals.module.css";

const Goals = ({ item }) => {
  return (
    <div className={styles.goalContainer}>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  );
};

export default Goals;
