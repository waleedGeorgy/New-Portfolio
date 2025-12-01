import SectionTitle from "@/components/SectionTitle";
import ProjectsGallery from "@/components/cards/projects/ProjectsGallery";

export default function ProjectsSection() {
    return (
        <section className="pt-14 px-3.5 lg:px-5" id="projects">
            <SectionTitle number="03" title="Projects" />
            <ProjectsGallery />
        </section>
    );
}