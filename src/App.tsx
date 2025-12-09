import { useRef, useState } from "react";
import "./App.scss";
import Instructions from "./components/instructions/Instructions";

function App() {
  const [videoPreviewText, setVideoPreviewText] = useState("Video Preview");
  const [showResetButton, setshowResetButton] = useState(false);

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

    //scroll to bottom of the page to show the captured image
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    video.srcObject = null;
    setshowResetButton(true);
  };

  const reset = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    setshowResetButton(false);
  };

  return (
    <>
      <Instructions
        start={start}
        reset={reset}
        showResetButton={showResetButton}
      />

      <div className="video-preview-root">
        <div className="video-overlay">
          <p className="overlay-text">{videoPreviewText}</p>
          <video
            className="video-element"
            ref={videoRef}
            autoPlay
            muted
          ></video>
        </div>

        <div className="snapshot-overlay">
          <p className="overlay-text">Snapshot</p>
          <canvas className="snapshot-canvas" ref={canvasRef}></canvas>
        </div>
      </div>
    </>
  );
}

export default App;
