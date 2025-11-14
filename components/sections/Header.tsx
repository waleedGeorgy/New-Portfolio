import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FullScreenMenu from "../fullScreenMenu/full-screen-menu";
import ToggleButton from "../fullScreenMenu/toggle-button";

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
        <div>
            {showMenuToggle && <ToggleButton open={menuOpen} setOpen={setMenuOpen} />}
            <AnimatePresence mode="wait">
                {menuOpen && <FullScreenMenu setOpen={setMenuOpen} />}
            </AnimatePresence>
        </div>
    );
}