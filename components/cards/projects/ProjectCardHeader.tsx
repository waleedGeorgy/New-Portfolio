// If you want to add a toggle indicator to the header
import { FC } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardHeaderProps {
    title: string;
    tag: string;
    link: string;
    isExpanded?: boolean;
}

const ProjectCardHeader: FC<ProjectCardHeaderProps> = ({
    title, tag, link, isExpanded
}) => {
    return (
        <div className="flex items-center justify-between px-5 py-4 text-primary-foreground">
            <div className="flex flex-col gap-1">
                <div className="group flex flex-row items-end gap-2 w-fit">
                    {/* Title and link */}
                    <Link href={link} target="_blank" className="font-semibold text-xl underline underline-offset-2 transition-all duration-300">{title}</Link>
                    <Link href={link} target="_blank" className="translate-x-0 opacity-0 group-hover:translate-x-3 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-xs">Visit website<FiArrowUpRight className="inline ml-1" /></span>
                    </Link>
                </div>
                {/* Tag */}
                <span className="text-gray-400 text-sm">{tag}</span>
            </div>
            <div className="flex items-center gap-2 w-fit">
                {/* Expand/collapse button */}
                <span className="text-sm text-text-secondary sm:inline-block hidden">
                    {isExpanded ? 'Click to collapse' : 'Click to expand'}
                </span>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectCardHeader;