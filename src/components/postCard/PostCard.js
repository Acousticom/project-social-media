import React from "react";
import { useSocialMedia } from "../../context/SocialMediaContext";
import styles from "./PostCard.module.css";
import { AiFillHeart, AiOutlineHeart } from "../../assests/icons";

export const PostCard = ({ user }) => {
  const {
    posts,
    likeStatus,
    setLikedStatus,
    likeCounter,
    setLikeCounter,
  } = useSocialMedia();
  const postDetails = posts.filter((post) => post.username === user.username);

  const likeHandler = (id) => {
    setLikedStatus(!likeStatus);
    const likes=posts.filter((post)=>post._id===id).map((like)=>like.likes.likeCount)
    setLikeCounter(likes)
  };
  const unLikeHandler = () => {
    setLikedStatus(!likeStatus);
    // let totalLikes = posts.likes.likeCount - 1;
    // setLikeCounter(totalLikes);
  };
  return (
    <div>
      {postDetails.map((post) => (
        <div key={post._id} className={styles.postCard}>
          <div className={styles.profile}>
            <img src={user.avatarUrl} alt="" className={styles.avatar} />
            <div className={styles.name}>
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>@{user.username}</p>
            </div>

            <p>{post.createdAt}</p>
          </div>

          <p className={styles.description}>{post.description}</p>
          <img src={post.image} alt="" className={styles.image} />
          {likeStatus ? (
            <button onClick={()=>likeHandler(post._id)}>
              <AiFillHeart size="25" /> 
            </button>
          ) : (
            <button onClick={()=>unLikeHandler(post._id)}>
              <AiOutlineHeart size="25" />
            </button> 
          )}<span>{likeCounter}</span>
        </div>
      ))}
    </div>
  );
};
