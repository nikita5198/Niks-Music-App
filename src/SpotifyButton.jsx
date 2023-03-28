import React from "react";
import "./spotifyButton.css"
const SpotifyButton = () => {
  const handleClick = () => {
    const CLIENT_ID = "a912cec2a12d40c4b332b1e6c3c49f1e";
    const REDIRECT_URI = "http://localhost:3000";
    const SCOPE = "user-read-private user-read-email";

    const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPE)}`;

    window.location.href = url;
  };

  return (
    <div className="login-page">
       <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="logo-spotify"
            className="logo"

            style={{ width: "30%"}}
          />
     <button className="login-btn" onClick={handleClick}>LOG IN </button>
   </div>
  );
};

export default SpotifyButton;