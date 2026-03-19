'use client'
import Image from "next/image";
import { useState } from "react";

const Tooltip = ({ title, icon }: { title: string, icon: string }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="link relative bg-zinc-800 size-12 grid place-items-center border border-border rounded-lg hover:brightness-110 transition-all duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="size-7">
                <Image src={icon} alt={title} className="size-full overflow-clip object-contain" />
            </div>
            <div className={`
                absolute bg-zinc-950 px-2.5 py-0.5 rounded-md pointer-events-none transition-all duration-300
                ${hovered ? "opacity-100 -translate-y-9 scale-100" : "opacity-0 translate-y-0 scale-0"}
            `}>
                <p className="text-gray-200 whitespace-nowrap">{title}</p>
            </div>
        </div>
    )
};

export default Tooltip;