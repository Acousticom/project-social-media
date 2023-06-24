import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balak",
    username: "adarshbalak",
    password: "adarshBalak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Food blogger and traveller",
    avatarUrl:"https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?w=196&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    _id: uuid(),
    firstName: "Neha",
    lastName: "Sharma",
    username: "nehasharma",
    password: "nehaSharma123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Be yourself !!!",
    avatarUrl:"https://th.bing.com/th/id/OIP.YyvoBtndc_AhvFYsF_ZauQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    _id: uuid(),
    firstName: "Payal",
    lastName: "Oberoi",
    username: "paylaoberoi",
    password: "payalOberoi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Thug Life buddy food is love, food critic",
    avatarUrl:"https://th.bing.com/th/id/OIP.ff0-McyJ3oZUD2cpyPNFDwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    _id: uuid(),
    firstName: "Mahesh",
    lastName: "Bhalle",
    username: "maheshbhalle",
    password: "maheshBhalle123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Song writter and music lover and a cafe owner named Sham Mastani in banglore",
    avatarUrl:"https://th.bing.com/th/id/OIP.zX-C3ojE2SBBBf3bSND4vgHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    _id: uuid(),
    firstName: "Tuntun",
    lastName: "Mausi",
    username: "tuntunmausi",
    password: "tuntunMausi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Owner of Ladoo shop in dholakpur ",
    avatarUrl:"https://th.bing.com/th/id/OIP.dh4cov4JpAfousru0qg4JQAAAA?w=148&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    _id: uuid(),
    firstName: "Sonakshi",
    lastName: "Singh",
    username: "sonakshisingh",
    password: "sonakshiSingh123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Baker and passionate food lover",
    avatarUrl:"https://th.bing.com/th/id/OIP.ZZf5ANaOGgdbBM-ot_12FgHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
];
