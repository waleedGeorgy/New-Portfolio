import { FC, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: ReactNode,
    link?: string,
    hasIcon?: boolean,
    className?: string
}

const Button: FC<ButtonProps> = ({ children, link, hasIcon, className }) => {
    return (
        <>
            {link ? (
                <Link href={link} target="_blank" className="w-10 h-10 cursor-pointer">
                    <ButtonBody hasIcon={hasIcon} className={className}>
                        {children}
                    </ButtonBody>
                </Link>
            ) : (
                <ButtonBody hasIcon={hasIcon} className={className}>
                    {children}
                </ButtonBody>
            )
            }
        </>
    );
};

interface ButtonBodyProps {
    children: ReactNode,
    hasIcon?: boolean,
    className?: string
};

const ButtonBody: FC<ButtonBodyProps> = ({ children, hasIcon, className }) => {
    return (
        <div className="cursor-pointer flex-none w-auto h-full">
            <div
                className={cn("flex items-center justify-center gap-2 rounded-full select-none whitespace-nowrap transition-colors duration-300",
                    className,
                    hasIcon ? "h-10 w-10" : "h-full w-max px-3 py-2")}>
                {children}
            </div>
        </div>
    );
};

export default Button;