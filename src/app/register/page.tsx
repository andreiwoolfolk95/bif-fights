import "../auth.scss";
import dynamic from "next/dynamic";
import { FormComponent } from "./components/form";

export default function RegisterPage() {
  const VideoPlayer = dynamic(() => import("../../components/video/video"), {
    ssr: false,
  });
  return (
    <div className="auth-container">
      <VideoPlayer />
      <FormComponent />
    </div>
  );
}
