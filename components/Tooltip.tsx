import Image from "next/image";
import { useState } from "react";

const Tooltip = ({ title, icon }: { title: string, icon: string }) => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div className="link relative bg-zinc-800 size-12 transform cursor-pointer grid place-items-center shadow-md shadow-slate-900 border border-border rounded-xl hover:brightness-125 hover:scale-110 transition-all duration-200"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="size-7">
                <Image src={icon} alt={title} className="size-full overflow-clip object-contain" />
            </div>
            {hovered &&
                <div className={`
                    absolute bg-black/[0.50] backdrop-blur-lg px-2 py-1 rounded-lg transition-all duration-500 ease-out pointer-events-none ${hovered ? "opacity-100 -translate-y-9 visible" : "opacity-0 -translate-y-0 invisible"}
                `}>
                    <p className="font-homenaje text-gray-200 tracking-wider whitespace-nowrap text-sm">{title}</p>
                </div>
            }
        </div>
    )
};

export default Tooltip;