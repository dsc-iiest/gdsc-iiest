import React from "react";
import styles from "./Navbar.module.css";
import logo from "./../../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.imgWrapper}>
        <Link to="/">
          <img className={styles.logoImg} src={logo} alt="navbarLogo" />
        </Link>
      </div>
      <div className={styles.NavlinkWrapper}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className={styles.pages}>Home</h3>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/event">
          <h3 className={styles.pages}>Events</h3>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          <h3 className={styles.pages}>About</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
