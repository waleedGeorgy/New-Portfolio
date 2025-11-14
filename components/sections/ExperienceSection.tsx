import Experience from "../cards/aboutMe/Experience";
import Education from "../cards/aboutMe/Education";
import Certifications from "../cards/aboutMe/Certifications";
import Stack from "../cards/aboutMe/Stack";
import SectionTitle from "../SectionTitle";
import OtherSkills from "../cards/aboutMe/OtherSkills";

export default function ExperienceSection() {
    return (
        <div className="pt-14 px-3 lg:px-8" id="experience">
            <SectionTitle number="01" title="Experience" />
            <div className="space-y-4 py-4">
                <div className="space-y-3 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-3 md:space-y-0">
                    <div className="space-y-3">
                        <Education />
                        <Experience />
                    </div>
                    <Certifications />
                    <div className="space-y-3">
                        <Stack />
                        <OtherSkills />
                    </div>
                </div>
            </div>
        </div>
    );
}
