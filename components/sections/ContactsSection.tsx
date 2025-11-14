import Contact from "../cards/aboutMe/Contact";
import Links from "../cards/aboutMe/Links";
import SectionTitle from "../SectionTitle";

export default function ContactsSection() {
    return (
        <div className="pt-14 px-3 lg:px-8" id="aboutMe">
            <SectionTitle number="03" title="Contacts" />
            <div className="space-y-4 py-4">
                <div className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 2xl:grid-cols-3">
                    <Links />
                    <Contact />
                </div>
            </div>
        </div>
    );
}
