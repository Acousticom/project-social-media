import axios from "axios";

const getAllPostsService = async () => await axios.get("/api/posts");

const addPost = (postData, token) => {
  return axios.post(
    "/api/posts",
    { postData },
    {
      headers: { authorization: token },
    }
  );
};

const likePost = async (postId, token) => {
  await axios.post(
    `/api/posts/like/:${postId}`,
    {},
    { headers: { authorization: token } }
  );
};
export { getAllPostsService, likePost, addPost };
