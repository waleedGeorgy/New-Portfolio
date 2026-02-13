import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ProjectCardHeader from "./ProjectCardHeader";

interface ProjectCardProps {
    title: string;
    tag: string;
    link: string;
    photo: string;
    techStack: string[];
    description: string;
    isExpanded: boolean;
    onClick: () => void;
}

const ProjectCard = ({ title, tag, photo, link, techStack, description, isExpanded, onClick }: ProjectCardProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    useEffect(() => {
        if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
    }, [isExpanded]);

    return (
        <div
            className={`rounded-xl transition-all duration-500 ease-in-out overflow-hidden cursor-pointer transform-gpu border border-zinc-800 ${isExpanded ? 'shadow-xl z-10 bg-gray-800' : 'hover:shadow-lg bg-zinc-900'}`}
            onClick={onClick}
        >
            <ProjectCardHeader title={title} tag={tag} link={link} isExpanded={isExpanded} />
            <div
                style={{
                    height: isExpanded ? contentHeight : 0,
                    opacity: isExpanded ? 1 : 0
                }}
                className="transition-all duration-500 ease-in-out px-4"
            >
                {/* Expandable section */}
                <div ref={contentRef}>
                    {/* Project image */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 border border-border">
                        <Image
                            src={photo}
                            alt={tag}
                            className="rounded-lg object-cover"
                            fill
                        />
                    </div>
                    {/* Additional project content */}
                    <div className="space-y-4 text-primary-foreground pb-4">
                        {/* Project tech stack */}
                        <div>
                            <p className="text-gray-400 text-lg">Tech stack:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {techStack.map(tech => (
                                    <span key={tech} className="bg-indigo-700 shadow-lg text-primary px-2.5 py-0.5 rounded-full text-sm font-light">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Project description */}
                        <div>
                            <p className="text-gray-400 text-lg">Description:</p>
                            <p className="text-text-secondary">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectCard;