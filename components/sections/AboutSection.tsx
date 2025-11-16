import SectionTitle from "../SectionTitle";
import Resume from "../cards/aboutMe/Resume";
import Background from "../cards/aboutMe/Background";

export default function AboutSection() {
    return (
        <div className="px-4 lg:px-6" id="aboutMe">
            <SectionTitle number="01" title="About Me" />
            <div className="space-y-3 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:gap-3 md:space-y-0">
                <Resume />
                <Background />
            </div>
        </div>
    );
}
