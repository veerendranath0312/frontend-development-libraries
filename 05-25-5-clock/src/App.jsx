import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaCoffee } from "react-icons/fa";

const Ring = ({ percentage, color }) => {
  const radius = 70;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - percentage * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset, transition: "stroke-dashoffset 1s linear" }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

const TimerCard = ({
  time,
  isWorkTime,
  percentage,
  onPrimaryAction,
  onEndSession,
  color,
  isRunning,
}) => {
  const Icon = isWorkTime ? FaBriefcase : FaCoffee;

  return (
    <div
      className={`w-80 p-6 rounded-3xl shadow-xl flex flex-col items-center gap-6 ${
        isWorkTime ? "bg-orange-50" : "bg-blue-50"
      }`}
    >
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
        <Icon className={isWorkTime ? "text-orange-500" : "text-blue-500"} />
        <h2 id="timer-label">{isWorkTime ? "Session" : "Break"}</h2>
      </div>
      <div className="relative">
        <Ring percentage={percentage} color={color} />
        <div
          className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800"
          id="time-left"
        >
          {time}
        </div>
      </div>
      <div
        className={`rounded-xl p-4 w-full ${
          isWorkTime ? "bg-orange-100 text-orange-800" : "bg-blue-100 text-blue-800"
        }`}
      >
        <p className="font-medium flex items-center gap-2">
          <Icon className="inline-block" />
          {isWorkTime ? "This is your work time" : "This is your break time"}
        </p>
        <p className="text-sm">
          {isWorkTime
            ? "Let’s focus on getting things done"
            : "Let’s breathe and relax for a bit"}
        </p>
      </div>
      <button
        onClick={onPrimaryAction}
        id="start_stop"
        className={`w-full py-2 rounded-xl font-semibold text-white cursor-pointer ${
          isWorkTime
            ? "bg-orange-500 hover:bg-orange-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isRunning ? "Pause" : "Continue"}
      </button>
      <button
        onClick={onEndSession}
        id="reset"
        className="w-full py-2 border border-gray-500 text-gray-700 rounded-xl mt-2 hover:bg-gray-100 cursor-pointer"
      >
        Reset
      </button>
    </div>
  );
};

const LengthControl = ({
  label,
  length,
  onDecrease,
  onIncrease,
  disabled,
  labelId,
  lengthId,
  decId,
  incId,
}) => (
  <div className="flex flex-col items-center">
    <p className="text-lg font-medium mb-1" id={labelId}>
      {label}
    </p>
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrease}
        disabled={disabled}
        id={decId}
        className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        -
      </button>
      <span className="w-8 text-center" id={lengthId}>
        {length}
      </span>
      <button
        onClick={onIncrease}
        disabled={disabled}
        id={incId}
        className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  </div>
);

function WorkaidUI() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const timerRef = useRef(null);
  const beepRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            // Play beep when timer hits zero
            if (beepRef.current) {
              beepRef.current.currentTime = 0;
              beepRef.current.play();
            }
            const nextIsWorkTime = !isWorkTime;
            setIsWorkTime(nextIsWorkTime);
            return nextIsWorkTime ? sessionLength * 60 : breakLength * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, isWorkTime, breakLength, sessionLength]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const resetTimer = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsWorkTime(true);
    if (beepRef.current) {
      beepRef.current.pause();
      beepRef.current.currentTime = 0;
    }
  };

  const totalDuration = isWorkTime ? sessionLength * 60 : breakLength * 60;
  const percentage = (totalDuration - timeLeft) / totalDuration;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-orange-200 flex flex-col items-center gap-10 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mt-4">Workaid Pomodoro Timer</h1>

      <div className="flex gap-10">
        <LengthControl
          label="Break Length"
          length={breakLength}
          onDecrease={() => setBreakLength((prev) => Math.max(1, prev - 1))}
          onIncrease={() => setBreakLength((prev) => Math.min(60, prev + 1))}
          disabled={isRunning}
          labelId="break-label"
          lengthId="break-length"
          decId="break-decrement"
          incId="break-increment"
        />

        <LengthControl
          label="Session Length"
          length={sessionLength}
          onDecrease={() => {
            const newLength = Math.max(1, sessionLength - 1);
            setSessionLength(newLength);
            if (isWorkTime && !isRunning) setTimeLeft(newLength * 60);
          }}
          onIncrease={() => {
            const newLength = Math.min(60, sessionLength + 1);
            setSessionLength(newLength);
            if (isWorkTime && !isRunning) setTimeLeft(newLength * 60);
          }}
          disabled={isRunning}
          labelId="session-label"
          lengthId="session-length"
          decId="session-decrement"
          incId="session-increment"
        />
      </div>

      <TimerCard
        title={isWorkTime ? "Work Time" : "Break Time"}
        time={formatTime(timeLeft)}
        isWorkTime={isWorkTime}
        percentage={percentage}
        onPrimaryAction={() => setIsRunning((prev) => !prev)}
        onEndSession={resetTimer}
        color={isWorkTime ? "#f97316" : "#3b82f6"}
        isRunning={isRunning}
      />
      <audio
        id="beep"
        ref={beepRef}
        src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        preload="auto"
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WorkaidUI />
    </div>
  );
}

export default App;
