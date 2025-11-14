import Card from "@/components/Card";
import Button from "@/components/Button";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";

export default function Resume() {
    return (
        <Card title="Resumé" className="flex flex-col">
            {/* Resume contents */}
            <p className="text-lg text-gray-200 leading-7 font-light">
                Versatile, and results-driven programmer with a wide range of interests, but mainly full-stack development as well as machine learning, deep learning, and finding new solutions for NP-complete and NP-hard problems.<br /><br />
                I always strife to self-improve and learn new stuff. I have a strong background in teaching, researching, building different kinds of projects and working solo and in a team.<br /><br />
                A researcher and instructor with patents and publications,
                combined with strong multilingual abilities. Able to quickly adapt to new technologies and
                environments, and work within set deadlines.
            </p>
            {/* Social links */}
            <Link href="https://drive.google.com/file/d/1PwSQguwLiOCP_ZHCSg7bL6hOw4AKSGnn/view?usp=sharing" target="_blank" download className="ml-auto">
                <Button className="bg-blue-cosmos text-primary-foreground shadow-md shadow-black hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-black">
                    <FaFileDownload />Resume
                </Button>
            </Link>
        </Card>
    );
}
