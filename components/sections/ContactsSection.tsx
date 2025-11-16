import SectionTitle from "../SectionTitle";
import Contact from "../cards/aboutMe/Contact";
import Links from "../cards/aboutMe/Links";

export default function ContactsSection() {
    return (
        <section className="py-14 px-4 lg:px-6" id="aboutMe">
            <SectionTitle number="04" title="Contacts" />
            <div className="space-y-3 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:gap-3 md:space-y-0">
                <Links />
                <Contact />
            </div>
        </section>
    );
}
