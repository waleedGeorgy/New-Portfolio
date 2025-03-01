import { motion } from "framer-motion";
import { menuSlide } from "./animation";
import Curve from "./curve";
import ProfilePhoto from "../ProfilePhoto";
import NavLink from "./nav-link";
import Link from "next/link";
import GitHub from "@/public/assets/images/stack/github.svg";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";

interface FullScreenMenuProps {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const FullScreenMenu: FC<FullScreenMenuProps> = ({setOpen}) => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40"
    >

      {/*Profile picture and name*/}
      <div className="relative w-full pl-8">
        <div className="absolute top-8">
          <ProfilePhoto />
        </div>
      </div>

      {/* Menu list*/}
      <div className="absolute pl-10 md:pr-14 py-4 bottom-36 w-full font-homenaje bg-gradient-to-r from-black to-blue-cosmos">
        <div className="grid relative">
          <div className="flex flex-col justify-center items-start md:items-end" onClick={() => setOpen(prev => !prev)}>
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full absolute bottom-6 px-6">
        <div className="flex flex-wrap items-center justify-start gap-8">
          <div className="flex items-center gap-3 text-secondary-foreground hover:text-white transition-colors duration-200 ease-in-out">
            <Link href="/"><Image src={GitHub} alt="GitHub icon" /></Link>
            <Link href="/"><span className="capitalize link">GitHub</span></Link>
          </div>
          <div className="flex items-center text-secondary-foreground">
            <Link href="/">All Rights Reserved ©{new Date().getFullYear()}</Link>
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
    title: "Home",
    href: "/#landing",
  },
  {
    title: "My Work",
    href: "/#myWork",
  },
  {
    title: "About Me",
    href: "/#aboutMe",
  },
  {
    title: "Contact Me",
    href: "/#contactMe",
  },
];
