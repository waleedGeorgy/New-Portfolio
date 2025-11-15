import { useState } from 'react';
import gallery_images from '@/data/gallery_images';
import ProjectCard from './ProjectCard';

export default function ProjectsGallery() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            {gallery_images.map((item, i) => (
                <ProjectCard
                    title={item.title}
                    link={item.link}
                    tag={item.tag}
                    photo={item.image.src}
                    techStack={item.techStack}
                    description={item.description}
                    key={i}
                    isExpanded={expandedCard === i}
                    onClick={() => handleCardClick(i)}
                />
            ))}
        </div>
    );
}