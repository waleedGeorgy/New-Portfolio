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
            <div className="relative left-[calc(50%-140px)] md:left-0">
                <ProfilePhoto />
            </div>
            <div className="hidden md:inline">
                <MagneticEffect>
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