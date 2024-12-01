"use client";
import dynamic from "next/dynamic";

export default function Home() {
  const VideoPlayer = dynamic(() => import("../components/video/video"), {
    ssr: false,
  });
  return (
    <div className="home-container">
      <h2>Bif 4: El evento empieza el día 30 de noviembre a las 5pm</h2>
      <VideoPlayer
        url="https://servidorcadefi.inowu.dev/live/hls/bif.m3u8"
        width="100%"
        loop={false}
        muted={false}
        controls={true}
      />
    </div>
  );
}
