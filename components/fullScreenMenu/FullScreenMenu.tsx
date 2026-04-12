import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { menuSlide } from "./menuAnimations";
import Curve from "./Curve";
import NavLink from "./NavLink";
import GitHub from "@/public/images/stack/github.svg";
import Signature from "@/public/images/signature.png";

const FullScreenMenu = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-[#101314] fixed top-0 right-0 z-40"
    >
      <Image src={Signature} alt="Signature of Waleed Georgy" className="hidden xs:inline-block xs:w-48 sm:w-64 relative top-12 left-12" />
      {/* Menu list*/}
      <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pr-8 py-4 w-full font-homenaje bg-blue-cosmos/50" role="navigation">
        <div className="flex flex-col justify-center items-end gap-1" onClick={() => setOpen(prev => !prev)}>
          {navItems.map((item, index) => (
            <NavLink key={index} data={{ ...item, index }} />
          ))}
        </div>
      </nav>
      {/* Menu footer */}
      <div className="w-full absolute bottom-8 px-6">
        <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2">
          <Link href="https://github.com/waleedGeorgy/New-Portfolio" target="_blank" className="flex items-center gap-2 text-secondary-foreground hover:text-white transition-colors duration-200 ease-in-out text-xs xs:text-sm">
            <Image src={GitHub} alt="GitHub icon" className="cursor-pointer size-3 xs:size-4" />
            <span className="capitalize link cursor-pointer">GitHub</span>
          </Link>
          <div className="flex items-center text-secondary-foreground text-xs xs:text-sm">
            <span>All rights reserved ©{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}

export default FullScreenMenu;

const navItems = [
  {
    title: "About",
    href: "/#aboutMe",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact Me",
    href: "/#contactMe",
  },
];
