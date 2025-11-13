import Card from "@/components/Card";
import Button from "@/components/Button";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";

export default function Resume() {
    return (
        <Card title="Resumé" className="flex flex-col">
            {/* Resume contents */}
            <p className="text-xl text-primary-foreground leading-8">
                I am a programmer and a researcher who is interested in many things, but mainly machine learning, deep learning and finding new solutions for NP-complete and NP-hard problems. I am also into full-stack development and already built various different projects.<br /><br />
                I always strife to perfect myself and learn new things. I have a strong background in teaching, researching, building different kinds of projects and working in a team.<br /><br />
                I am multilingual, which helps me look at things and analyze them from different angles, as well as translate, create and review texts or any type of information.
            </p>
            {/* Social links */}
            <Link href="https://drive.google.com/file/d/1PwSQguwLiOCP_ZHCSg7bL6hOw4AKSGnn/view?usp=sharing" target="_blank" download className="ml-auto">
                <Button className="bg-blue-cosmos text-primary-foreground text-lg shadow-md shadow-black animate-wiggle">
                    <FaFileDownload />Resumé
                </Button>
            </Link>
        </Card>
    );
}
