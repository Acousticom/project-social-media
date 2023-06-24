import React from "react";
import { useSocialMedia } from "../../context/SocialMediaContext";
import styles from "./PostCard.module.css";
import {AiFillHeart,AiOutlineHeart} from "../../assests/icons"

export const PostCard = ({ user }) => {
  const { posts, likeStatus, setLikedStatus, likedUser,setLikedUser } = useSocialMedia();
  const postDetails = posts.filter((post) => post.username === user.username);

  const likeHandler=()=>{
    setLikedStatus(!likeStatus)
  }
  return (
    <div>
      {postDetails.map((post) => (
        <li className={styles.postCard}>
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
          <img src={post.image} alt="" className={styles.image}/>
          {likeStatus&&<button onClick={likeHandler}>
            <AiOutlineHeart size='25'/>
          </button>
          <button onClick={likeHandler}>
            <AiFillHeart size='25'/>
          </button>}
        </li>
      ))}
    </div>
  );
};
