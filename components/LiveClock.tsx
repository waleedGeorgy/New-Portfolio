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
        <div className="text-2xl text-secondary-foreground">
            {time ? <span>{timeZone.split("/")[1]}, {time}</span> : <p>Loading local time...</p>}
        </div>
    );
};

export default LiveClock;

