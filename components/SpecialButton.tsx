import { FC, ReactNode } from "react";

interface SpecialButtonProps {
    text: string,
    icon?: ReactNode,
    link?: string
}

const SpecialButton: FC<SpecialButtonProps> = ({text, icon, link}) => {
    return(
        <a className="special-btn" href={link}>
            <div className="group bg-[#161616] hover:bg-transparent text-primary-foreground hover:text-black rounded-[100em] py-5 px-10 flex items-center gap-2 font-bold lg:text-[1.8vw] text-xl cursor-pointer transition-all duration-200 ease-in-out">
                <span>{text}</span>
                <span className="group-hover:translate-x-[0.8vw] transition-transform duration-300 ease-in-out">{icon}</span>
            </div>
        </a>
    );
};

export default SpecialButton;