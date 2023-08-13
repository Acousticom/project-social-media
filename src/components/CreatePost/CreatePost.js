import React, { useState } from "react";
import styles from "./CreatePost.module.css";
import { useAuth } from "../../context/AuthContext";
import { useSocialMedia } from "../../context/SocialMediaContext";
import {BsEmojiSmile} from '../../assests/icons'
import {MdOutlineCancel} from '../../assests/icons'
import {BiImageAdd} from '../../assests/icons'
import EmojiPicker from "emoji-picker-react";
export const CreatePost = () => {
  const { users } = useSocialMedia();
  const { currentUser } = useAuth();
  const [showEmojipicker,setShowEmojipicker]=useState(false)
  const [selectedImage,setSelectedImage]=useState(null)

  const emojiHandler=(event)=>{
    event.preventDefault()
    setShowEmojipicker(!showEmojipicker)
  }

  const handleImageSelect=()=>{

  }
  return (
    <form className={styles.container}>
      <div>
        {users
          .filter((user) => user.username === currentUser.username)
          .map((user) => (
            <img src={user.avatarUrl} alt="" className="profileImage" />
          ))}
        <textarea placeholder="Whats happening?"></textarea>
      </div>
      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Image"
          />
          <button>
            <MdOutlineCancel size="25" onClick={() => setSelectedImage(null)} />
          </button>
        </div>
      )}
          <BiImageAdd
            size="32"
            onClick={handleImageSelect}
          />
      <button onClick={emojiHandler}>
        <BsEmojiSmile/>
      </button>
            {showEmojipicker&&(<EmojiPicker/>)}
      <button>Post</button>
    </form>
  );
};
