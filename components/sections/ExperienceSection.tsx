import SectionTitle from "../SectionTitle";
import Experience from "../cards/aboutMe/Experience";
import Education from "../cards/aboutMe/Education";
import Certifications from "../cards/aboutMe/Certifications";
import Stack from "../cards/aboutMe/Stack";
import OtherSkills from "../cards/aboutMe/OtherSkills";

export default function ExperienceSection() {
    return (
        <div className="pt-14 px-4 lg:px-6" id="experience">
            <SectionTitle number="02" title="Experience" />
            <div className="space-y-3 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:gap-3 md:space-y-0">
                <div className="space-y-3">
                    <Education />
                    <Experience />
                </div>
                <Certifications />
                <Stack />
                <OtherSkills />
            </div>
        </div>
    );
}
