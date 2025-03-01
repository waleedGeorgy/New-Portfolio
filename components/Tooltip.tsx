import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useState } from "react";

interface TooltipProps {
    title: string,
    icon: string | StaticImport
}

const Tooltip: FC<TooltipProps> = ({title, icon}) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className={cn("link relative bg-[#2D2C33] w-11 h-11 transform cursor-pointer grid place-items-center shadow-md shadow-slate-900",
            "border border-border rounded-xl",
            "hover:scale-110 transition-all duration-200")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Stack icon */}
            <div className="w-[28px] h-[28px]">
                <Image src={icon} alt={title} className="w-full h-full overflow-clip object-contain" />
            </div>
            {/* Show popup with the name of the technology on hover */}
            { hovered && <div className="absolute -top-6 bg-black/[0.2] py-0.8 px-2 rounded-lg transition-all duration-200">
                            <p className="font-homenaje tracking-wider text-[16px] whitespace-nowrap">{title}</p>
                        </div>}
        </div>
    )
};

export default Tooltip;