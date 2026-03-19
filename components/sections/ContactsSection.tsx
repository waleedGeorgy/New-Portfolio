import SectionTitle from "../SectionTitle";
import Contacts from "../cards/about/Contacts";
import Links from "../cards/about/Links";

export default function ContactsSection() {
    return (
        <section className="py-14 px-3.5 lg:px-5" id="aboutMe">
            <SectionTitle number="04" title="Contacts" />
            <div className="space-y-3 grid grid-cols-1 lg:grid-cols-2 md:gap-3 md:space-y-0">
                <Links />
                <Contacts />
            </div>
        </section>
    );
}
