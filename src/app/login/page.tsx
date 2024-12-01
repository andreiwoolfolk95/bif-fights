import "../auth.scss";
import dynamic from "next/dynamic";
import { FormComponent } from "./components/form";

export default function LoginPage() {
  const VideoPlayer = dynamic(() => import("../../components/video/video"), {
    ssr: false,
  });
  return (
    <div className="auth-container">
      <VideoPlayer
        url="https://servidorcadefi.inowu.dev/media/2021/INOWUV/BIF/index.m3u8"
        width="75%"
        loop={true}
        muted={true}
        controls={false}
      />
      <FormComponent />
    </div>
  );
}
