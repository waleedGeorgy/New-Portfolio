import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FullScreenMenu from "./fullScreenMenu/full-screen-menu";
import ToggleButton from "./fullScreenMenu/toggle-button";

export default function MenuToggleButton() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <>
            <ToggleButton open={menuOpen} setOpen={setMenuOpen} />
            <AnimatePresence mode="wait">
                {menuOpen && <FullScreenMenu setOpen={setMenuOpen} />}
            </AnimatePresence>
        </>
    );
}