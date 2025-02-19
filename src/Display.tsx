import { DisplayState, formatTime } from "./helpers";
import PauseBtn from "./PauseBtn";
import PlayBtn from "./PlayBtn";
import resetBtn from "./assets/resetBtn.svg"
interface DisplayProps {
  displayState: DisplayState;
  reset: () => void;
  startStop: (displayState: DisplayState) => void;
}

const Display: React.FC<DisplayProps> = ({
  displayState,
  reset,
  startStop,
}) => {
  return (
    <div className="display-container">
      <h4 id="timer-label">{displayState.timeType}</h4>
      <span
        id="time-left"
        style={{ color: `${displayState.timerRunning ? "red" : "#4d2d3a"}` }}
      >
        {formatTime(displayState.time)}
      </span>
      <div id="play-control">
        <button className="flex-btn" id="start_stop" onClick={() => startStop(displayState)}>
          {displayState.timerRunning ? <PauseBtn/> : <PlayBtn />}
        </button>
        <button id="reset" onClick={reset}>
          <img id="reset-btn" src={resetBtn} alt="reset" />
        </button>
      </div>
    </div>
  );
};

export default Display;