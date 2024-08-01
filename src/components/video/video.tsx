"use client";
import ReactPlayer from "react-player";

type VideoComponent = {
  url: string;
  width: string;
  muted: boolean;
  loop: boolean;
  controls: boolean;
};
const Video = (props: VideoComponent) => {
  const { url, width, muted, loop, controls } = props;
  return (
    <ReactPlayer
      url={url}
      playing
      muted={muted}
      loop={loop}
      width={width}
      controls={controls}
      height="100%"
    />
  );
};
export default Video;
