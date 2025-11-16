import Link from "next/link";
import { FC, ReactNode } from "react";

interface SpecialButtonProps {
    text: string,
    icon?: ReactNode,
    link?: string
}

const SpecialButton: FC<SpecialButtonProps> = ({ text, icon, link }) => {
    return (
        <Link className="special-btn" href={link!}>
            <div className="group md:bg-[rgb(12,29,37)] bg-[rgb(21,21,21)] hover:bg-transparent text-primary-foreground hover:text-black rounded-full py-2 px-6 flex items-center gap-2.5 cursor-pointer transition-all duration-200 ease-in-out">
                <span className="lg:text-lg">{text}</span>
                <span className="group-hover:translate-x-3 group-hover:rotate-90 transition-transform duration-300 ease-in-out">{icon}</span>
            </div>
        </Link>
    );
};

export default SpecialButton;