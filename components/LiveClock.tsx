"use client";
import { FC, useEffect, useState } from "react";

interface LiveClockProps {
    timeZone: string
}

const LiveClock: FC<LiveClockProps> = ({ timeZone }) => {
    const [time, setTime] = useState("");

    {/* Initializing and running the clock */ }
    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date().toLocaleString([], { timeZone: timeZone, hour: "2-digit", minute: "2-digit", hour12: false });
            setTime(currentTime);
        };
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <div className="text-xl text-gray-300">
            {time ? <span>Local time, {time}</span> : <p className="animate-pulse">Loading local time...</p>}
        </div>
    );
};

export default LiveClock;

