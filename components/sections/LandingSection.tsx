import Header from "./Header";
import MagneticEffect from "@/components/animations/MagneticEffect";
import SpecialButton from "@/components/SpecialButton";
import { FaArrowAltCircleRight } from "react-icons/fa";
import LiveClock from "@/components/LiveClock";

export default function LandingArea(){
    return(
        <div className="relative h-screen overflow-hidden p-8" id="landing">
            {/* Header */}
            <Header />
            {/* Special magnetic button */}
            <MagneticEffect className="md:hidden absolute z-10 bottom-[4.5rem] left-0 right-0 mx-auto w-fit">
                <SpecialButton text="Contact Me" icon={<FaArrowAltCircleRight />} />
            </MagneticEffect>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:mt-0 mt-5 h-[20rem]">
                {/* Main Text */}
                <div className="text-left flex flex-col justify-center text-primary-foreground text-[5rem] xs:text-[15vw] md:text-[13vw] lg:text-[12vw] 2xl:text-[10rem] leading-[3.75rem] xs:leading-[11.5vw] md:leading-[10vw] lg:leading-[9vw] 2xl:leading-[7.5rem] uppercase">
                    <div>
                        <span><span className="bg-gradient-to-r from-yellow-ripe to-purple-darkness text-transparent bg-clip-text">W</span>elcome</span>
                    </div>
                    <div>
                        <span>To My</span>
                    </div>
                    <div className="relative">
                        <span>Corne<span className="bg-gradient-to-r to-yellow-ripe from-purple-darkness text-transparent bg-clip-text">я</span></span>
                        {/* Secondary text */}
                        <div className="text-[1.1rem] md:text-[1.25rem] leading-[1.25rem] md:leading-[1.4rem] tracking-tight absolute top-[4rem] xs:top-[12vw] md:top-[10vw] lg:top-[3.65vw] 2xl:top-[3.4rem] left-2 lg:left-[43vw] 2xl:left-[36rem] w-[25rem] capitalize">
                            <span>Coding & Building</span>
                            <br />
                            <span>Engineering & Researching</span>
                            <br />
                            <span>Teaching & Translating</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Current local time */}
            <div className="absolute bottom-8 md:left-10 left-[calc(50%-75px)]">
                <LiveClock timeZone="Europe/Moscow" />
            </div>
        </div>
    );
}