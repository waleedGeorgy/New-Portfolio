import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    title: string,
    children: ReactNode,
    className?: string
};

const Card: FC<CardProps> = ({ title, children, className }) => {
    return (
        <div className={cn("relative w-full h-fit rounded-xl border p-6 overflow-hidden glass", className)}>
            <div className="flex flex-col gap-y-6">
                {/* Card title */}
                <p className="font-homenaje tracking-wide capitalize font-bold text-2xl text-gray-200">{title}</p>
                {/* Card body */}
                {children}
            </div>
        </div>
    );
};

export default Card;