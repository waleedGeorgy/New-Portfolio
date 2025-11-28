import Link from "next/link";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { CgExternal } from "react-icons/cg";
import GitHub from "@/public/images/stack/github.svg";
import Signature from "@/public/images/signature.png";

export default function Footer() {
    return (
        <footer className="px-4 lg:px-6 pt-14 pb-4 flex flex-wrap items-center justify-around gap-x-2 gap-y-3 bg-slate-900 w-full" role="contentinfo">
            <Image src={Signature} alt="Signature of Waleed Georgy" className="w-40" />
            <div className="flex flex-row flex-wrap items-center gap-6 text-sm">
                <Link href="#landing" className="flex text-gray-300 hover:text-primary-foreground duration-200 transition-colors ease-in-out items-center gap-1">
                    <FaArrowUp className="inline size-3" />
                    <span>Back to top</span>
                </Link>
                <Link href="https://github.com/waleedGeorgy/New-Portfolio" target="_blank" className="cursor-pointer flex items-center text-gray-300 hover:text-white transition-colors duration-200 ease-in-out">
                    <Image src={GitHub} alt="GitHub icon" className="inline size-3.5" />
                    <span className="capitalize link inline relative ml-1">GitHub</span>
                    <CgExternal className="inline ml-0.5" />
                </Link>
                <p className="text-gray-300">All Rights Reserved ©{new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}