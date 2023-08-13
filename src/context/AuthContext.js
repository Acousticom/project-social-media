import { createContext, useContext, useState } from "react";
import { loginService } from "../Services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [currentUser, setCurrentUser] = useState();
  const navigate  = useNavigate();

  const loginAsGuestHandler = async ()=>{
    const userData={username:"adarshbalak",password: "adarshBalak123"}
      const response=await loginService(userData);
      const {
        status,
        data: { encodedToken, foundUser },
      } = response
      if (status === 200 || status === 201) {
        setCurrentUser(foundUser);
        setToken(encodedToken);
        navigate("/");
    } 
  }

  const loginHandler = async (loginData) => {
    try {
      const response=await loginService(loginData); 
      const {
        status,
        data: { encodedToken, foundUser },
      } = response
      if (status === 200 || status === 201) {
        setCurrentUser(foundUser);
        setToken(encodedToken);
        toast.success(`Welcome ${foundUser.firstName} !`);
        navigate("/");
      }
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };
  console.log(currentUser);
  console.log(token);
  return (
    <AuthContext.Provider value={{ loginHandler,token,currentUser,loginAsGuestHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
