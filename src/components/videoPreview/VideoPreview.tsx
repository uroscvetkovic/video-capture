import { useRef, useState } from "react";
import "./VideoPreview.scss";

const VideoPreview = () => {
  const [videoPreviewText, setVideoPreviewText] = useState("Video Preview");
  const videoRef = useRef<HTMLVideoElement>(null);

  const start = async () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) =>
        setVideoPreviewText("Error accessing media devices: " + error)
      );
  };

  return (
    <div className="video-preview-root">
      <button className="start-button" onClick={() => start()}>
        Start
      </button>

      <div className="video-overlay">
        <p>{videoPreviewText}</p>
        <video className="video-element" ref={videoRef} autoPlay muted></video>
      </div>
    </div>
  );
};

export default VideoPreview;
