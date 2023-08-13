import React from "react";
import { useSocialMedia } from "../../context/SocialMediaContext";
import { PostCard } from "../../components/postCard/PostCard";
import { useAuth } from "../../context/AuthContext";
import { CreatePost } from "../../components/CreatePost/CreatePost";

export const Home = () => {
  const { users } = useSocialMedia();
  const { currentUser } = useAuth();
  return (
    <div>
      <CreatePost/>
      {users
        .filter((user) => user.username === currentUser.username)
        .map((user) => (
          <PostCard user={user} />
        ))}
    </div>
  );
};
