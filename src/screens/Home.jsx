import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./Favorite";
import Feed from "./Feed";
import Library from "./Library";
import Player from "./Player";
import Trending from "./Trending";
import "./home.css"
import Sidebar from "../components/sidebar/Sidebar";
import SpotifyButton from "../SpotifyButton";


function Home() {
  return (
    <div>
      <BrowserRouter>
      <div className="main-body">
        {/* <SpotifyButton/> */}
        <Sidebar/>
      {/* <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>   */}
      </div>
      </BrowserRouter>
    </div>
  )
}

export default Home
