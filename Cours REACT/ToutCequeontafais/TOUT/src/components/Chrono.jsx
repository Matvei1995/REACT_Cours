import React, { useState, useEffect } from "react";

export function Chrono(){
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

    const formattedTime = (timer) => {
    const minutes = Math.floor(timer / 60000).toString().padStart(2, "0");
    const seconds = Math.floor((timer % 60000) / 1000).toString().padStart(2, "0");
    const centiseconds = Math.floor((timer % 1000) / 10).toString().padStart(2, "0");
    return `${minutes}:${seconds}:${centiseconds}`;
  };

  return (
    <div>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <p>{formattedTime(timer)}</p>
    </div>
  );
};

