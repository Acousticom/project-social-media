import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/profile/home/Home";
import { Explore } from "./pages/Explore";
import { Bookmarks } from "./pages/Bookmarks";
import { LikedPosts } from "./pages/LikedPosts";
import { SideBar } from "./components/sidebar/SideBar";
import { FollowersSuggestionBar } from "./components/followersSuggestioonBar/FollowersSuggestionBar";
import { Profile } from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SideBar />
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explores" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/likedposts" element={<LikedPosts />} />
        <Route path="/profile/:userId" element={<Profile/>} />
      </Routes>
      <FollowersSuggestionBar />
      </div>

      
    </div>
  );
}

export default App;
