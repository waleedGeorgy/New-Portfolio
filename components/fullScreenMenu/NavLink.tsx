import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "./menuAnimations";

interface NavLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
}

const NavLink = ({ data }: NavLinkProps) => {
  const { title, href, index } = data;

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center gap-8 z-40 group"
      variants={slide}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        variants={scale}
        animate={hovered ? "open" : "closed"}
        className="size-3 sm:size-[1.5vw] bg-white rounded-full"
      />
      <Link href={href} className="text-5xl sm:text-[7vw] uppercase font-semibold text-primary-foreground group-hover:-translate-x-3 transition-all duration-500">
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
