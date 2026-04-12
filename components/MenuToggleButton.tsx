'use client'
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ToggleButton from "./fullScreenMenu/MenuToggleButton";
import FullScreenMenu from "./fullScreenMenu/FullScreenMenu";

export default function MenuToggleButton() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <ToggleButton open={menuOpen} setOpen={setMenuOpen} />
            <AnimatePresence mode="wait">
                {menuOpen && <FullScreenMenu setOpen={setMenuOpen} />}
            </AnimatePresence>
        </>
    );
}