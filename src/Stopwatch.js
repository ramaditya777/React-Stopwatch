import React, { useState, useEffect } from 'react';
import './Stopwatch.css'; // Import the external CSS file

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="time-display">{formatTime()}</div>
      <div className="button-container">
        {!isRunning ? (
          <button className="button" onClick={startTimer}>Start</button>
        ) : (
          <button className="button" onClick={pauseTimer}>Pause</button>
        )}
        <button className="button" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
