import { useEffect, useEffectEvent, useState } from "react";
import "./CountdownTimer.scss";

interface CountdownTimerProps {
  show: boolean;
}

const CountdownTimer = ({ show }: CountdownTimerProps) => {
  const [timer, setTimer] = useState(0);

  // useEffectEvent to avoid React 19 “synchronous state update” warning
  const resetTimer = useEffectEvent(() => {
    setTimer(5);
  });

  useEffect(() => {
    if (show) {
      resetTimer();
    }
  }, [show]);

  useEffect(() => {
    if (!show || timer <= 0) return;

    const id = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [timer]);

  if (!show) return null;

  return <span className="countdown-timer">{timer}</span>;
};

export default CountdownTimer;
