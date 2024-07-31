"use client";
import ReactPlayer from "react-player";
const Video = () => {
  return (
    <ReactPlayer
      url={"/assets/videos/authVideo.mp4"}
      playing
      muted
      loop
      width="75%"
      height="100%"
    />
  );
};
export default Video;
