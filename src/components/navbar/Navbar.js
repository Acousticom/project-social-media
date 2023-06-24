import React from "react";
import { Searchbar } from "../searchbar/Searchbar";
import styles from "./Navbar.module.css";
import { useSocialMedia } from "../../context/SocialMediaContext";
import { websiteImage } from "../../assests/images";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { users } = useSocialMedia();
  const navigate =useNavigate()
  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.logoContainer} onClick={()=>navigate('/')}>
          <img src={websiteImage} alt="" className={styles.logo} />
          <h2 className={styles.websiteName}>Foodies Connect</h2>
        </div>
        <Searchbar />
        {users.map((user)=><img src={user.avatarUrl} alt="" className={styles.profileImage} onClick={()=>navigate(`/profile/${user._id}`)}/>)}
      </nav>
    </div>
  );
};
