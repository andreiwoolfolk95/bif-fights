"use client";
import dynamic from "next/dynamic";
import ReactPlayer from "react-player";

export default function Home() {
  const VideoPlayer = dynamic(() => import("../components/video/video"), {
    ssr: false,
  });
  return (
    <div className="home-container">
      <h2>World kick boxing council event</h2>
      <VideoPlayer
        url="https://servidorcadefi.inowu.dev/live/hls/respaldo.m3u8"
        width="100%"
        loop={false}
        muted={false}
        controls={true}
      />
    </div>
  );
}
