import SectionTitle from "@/components/SectionTitle";
import ExpandingFeaturedCard from "@/components/cards/myWork/ExpandingFeaturedCard";

export default function ProjectsSection() {
    return (
        <div className="pt-14 px-4 lg:px-6" id="projects">
            <SectionTitle number="03" title="Projects" />
            <ExpandingFeaturedCard />
        </div>
    );
}