import React from "react";
import { useSocialMedia } from "../../context/SocialMediaContext";
import styles from "./FollowersSuggestion.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export const FollowersSuggestionBar = () => {
  const { users } = useSocialMedia();
  const {currentUser}=useAuth()
  const navigate=useNavigate()
  return (
    <div className={styles.container}>
      <h3>Suggestions for you</h3>
      {users.filter((user)=>user.username!==currentUser.username).map((follower) => (
        <div className={styles.followers}  key={follower._id}>
          <img src={follower.avatarUrl} alt="" className={styles.avatar} onClick={()=>navigate(`/profile/${follower._id}`)}/>
          <div className={styles.name} onClick={()=>navigate(`/profile/${follower._id}`)}>
            <p>
              {follower.firstName} {follower.lastName}
            </p>
            <p>@{follower.username}</p>
          </div>

          <button className={styles.button}>+Follow</button>
        </div>
      ))}
    </div>
  );
};
