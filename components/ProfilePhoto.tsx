import Image from "next/image";
import MyImage from "@/public/assets/images/profile-pic.webp";

export default function ProfilePhoto(){
    return (
        <div className="flex items-center gap-x-2 text-primary-foreground">
            {/* Profile photo with outline */}
            <div className="relative sm:w-[95px] sm:h-[95px] w-[90px] h-[90px] rounded-full flex items-center justify-center bg-gradient-to-br from-purple-darkness to-yellow-ripe">
                <Image src={MyImage} alt="Waleed Georgy image"
                       priority={true}
                       className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
                />
            </div>
            {/* My name */}
            <div className="md:text-[2rem] xl:text-[2.5rem] text-[1.75rem] font-normal pl-1">Waleed Georgy</div>
        </div>
    );
}