import Image from "next/image";
import MyImage from "@/public/assets/images/profile-pic.webp";

export default function ProfilePhoto() {
    return (
        <div className="flex items-center gap-x-2.5 text-primary-foreground">
            <div className="relative xs:size-[84px] size-[68px] rounded-full flex items-center justify-center bg-gradient-to-br from-purple-darkness to-yellow-ripe">
                <Image src={MyImage} alt="Waleed Georgy image" priority={true} className="xs:size-20 size-16 rounded-full object-cover" />
            </div>
            <div className="xs:text-4xl text-3xl">Waleed Georgy</div>
        </div>
    );
}