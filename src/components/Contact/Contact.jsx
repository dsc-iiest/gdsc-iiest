import React from "react";
import styles from "./Contact.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactWrapper}>
        <h1 className={styles.contactusText}>Contact Us</h1>
        <p className={styles.accountText}>
          Already Have an account ?{" "}
          <span className={styles.loginTxt}>Login</span>
        </p>
      </div>
      <div className={styles.bodyForm}>
        <div className={styles.inputWrapper}>
          <p className={styles.placeholder}>Name</p>
          <input className={styles.inputBox} type="text" />
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.placeholder}>Email</p>
          <input className={styles.inputBox} type="text" />
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.placeholder}>Password</p>
          <input className={styles.inputBox} type="text" />
        </div>
        <div className={styles.signupWrapper}>
          <button className={styles.signupBtn}>Sign up</button>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.line}></div>
          <p>or Signup With</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.logoWrapper}>
          <FcGoogle className={styles.socialmediaIcon} />
          <BsApple  className={styles.socialmediaIcon}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
