"use client";
import { useEffect, useState } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const LiveClock = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date().toLocaleString("en-GB", {
                timeZone: "Europe/Moscow",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            });
            setTime(currentTime);
        };

        updateTime();

        const clockInterval = setInterval(updateTime, 60 * 1000);
        return () => clearInterval(clockInterval);
    }, []);

    return (
        <>
            {time ?
                <time className="text-lg lg:text-xl text-gray-300">
                    Local time <span className="text-gray-100">{time}</span>
                </time>
                :
                <p className="text-gray-400 text-lg lg:text-xl flex items-center gap-1.5">
                    Loading local time
                    <CgSpinnerTwoAlt className="animate-spin" />
                </p>
            }
        </>
    );
};

export default LiveClock;

