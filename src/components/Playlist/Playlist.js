import React from "react";
import "../Playlist/Playlist.scss"
import music1 from "../Playlist/music/music1.mp3"
import musicTet from "../Playlist/music/musicTet.mp3"
export default function Playlist() {
  return (
   <div className="musicAudio" > 
     <audio controls loop autoPlay  >
  <source src={musicTet}/>
  <source src={music1}/>
     </audio>
   </div>
  );
}
