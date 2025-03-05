import Link from "next/link";
import Image from "next/image";
import GitHub from "@/public/assets/images/stack/github.svg";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
    return (
    <div className="mt-20 px-3 lg:px-8 pt-14 pb-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 bg-primary-background">
        <Link href="#landing" className="flex text-secondary-foreground hover:text-primary-foreground duration-200 transition-colors ease-in-out">
            <p>Back to top</p><FaArrowUp className="ml-1 mt-1" />
        </Link>
        <div className="flex justify-center text-secondary-foreground hover:text-white transition-colors duration-200 ease-in-out">
            <Link href="https://github.com/waleedGeorgy/New-Portfolio" target="_blank" className="cursor-pointer">
                <Image src={GitHub} alt="GitHub icon" className="inline relative bottom-[1px]" />
                <span className="capitalize link inline pl-[10px] relative top-[1px]">GitHub</span>
            </Link>
        </div>
        <div className="text-secondary-foreground">
            <p>All Rights Reserved ©{new Date().getFullYear()}</p>
        </div>
    </div>
    );
}