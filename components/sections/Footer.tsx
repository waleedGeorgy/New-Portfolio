import Link from "next/link";
import Image from "next/image";
import GitHub from "@/public/assets/images/stack/github.svg";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
    return (
    <div className="mt-16 px-3 lg:px-8 pt-14 pb-5 flex flex-wrap items-center justify-center gap-6 bg-primary-background">
        <Link href="#landing" className="flex flex-row text-secondary-foreground hover:text-primary-foreground duration-200 transition-colors ease-in-out">
            Back to top <FaArrowUp className="ml-1 mt-1" />
        </Link>
        <div className="flex items-center gap-3 text-secondary-foreground hover:text-white transition-colors duration-200 ease-in-out">
            <Link href="/"><Image src={GitHub} alt="GitHub icon" /></Link>
            <Link href="/"><span className="capitalize link">GitHub</span></Link>
        </div>
        <div className="flex items-center text-secondary-foreground">
            <p>All Rights Reserved ©{new Date().getFullYear()}</p>
        </div>
    </div>
    );
}