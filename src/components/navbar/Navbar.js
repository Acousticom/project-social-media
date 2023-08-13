import React from "react";
import { Searchbar } from "../searchbar/Searchbar";
import styles from "./Navbar.module.css";
import { useSocialMedia } from "../../context/SocialMediaContext";
import { websiteImage } from "../../assests/images";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const { users } = useSocialMedia();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.logoContainer} onClick={() => navigate("/")}>
          <img src={websiteImage} alt="" className={styles.logo} />
          <h2 className={styles.websiteName}>Foodies Connect</h2>
        </div>
        <Searchbar />
        {users
          .filter((user) => user.username === currentUser.username)
          .map((user) => (
            <img
              key={user._id}
              src={user.avatarUrl}
              alt=""
              className="profileImage"
              onClick={() => navigate(`/profile/${user._id}`)}
            />
          ))}
      </nav>
    </div>
  );
};
