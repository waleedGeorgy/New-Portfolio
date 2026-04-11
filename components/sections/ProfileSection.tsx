import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";
import LiveClock from "../LiveClock";
import SpecialButton from "../SpecialButton";
import MagneticEffect from "../animations/MagneticEffect";
import MyImage from "@/public/images/profile-pic.jpg";
import Signature from "@/public/images/signature.png";

export default function ProfileSection() {
    return (
        <aside className="flex flex-col items-center gap-y-5 px-3" role="banner">
            {/* Profile image and name */}
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="relative md:size-[180px] lg:size-[244px] xs:size-[180px] size-[164px] rounded-full flex items-center justify-center bg-gradient-to-br from-purple-darkness to-green-benzol">
                    <Image src={MyImage} alt="Waleed Georgy image" priority={true} className="md:size-44 lg:size-60 xs:size-44 size-40 rounded-full object-cover" style={{ overflowClipMargin: "unset" }} />
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