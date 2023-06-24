import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
export const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        {" "}
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link to="/explores" className={styles.link}>
          Explore
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link to="/bookmarks" className={styles.link}>
          Bookmarks
        </Link>
      </div>

      <div className={styles.linkContainer}>
        <Link to="/likedposts" className={styles.link}>
          Likes Posts
        </Link>
      </div>
    </div>
  );
};
