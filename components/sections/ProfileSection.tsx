import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";
import LiveClock from "../LiveClock";
import SpecialButton from "../SpecialButton";
import MagneticEffect from "../animations/MagneticEffect";
import MyImage from "@/public/images/profile-pic.webp";
import Signature from "@/public/images/signature.png";

export default function ProfileSection() {
    return (
        <aside className="flex flex-col items-center gap-y-5 px-3" role="banner">
            {/* Profile image and name */}
            <div className="flex flex-col justify-center items-center gap-2.5">
                <div className="relative md:size-[148px] lg:size-[164px] xs:size-[164px] size-[132px] rounded-full flex items-center justify-center bg-gradient-to-br from-purple-darkness to-yellow-ripe">
                    <Image src={MyImage} alt="Waleed Georgy image" priority={true} className="md:size-36 lg:size-40 xs:size-40 size-32 rounded-full object-cover" />
                </div>
                <Image src={Signature} alt="Waleed's signature" className="w-44 xs:w-60 z-10" />
            </div>
            {/* Contact Me button */}
            <MagneticEffect>
                <SpecialButton text="Contact Me" icon={<FaArrowAltCircleRight className="size-5" />} link="/#contactMe" />
            </MagneticEffect>
            {/* Live Clock */}
            <div className="relative hidden md:inline-block">
                <LiveClock timeZone="Europe/Moscow" />
            </div>
        </aside>
    );
}