import arrowUpv2 from "./assets/arrowUpv2.svg";
import arrowDownv2 from "./assets/arrowDownv2.svg"
interface TimerSetterProps {
  time: number;
  setTime: (time: number) => void;
  min: number;
  max: number;
  interval: number;
  type: "break" | "session";
}

const TimeSetter: React.FC<TimerSetterProps> = ({
  time,
  setTime,
  min,
  max,
  interval,
  type,
}) => {
  return (
    <div className="timer-control">
      <button
        onClick={() => (time > min ? setTime(time - interval) : null)}
        id={`${type}-decrement`}
      >
        <img src={arrowDownv2} alt="" />
      </button>
      <span id={`${type}-length`}>{time / interval}</span>
      <button
        onClick={() => (time < max ? setTime(time + interval) : null)}
        id={`${type}-increment`}
      >
        <img src={arrowUpv2} alt="" />
      </button>
    </div>
  );
};

export default TimeSetter;