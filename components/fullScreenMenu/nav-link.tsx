import { FC, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "./animation";

interface NavLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
}

const NavLink: FC<NavLinkProps> = ({ data }) => {
  const { title, href, index } = data;
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div
      className="relative flex items-center gap-6 z-40 group"
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
        className="size-3 bg-white rounded-full"
      />
      <Link href={href} className="text-[3.5rem] sm:text-[7vw] uppercase leading-[96%] font-semibold text-primary-foreground group-hover:-translate-x-3 transition-all duration-500">
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
