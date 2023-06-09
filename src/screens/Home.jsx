import React, { useEffect, useState } from "react";
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
  const [token,setToken]=useState("");
  useEffect(()=>{
    const token=window.localStorage.getItem("token"); 
    const hash=window.location.hash;
    window.location.hash="";
    if(!token && hash){
      const _token=hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token",_token);
      setToken(_token);
    }else{
      setToken(token);
    }
  },[])

  return (
    !token?<SpotifyButton/>:
    <div>
      <BrowserRouter>
      <div className="main-body">
        <Sidebar/>
      <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>  
      </div>
      </BrowserRouter>
    </div>
  )
}

export default Home
