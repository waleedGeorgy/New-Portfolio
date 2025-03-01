import { FC } from "react";
import Link from "next/link";

interface FeaturedCardHeaderProps {
    title: string,
    tag: string,
    link: string
}

const FeaturedCardHeader: FC<FeaturedCardHeaderProps> = ({title, tag, link}) => {
    return(
        <div className="bg-secondary-background flex gap-5 relative p-4 w-full text-base items-center justify-between border-border rounded-lg">
            {/* Featured card title (left side) */}
            <div>
                <Link href={link} target="_blank"><p className="text-[22px] cursor-pointer font-homenaje tracking-wide underline text-primary-foreground">{title}</p></Link>
            </div>
            {/* Featured card tag (right side) */}
            <div>
                <p className="text-[16px] text-secondary-foreground">{tag}</p>
            </div>
        </div>
    );
}

export default FeaturedCardHeader;