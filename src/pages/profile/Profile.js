import React from "react";
import styles from "./Profile.module.css";
import { useParams } from "react-router-dom";
import { useSocialMedia } from "../../context/SocialMediaContext";
import { PostCard } from "../../components/postCard/PostCard";

export const Profile = () => {
  const { userId } = useParams();
  const { users } = useSocialMedia();
  const filterUserProfile = users.find((user) => user._id === userId);
  return (
    <div className={styles.wrapper}>
      <li className={styles.container}>
        <img
          src={filterUserProfile.avatarUrl}
          alt=""
          className={styles.profileImage}
        />
        <div className={styles.userDetails}>
          <h3>
            {filterUserProfile.firstName} {filterUserProfile.lastName}
          </h3>
          <p>@{filterUserProfile.username}</p>
          <p className={styles.bio}>{filterUserProfile.bio}</p>
          <p>{filterUserProfile.createdAt}</p>
        </div>
      </li>
      <div className={styles.feeds}>
        {users
          .filter((user) => user._id === userId)
          .map((user) => (
            <PostCard user={user} />
          ))}
      </div>
    </div>
  );
};
