import { FC } from "react";
import Link from "next/link";

interface FeaturedCardHeaderProps {
    title: string,
    tag: string,
    link: string
}

const FeaturedCardHeader: FC<FeaturedCardHeaderProps> = ({title, tag, link}) => {
    return(
        <div className="bg-secondary-background flex gap-4 relative p-3 text-base items-center justify-between border-border rounded-lg">
            {/* Featured card title (left side) */}
            <Link href={link} target="_blank"><p className="text-xl cursor-pointer font-homenaje tracking-wide underline text-primary-foreground">{title}</p></Link>
            {/* Featured card tag (right side) */}
            <p className="text-base text-secondary-foreground">{tag}</p>
        </div>
    );
}

export default FeaturedCardHeader;