import React, { useState } from "react";
import { websiteImage } from "../../assests/images";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const LoginPage = () => {
  const { loginHandler, loginAsGuestHandler } = useAuth();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const guestLoginHandler = () => {
    const guestLoginDetails = {
      username: "adarshbalak",
      password: "adarshBalak123",
    };
    setLoginDetails(guestLoginDetails)
    loginAsGuestHandler(loginDetails)
  };
  const login = (event) => {
    event.preventDefault();
    loginHandler(loginDetails);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={login}>
        <img src={websiteImage} alt="" className={styles.logo} />
        <h2>Foodies Connect</h2>
        <h3>Username</h3>
        <input
          type="text"
          className={styles.input}
          onChange={(event) => setLoginDetails({...loginDetails,username:event.target.value})}
          value={loginDetails.username}
        />
        <h3>Password</h3>
        <input
          type="password"
          className={styles.input}
          onChange={(event) => setLoginDetails({...loginDetails,password:event.target.value})}
          value={loginDetails.password}
        />
        <div>
          <button className={styles.button} type="submit">
            Log In
          </button>
        </div>
        <div>
          <button className={styles.button} onClick={guestLoginHandler}>
            Log In as Guest
          </button>
        </div>

        <p>
          Don't have an account?<Link to="/signup"> SignUp here</Link>
        </p>
      </form>
    </div>
  );
};
