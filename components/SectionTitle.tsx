import { FC, ReactNode } from "react";
import SvgCurve from "./animations/InteractiveUnderline";

interface SectionTitleProps {
    number: string,
    title: string,
    icon?: ReactNode
}

const SectionTitle: FC<SectionTitleProps> = ({ number, title, icon }) => {
    return (
        <div className="relative my-10 px-8 z-10">
            {/* Section number */}
            <div className="outline-none flex flex-col justify-start shrink-0 opacity-35 transform -top-32 2xl:-top-24 flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
                <h2 className="font-homenaje text-[180px] text-center text-primary-foreground relative">
                    <span className="bottom-fade text-transparent bg-clip-text p-4">{number}</span>
                </h2>
            </div>
            {/* Section title and icon */}
            <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-homenaje">
                <p className="text-[17vw] lg:text-[10vw] leading-[100%] text-primary-foreground">{title}</p>
                <p className="text-[16vw] lg:text-[11vw] leading-[100%] text-primary-foreground">{icon}</p>
            </div>
            {/* Section interactive underline */}
            <SvgCurve />
        </div>
    );
};

export default SectionTitle;
