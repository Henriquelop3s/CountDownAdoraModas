"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const launchDate = new Date("2025-03-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  function calculateTimeLeft(): TimeLeft | null {
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-loader text-white fill-white animate-spin"
        >
          <path d="M12 2v4" />
          <path d="m16.2 7.8 2.9-2.9" />
          <path d="M18 12h4" />
          <path d="m16.2 16.2 2.9 2.9" />
          <path d="M12 18v4" />
          <path d="m4.9 19.1 2.9-2.9" />
          <path d="M2 12h4" />
          <path d="m4.9 4.9 2.9 2.9" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
      <div className="flex flex-row items-center gap-4">
        <TimeBox label="dias" value={timeLeft.days} />
        <TimeBox label="horas" value={timeLeft.hours} />
        <TimeBox label="min" value={timeLeft.minutes} />
        <TimeBox label="seg" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

interface TimeBoxProps {
  label: string;
  value: number;
}

function TimeBox({ label, value }: TimeBoxProps) {
  return (
    <div
      className="flex flex-col items-center p-4 bg-neutral rounded-xl text-neutral-content mb-16"
      style={{ overflow: "hidden" }}
    >
      <span
        className="text-5xl text-white"
        style={{
          fontFamily: "'Playfair Display', serif", // Fonte correta para números
        }}
      >
        {value}
      </span>
      <span
        className="uppercase text-sm text-gray-300"
        style={{
          fontFamily: "'Bebas Neue', sans-serif", // Fonte correta para rótulos
        }}
      >
        {label}
      </span>
    </div>
  );
}

