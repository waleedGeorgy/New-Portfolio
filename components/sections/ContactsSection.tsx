import Contact from "../cards/aboutMe/Contact";
import Links from "../cards/aboutMe/Links";
import SectionTitle from "../SectionTitle";

export default function ContactsSection() {
    return (
        <div className="py-14 px-4 lg:px-6" id="aboutMe">
            <SectionTitle number="04" title="Contacts" />
            <div className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 2xl:grid-cols-3">
                <Links />
                <Contact />
            </div>
        </div>
    );
}
