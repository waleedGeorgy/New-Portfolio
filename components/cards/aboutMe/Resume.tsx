import Card from "@/components/Card";
import Button from "@/components/Button";
import { FaFileDownload } from "react-icons/fa";
import Socials from "@/components/Socials";
import Link from "next/link";

export default function Resume() {
    return (
        <Card title="Resumé" className="md:h-full">
            {/* Resume contents */}
            <p className="text-xl text-primary-foreground font-medium">
            I'm a programmer and a researcher who is interested in many things, but mainly machine learning, deep learning and finding new solutions for NP-complete and NP-hard problems. I am also into full-stack development and already built various different projects.<br /><br />
            I always strife to perfect myself and learn new things. I have a strong background in teaching, researching, building different kinds of projects and working in a team.<br /><br />
            I'm multilingual, which helps me look at things and analyze them from different angles, as well as translate, create and review texts or any type of information.
            </p>
            {/* Social links */}
            <div className="flex items-center justify-between md:absolute md:bottom-4 md:left-6 md:w-[calc(100%-48px)]">
                <Socials />
                <Link href="https://drive.google.com/file/d/1bvkkTOmPQbg85zQaC_rdAn0fbv5F_MBS/view?usp=sharing" target="_blank" download><Button className="bg-blue-cosmos text-primary-foreground tracking-wide text-lg shadow-md shadow-black"><FaFileDownload />Resumé</Button></Link>
            </div>
        </Card>
    );
}
