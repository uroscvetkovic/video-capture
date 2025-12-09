import "./App.scss";
import VideoPreview from "./components/videoPreview/VideoPreview";

function App() {
  return (
    <>
      <h1 className="title">Video capture</h1>
      <p className="description">
        Click the button to allow camera access.
        <br />A photo will be taken automatically after a few seconds.
      </p>

      <VideoPreview />
    </>
  );
}

export default App;
