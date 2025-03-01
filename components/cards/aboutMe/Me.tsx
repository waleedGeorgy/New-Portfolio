import Card from "@/components/Card";
import Image from "next/image";
import MyImage from "@/public/assets/images/profile-pic.png";
import { cn } from "@/lib/utils";

export default function Me() {
    return (
        <Card title="Me" className="2xl:h-full">
            <div className="w-full h-[500px] overflow-hidden">
                {/* Profile picture */}
                <Image src={MyImage} alt="Waleed Georgy" className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover" />
                {/* Text boxes inside the profile picture */}
                <div className="absolute top-[75%] space-y-1">
                    <SmallTag text="Hello World 👋" />
                    <SmallTag text="Video Game Enthusiast 🎮" />
                    <SmallTag text="Music Lover 🎸" />
                    <SmallTag text="Books Admirer 📖" />
                </div>
            </div>
        </Card>
    );
}

const SmallTag = ({text, className} : {text: string, className?: string}) => {
    return (
        <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3 rounded-2xl", className)}>
            <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
        </div>
    );
};