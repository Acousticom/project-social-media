import axios from "axios";

export const loginService = async (loginData) =>
  await axios.post("/api/auth/login", loginData);
  