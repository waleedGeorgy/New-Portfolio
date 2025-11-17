"use client";
import { useEffect, useState } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const LiveClock = ({ timeZone }: { timeZone: string }) => {
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
        <>
            {time ?
                <time className="text-lg md:text-xl lg:text-2xl text-gray-300 font-homenaje">Local time, {time}</time>
                :
                <p className="animate-pulse text-gray-400 text-lg md:text-xl lg:text-2xl flex flex-row items-center gap-1.5 font-homenaje">Loading local time<CgSpinnerTwoAlt className="animate-spin" /></p>
            }
        </>
    );
};

export default LiveClock;

