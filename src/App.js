import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Explore } from "./pages/Explore";
import { Bookmarks } from "./pages/Bookmarks";
import { LikedPosts } from "./pages/LikedPosts";
import { Profile } from "./pages/profile/Profile";
import { LoginPage } from "./pages/Loginpage/LoginPage";
import { Layouts } from "./Layouts/Layouts";
import { Signup } from "./pages/Signup/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IndividualPostCard } from "./pages/IndividualPostCard/IndividualPostCard";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="/explores" element={<Explore />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/likedposts" element={<LikedPosts />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/post/:postId" element={<IndividualPostCard />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
