import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Resume() {
    return (
        <Card title="Resumé" className="flex flex-col justify-center">
            <article className="text-lg text-gray-200 leading-7 font-light">
                Versatile and results-driven programmer with a wide range of interests, but mainly full-stack development as well as machine learning, deep learning, and finding new solutions for NP-complete and NP-hard problems.<br /><br />
                I always strife to self-improve and learn new stuff. I have a strong background in teaching, researching, building different kinds of projects and working solo and in a team.<br /><br />
                A researcher and instructor with patents and publications, combined with strong multilingual abilities. Able to quickly adapt to new technologies and environments, and work within set deadlines. Deeply passionate about continual learning and self-improvement.
            </article>
            <Link href="https://drive.google.com/file/d/1LpYv73t9cNIUNArugkt-n0Azwb-XrXmy/view?usp=sharing" target="_blank" download className="ml-auto">
                <Button className="bg-blue-cosmos border border-gray-600/50 text-primary-foreground shadow-md shadow-black/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-black/50">
                    <FaFileDownload />
                    <span>Resume</span>
                </Button>
            </Link>
        </Card>
    );
}
