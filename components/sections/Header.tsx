import { useEffect, useState } from "react";
import MagneticEffect from "../animations/MagneticEffect";
import FullScreenMenu from "../fullScreenMenu/full-screen-menu";
import ProfilePhoto from "../ProfilePhoto";
import SpecialButton from "../SpecialButton";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ToggleButton from "../fullScreenMenu/toggle-button";
import { AnimatePresence } from "framer-motion";

export default function Header(){
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [showMenuToggle, setMenuToggle] = useState<boolean>(false);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 350) {
                setMenuToggle(true);
            } else {
                setMenuToggle(false);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, []);

    return (
        <div className="w-full flex items-center justify-between">
            <div className="relative left-[calc(50%-140px)] md:left-0 [@media(max-height:420px)]:left-0 [@media(max-height:420px)]:bottom-6">
                <ProfilePhoto />
            </div>
            <div className="hidden md:inline [@media(max-height:420px)]:scale-75">
                <MagneticEffect className="[@media(max-height:420px)]:bottom-8 [@media(max-height:420px)]:-right-10">
                    <SpecialButton text="Contact Me" icon={<FaArrowAltCircleRight />} link="/#contactMe" />
                </MagneticEffect>
            </div>
            {showMenuToggle && <ToggleButton open={menuOpen} setOpen={setMenuOpen} />}
            <AnimatePresence mode="wait">
                {menuOpen && <FullScreenMenu setOpen={setMenuOpen} />}
            </AnimatePresence>
        </div>
    );
}