import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { menuSlide } from "./animation";
import Curve from "./curve";
import NavLink from "./nav-link";
import GitHub from "@/public/images/stack/github.svg";
import Signature from "@/public/images/signature.png";

const FullScreenMenu = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>>; }) => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-neutral-950 fixed top-0 right-0 text-primary-foreground z-40"
    >
      <Image src={Signature} alt="Signature of Waleed Georgy" className="hidden xs:inline-block w-64 relative top-12 left-12" />
      {/* Menu list*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pr-8 py-4 w-full font-homenaje bg-blue-cosmos/60">
        <div className="flex flex-col justify-center items-end" onClick={() => setOpen(prev => !prev)}>
          {navItems.map((item, index) => (
            <NavLink key={index} data={{ ...item, index }} />
          ))}
        </div>
      </div>
      {/* Menu footer */}
      <div className="w-full absolute bottom-8 px-6">
        <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-4">
          <div className="flex items-center gap-3 text-secondary-foreground hover:text-white transition-colors duration-200 ease-in-out text-sm">
            <Link href="https://github.com/waleedGeorgy/New-Portfolio" target="_blank"><Image src={GitHub} alt="GitHub icon" className="cursor-pointer size-4" /></Link>
            <Link href="https://github.com/waleedGeorgy/New-Portfolio" target="_blank"><span className="capitalize link cursor-pointer">GitHub</span></Link>
          </div>
          <div className="flex items-center text-secondary-foreground text-sm">
            <Link href="/">All rights reserved ©{new Date().getFullYear()}</Link>
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
