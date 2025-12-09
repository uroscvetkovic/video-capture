import { useRef, useState } from "react";
import "./VideoPreview.scss";

const VideoPreview = () => {
  const [videoPreviewText, setVideoPreviewText] = useState("Video Preview");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const start = async () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          setTimeout(() => {
            captureImage();
          }, 5000);
        }
      })
      .catch((error) =>
        setVideoPreviewText("Error accessing media devices: " + error)
      );
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const stream = video.srcObject as MediaStream;
    stream.getTracks().forEach((track) => track.stop());

    video.srcObject = null;
  };

  return (
    <div className="video-preview-root">
      <button className="start-button" onClick={() => start()}>
        Start
      </button>

      <div className="video-overlay">
        <p className="overlay-text">{videoPreviewText}</p>
        <video className="video-element" ref={videoRef} autoPlay muted></video>
      </div>

      <div className="snapshot-overlay">
        <p className="overlay-text">Snapshot</p>
        <canvas className="snapshot-canvas" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default VideoPreview;
