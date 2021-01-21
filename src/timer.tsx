import * as React from "react";

const Timer = () => {
  const [timer, setTimer] = React.useState({
    minutes: 2,
    seconds: 0
  });

  const interval = React.useRef(0);

  React.useEffect(() => {
    const { seconds, minutes } = timer;
    interval.current = setInterval(() => {
      if (seconds > 0) {
        setTimer((prevState) => ({
          ...prevState,
          seconds: seconds - 1
        }));
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval.current);
        } else {
          setTimer((prevState) => ({
            ...prevState,
            seconds: 59,
            minutes: minutes - 1
          }));
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval.current);
      interval.current = 0;
    };
  }, [timer]);

  return (
    <div>
      {timer.minutes}:{timer.seconds !== 0 ? timer.seconds : "00"}
    </div>
  );
};

export default Timer;
