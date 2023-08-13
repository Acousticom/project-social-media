import React from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";

export const Signup = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.container}>
        <div className={styles.header}>
          <h2>Foodies Connect</h2>
          <h3>Sign Up</h3>
        </div>

        <div>
          <label className={styles.label}>
            First Name: <input type="text" className={styles.input} placeholder="Enter first name"/>
          </label>
        </div>
        <div>
          <label className={styles.label}>
            Last Name: <input type="text" className={styles.input} placeholder="Enter last name"/>
          </label>
        </div>
        <div>
          <label className={styles.label}>
            Email Address: <input type="email" className={styles.input} placeholder="Enter email address"/>
          </label>
        </div>
        <div>
          <label className={styles.label}>
            Username: <input type="text" className={styles.input} placeholder="Enter username"/>
          </label>
        </div>
        <div>
          <label className={styles.label} >
            Password: <input type="password" className={styles.input} placeholder="Enter password"/>
          </label>
        </div>

        <button className={styles.button}>Sign up</button>
        <p>
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </form>
    </div>
  );
};
