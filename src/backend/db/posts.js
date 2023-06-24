import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png",
    description:"So delicious yummy😊Are you pizza lover?",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalak",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/f4c/d5729b8dd188bdc23b84cffc26bdff4c.jpg",
    description:"Every mini burger is meticulously crafted with love by our adorable productor manager ❤️ Ensuring every bite of our mini burgers is incredibly satisfying",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "nehasharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    description:"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paylaoberoi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    description:"After a good dinner one can forgive anybody, even one's own relations.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paylaoberoi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/8f5/a569a85cc5bb16dc9cc44c8ba8a038f5.jpg",
    description:"Look whats cooking today!!!",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "nehasharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/a1b/33aeef5a288728d595fef0cc858aea1b.jpg",
    description:"Noodles of the day",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalak",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/pictures/6/1896/ede1a524f77ea28bb253f94cc831fda1_o2_featured_v2.jpg",
    description:"Lets celebrate 🥳 suday as the Bhaturey day 😋🍽️",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "nehasharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/657/3abc18505a6c5188348bd021ce87e657.jpg",
    description:"Masala Dosa in the house😍",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalak",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/76a/7c961cd3ab18d04613db72c62d0ec76a.png",
    description:"A bite of cup cake can make your day 😇❤️",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "maheshbhalle",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    description:"Verified Change brings uncomfortable situations. Uncomfortable situations allow you to get to know and understand yourself better. Understanding yourself better brings growth and with growth, comes healing. 🌻",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "nehasharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://th.bing.com/th/id/OIP.R-AOBfjWUoWDICzZbhiZKgHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description:"So delicious yummy😊Are you pizza lover?",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalak",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/b41/47df77de78ac5fc128da4f50799c1b41.jpg",
    description:"Lunch at Gulati's restaurant 🍗",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalak",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/385/6f9802f2dc6532ac94b3eff6564f9385.jpg",
    description:"If you are confused what to order always go for a thali your never gonna disappoint 😊",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sonakshisingh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/9bd/f5c88e4d73e4a887035cbe3fef0d39bd.jpg",
    description:"Delhi waalon ka dil❤️ aur momos aur kahin nhi milenge ",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tuntunmausi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://th.bing.com/th/id/OIP.TyfmU4fVpjk3JxgvzeawJgHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    content:"End your weekend like this 🍻",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sonakshisingh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
