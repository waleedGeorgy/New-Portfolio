import Image from "next/image";
import Card from "@/components/Card";
import MyImage from "@/public/assets/images/profile-pic.webp";
import { cn } from "@/lib/utils";

export default function Me() {
    return (
        <Card title="Me">
            <div className="w-full h-[450px] overflow-hidden">
                {/* Profile picture */}
                <Image src={MyImage} alt="Picture of Waleed Georgy" className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover" />
                {/* Text boxes */}
                <div className="absolute top-[72%] space-y-1">
                    <SmallTag text="Hello World 👋" />
                    <SmallTag text="Music Lover 🎸" />
                    <SmallTag text="Books Admirer 📖" />
                    <SmallTag text="Video Game Enthusiast 🎮" />
                </div>
            </div>
        </Card>
    );
}

const SmallTag = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={cn("bg-black/75 w-fit py-1 px-2.5 rounded-xl", className)}>
            <p className="text-primary-foreground">{text}</p>
        </div>
    );
};