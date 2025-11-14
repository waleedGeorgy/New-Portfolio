import SectionTitle from "@/components/SectionTitle";
import ExpandingFeaturedCard from "@/components/cards/myWork/ExpandingFeaturedCard";

export default function ProjectsSection() {
    return (
        <div className="pt-14 px-3 lg:px-8" id="projects">
            <SectionTitle number="02" title="Projects" />
            <div className="mt-16">
                <ExpandingFeaturedCard />
            </div>
        </div>
    );
}