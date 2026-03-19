import SectionTitle from "../SectionTitle";
import Experience from "../cards/about/Experience";
import Education from "../cards/about/Education";
import Certifications from "../cards/about/Certifications";
import Stack from "../cards/about/Stack";
import OtherSkills from "../cards/about/OtherSkills";

export default function ExperienceSection() {
    return (
        <section className="pt-14 px-3.5 lg:px-5" id="experience">
            <SectionTitle number="02" title="Experience" />
            <div className="space-y-3 grid grid-cols-1 lg:grid-cols-2 md:gap-3 md:space-y-0">
                <div className="space-y-3">
                    <Education />
                    <Experience />
                </div>
                <Certifications />
                <Stack />
                <OtherSkills />
            </div>
        </section>
    );
}
