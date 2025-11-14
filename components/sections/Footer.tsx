import Link from "next/link";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { CgExternal } from "react-icons/cg";
import GitHub from "@/public/assets/images/stack/github.svg";
import Signature from "@/public/assets/images/signature.png";

export default function Footer() {
    return (
        <div className="px-4 lg:px-6 pt-14 pb-4 flex flex-wrap items-center justify-around gap-x-2 gap-y-3 bg-slate-900 text-sm w-full">
            <Image src={Signature} alt="Signature of Waleed Georgy" className="w-40" />
            <div className="flex flex-row items-center gap-6">
                <Link href="#landing" className="flex text-gray-300 hover:text-primary-foreground duration-200 transition-colors ease-in-out items-center gap-1">
                    <FaArrowUp className="inline size-3.5" />
                    <p>Back to top</p>
                </Link>
                <Link href="https://github.com/waleedGeorgy/New-Portfolio" target="_blank" className="cursor-pointer flex items-center text-gray-300 hover:text-white transition-colors duration-200 ease-in-out">
                    <Image src={GitHub} alt="GitHub icon" className="inline size-4" />
                    <span className="capitalize link inline pl-[10px] relative top-[1px]">GitHub</span>
                    <CgExternal className="inline ml-0.5" />
                </Link>
                <div className="text-gray-300">
                    <p>All Rights Reserved ©{new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    );
}