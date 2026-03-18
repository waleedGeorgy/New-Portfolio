import Link from "next/link";
import { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Timeline = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col gap-y-5">{children}</div>
    );
};

export default Timeline;

interface TimelineItemProps {
    date: string,
    title: string,
    subtitle: string,
    link?: string,
    tag?: string,
    withoutDate?: boolean
};

export const TimelineItem = ({ date, title, subtitle, link, tag, withoutDate }: TimelineItemProps) => {
    return (
        <div className="flex gap-8 md:gap-4 lg:gap-6 justify-start relative">
            {/* Left side date */}
            <div className={`break-words whitespace-pre ${withoutDate && "w-0"}`}>
                <p className="text-gray-400">{date}</p>
            </div>
            {/* Right-side contents */}
            <div className={`flex gap-x-2 ${withoutDate && "-translate-x-6"}`}>
                <div className="flex flex-col gap-0.5">
                    {/* Title of item */}
                    <p className="leading-6 text-lg font-normal text-primary-foreground break-words">{title}</p>
                    {/* Item subtitle */}
                    <div className="flex items-center">
                        {link ?
                            <Link href={link} target="_blank">
                                <TimelineSubtitle link={link} subtitle={subtitle} tag={tag} />
                            </Link>
                            :
                            <TimelineSubtitle link={link} subtitle={subtitle} tag={tag} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

interface TimelineSubtitleProps {
    subtitle: string,
    tag?: string,
    link?: string
};

const TimelineSubtitle = ({ subtitle, tag, link }: TimelineSubtitleProps) => {
    return (
        <div className="group text-neutral-400 flex items-center font-normal">
            {/* The subtitle (can be a link if specified) */}
            <p className={`text-sm leading-6 mt-1 transition-colors duration-200 ease-in-out" ${link && "group-hover:text-neutral-200 cursor-pointer underline underline-offset-2"}`}>
                {subtitle}
            </p>
            {link && <FiArrowUpRight className="group-hover:text-neutral-200 transition-colors duration-200 ease-in-out" />}
            {tag &&
                <div className="ms-2 mt-1 rounded-2xl bg-[rgb(2,110,111)] px-2.5 py-0.5">
                    <p className="text-sm text-white">{tag}</p>
                </div>
            }
        </div>
    );
};