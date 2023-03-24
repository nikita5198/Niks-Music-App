import React from "react";
const SpotifyButton = () => {
  const handleClick = () => {
    const CLIENT_ID = "a912cec2a12d40c4b332b1e6c3c49f1e";
    const REDIRECT_URI = "http://localhost:3000";
    const SCOPE = "user-read-private user-read-email";

    const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPE)}`;

    window.location.href = url;
  };

  return (
   <div style={{margin:"30% 40%"}}>
       <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="logo-spotify"
            className="logo"

            style={{ width: "30%"}}
          />
     <button style={{padding:"0.5rem",width:"150px",height:"60px"}} onClick={handleClick}>Log in </button>
   </div>
  );
};

export default SpotifyButton;