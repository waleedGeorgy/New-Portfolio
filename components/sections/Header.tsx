import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import MagneticEffect from "../animations/MagneticEffect";
import FullScreenMenu from "../fullScreenMenu/full-screen-menu";
import SpecialButton from "../SpecialButton";
import ToggleButton from "../fullScreenMenu/toggle-button";
import LiveClock from "../LiveClock";
import Signature from "@/public/assets/images/signature.png";
import Image from "next/image";

export default function Header() {
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
        <div className="w-full flex items-center md:justify-between justify-center">
            <div className="relative hidden md:left-0 md:inline-block">
                <LiveClock timeZone="Europe/Moscow" />
            </div>
            <Image src={Signature} alt="Waleed's signature" className="w-56" />
            <div className="hidden md:inline">
                <MagneticEffect>
                    <SpecialButton text="Contact Me" icon={<FaArrowAltCircleRight className="size-6" />} link="/#contactMe" />
                </MagneticEffect>
            </div>
            {showMenuToggle && <ToggleButton open={menuOpen} setOpen={setMenuOpen} />}
            <AnimatePresence mode="wait">
                {menuOpen && <FullScreenMenu setOpen={setMenuOpen} />}
            </AnimatePresence>
        </div>
    );
}