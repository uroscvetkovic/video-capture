import "./Instructions.scss";

interface InstructionsProps {
  start: () => void;
  reset: () => void;
  showResetButton?: boolean;
}

const Instructions = ({
  start,
  reset,
  showResetButton = false,
}: InstructionsProps) => {
  return (
    <div className="instructions">
      <h1 className="title">Video capture</h1>
      <p className="description">
        Click the button to allow camera access.
        <br />A photo will be taken automatically after a few seconds.
      </p>

      <div className="button-container">
        <button className="start-button" onClick={() => start()}>
          Start
        </button>
        <button
          className="reset-button"
          style={{ display: showResetButton ? "block" : "none" }}
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Instructions;
