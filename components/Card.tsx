import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    title: string,
    children: ReactNode,
    className?: string
};

const Card: FC<CardProps> = ({ title, children, className }) => {
    return (
        <div className={cn("relative bg-primary-background w-full h-fit rounded-xl border border-border p-6 text-primary-foreground overflow-hidden",
            className)}>
            <div className="flex flex-col gap-y-6">
                {/* Card title */}
                {title && (
                    <div className="font-homenaje tracking-wide">
                        <p className="capitalize font-bold tracking-wider text-2xl">{title}</p>
                    </div>
                )}
                {/* Card body */}
                {children}
            </div>
        </div>
    );
};

export default Card;