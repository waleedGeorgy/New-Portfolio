import Link from "next/link";
import { FC, ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

// Main Timeline component
interface TimelineProps {
    children: ReactNode
};

const Timeline: FC<TimelineProps> = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-5">{children}</div>
    );
};

export default Timeline;

// Timeline item component
interface TimelineItemProps {
    date: string,
    title: string,
    subtitle: string,
    link?: string,
    tag?: string,
    withoutDate?: boolean
};

export const TimelineItem: FC<TimelineItemProps> = ({ date, title, subtitle, link, tag, withoutDate }) => {
    return (
        <div className="flex gap-8 md:gap-4 lg:gap-6 justify-start relative">
            {/* Left side date */}
            <div className="break-words whitespace-pre" style={{ width: `${withoutDate ? "0" : ""}` }}>
                <p className="text-secondary-foreground">{date}</p>
            </div>
            {/* Right-side contents */}
            <div className="flex gap-x-2" style={{ transform: `${withoutDate ? "translateX(-23px)" : ""}` }}>
                <div className="flex flex-col gap-0.5">
                    {/* Title of item */}
                    <div className="flex text-primary-foreground break-words">
                        <p className="leading-6 text-lg font-normal">{title}</p>
                    </div>
                    {/* Subtitle of item that will contain the subtitle itself along with the link and the tag */}
                    <div className="flex items-center">
                        {link ? <Link href={link} target="_blank"><TimelineSubtitle link={link} subtitle={subtitle} tag={tag} /></Link> : (<TimelineSubtitle link={link} subtitle={subtitle} tag={tag} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Timeline item subtitle component
interface TimelineSubtitleProps {
    subtitle: string,
    tag?: string,
    link?: string
};

const TimelineSubtitle: FC<TimelineSubtitleProps> = ({ subtitle, tag, link }) => {
    return (
        <div className="group text-neutral-400 flex items-center font-normal">
            {/* The subtitle (can be a link if specified) */}
            <p className={cn("text-[14px] leading-6 mt-1 transition-colors duration-200 ease-in-out", link && "group-hover:text-neutral-200 cursor-pointer")}>{subtitle}</p>
            {link && <FiArrowUpRight className="group-hover:text-neutral-200 transition-colors duration-200 ease-in-out" />}
            {
                // The tag
                tag && <div className="ms-2 mt-1 rounded-[20px] bg-gradient-to-bl from-purple-darkness to-green-benzol py-0.7 px-1.5">
                    <p className="text-[14px] font-light text-white">{tag}</p>
                </div>
            }
        </div>
    );
};