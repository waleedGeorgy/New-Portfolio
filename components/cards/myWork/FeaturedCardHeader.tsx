import { FC } from "react";
import Link from "next/link";

interface FeaturedCardHeaderProps {
    title: string,
    tag: string,
    link: string
}

const FeaturedCardHeader: FC<FeaturedCardHeaderProps> = ({title, tag, link}) => {
    return(
        <div className="flex gap-4 relative p-3 text-base items-center justify-between border-border rounded-lg">
            {/* Featured card title (left side) */}
            <Link href={link} target="_blank"><p className="text-xl cursor-pointer font-homenaje tracking-wide underline text-primary-foreground">{title}</p></Link>
            {/* Featured card tag (right side) */}
            <p className="text-sm text-gray-300">{tag}</p>
        </div>
    );
}

export default FeaturedCardHeader;