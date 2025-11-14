import Me from "../cards/aboutMe/Me";
import Resume from "../cards/aboutMe/Resume";
import Background from "../cards/aboutMe/Background";
import Header from "./Header";

export default function AboutSection() {
    return (
        <div className="px-4 lg:px-8 space-y-6 pt-6" id="aboutMe">
            <Header />
            <div className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 2xl:grid-cols-3">
                <Me />
                <Resume />
                <Background />
            </div>
        </div>
    );
}
