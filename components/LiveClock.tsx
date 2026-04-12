"use client";
import { useEffect, useState } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const LiveClock = ({ timeZone }: { timeZone: string }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date().toLocaleString([], { timeZone, hour: "2-digit", minute: "2-digit", hour12: false });
            setTime(currentTime);
        };

        const clockInterval = setInterval(updateTime, 60 * 1000);
        return () => clearInterval(clockInterval);
    }, [timeZone]);

    return (
        <>
            {time ?
                <time className="text-lg lg:text-xl text-gray-300">
                    Local time: <span className="text-gray-100">{time}</span>
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

