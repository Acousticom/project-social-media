import React from "react";
import { useSocialMedia } from "../context/SocialMediaContext";
import { PostCard } from "../components/postCard/PostCard";

export const Explore = () => {
  const { users } = useSocialMedia();
  return (
    <div>
      {users.map((user) => (
        <PostCard user={user} />
      ))}
    </div>
  );
};
