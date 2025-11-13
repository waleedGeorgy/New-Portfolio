import SectionTitle from "@/components/SectionTitle";
import Me from "../cards/aboutMe/Me";
import Resume from "../cards/aboutMe/Resume";
import Background from "../cards/aboutMe/Background";
import Experience from "../cards/aboutMe/Experience";
import Education from "../cards/aboutMe/Education";
import Certifications from "../cards/aboutMe/Certifications";
import Links from "../cards/aboutMe/Links";
import Stack from "../cards/aboutMe/Stack";
import Contact from "../cards/aboutMe/Contact";

export default function AboutSection() {
    return (
        <div className="pt-24 px-3 lg:px-8" id="aboutMe">
            <SectionTitle number="02" title="About Me" />
            <div className="space-y-3 py-6">
                <div className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 2xl:grid-cols-3">
                    <Me />
                    <Resume />
                    <Background />  
                    <Education />
                    <Experience />
                    <Links />
                    <Certifications />
                    <Stack />
                    <Contact />
                </div>
            </div>
        </div>
    );
}
