"use client";
import { usePathname } from "next/navigation";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

type VideoComponent = {
  url: string;
  width: string;
  muted: boolean;
  loop: boolean;
  controls: boolean;
};
const Video = (props: VideoComponent) => {
  const { url, width, muted, loop, controls } = props;
  const responsive1000 = useMediaQuery({ query: "(max-width: 1000px)" });
  const pathname = usePathname();
  return (
    <ReactPlayer
      url={url}
      playing
      muted={muted}
      loop={loop}
      width={width}
      controls={controls}
      height="100%"
      style={{
        display: responsive1000 && pathname !== "/" ? "none" : "initial",
      }}
    />
  );
};
export default Video;
