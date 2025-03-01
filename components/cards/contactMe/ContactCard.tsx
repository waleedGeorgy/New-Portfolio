import { FC, ReactNode } from "react";
import Button from "@/components/Button";

interface ContactCardProps {
    title?: string,
    icon: ReactNode,
    text: string,
    btnText: string,
    btnIcon?: ReactNode,
    link?: string
};

const ContactCard: FC<ContactCardProps> = ({title, icon, text, btnText, btnIcon, link}) => {
    return (
        <div className="bg-gradient-to-tl from-purple-darkness to-blue-cosmos rounded-lg relative overflow-hidden py-4 pl-[25px] shadow-md">
            <div className="z-20 flex flex-col gap-6 justify-between items-start">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-x-1">
                    <span className="bg-primary-background w-9 h-9 rounded-lg grid place-items-center">{icon}</span>
                    <h1>{title}</h1>
                    <div>
                        <h2 className="break-words text-[3.5vw] lg:text-[1.5vw]">{text}</h2>
                    </div>
                </div>
                {/* Body */}
                <Button className="!w-24 !shadow-md text-lg" link={link}>{btnIcon}{btnText}</Button>
            </div>
        </div>
    );
};

export default ContactCard;
