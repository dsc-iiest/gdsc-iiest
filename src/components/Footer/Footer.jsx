import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link style={{ textDecoration: "none" }} to="/about">
        <p className={styles.footerTag}>Contact</p>
      </Link>
      <p className={styles.footerTag}>Created by Gdsc Team</p>
      <p className={styles.footerTag}>Rules and Regulation</p>
    </div>
  );
};

export default Footer;
