import { FC } from "react";
import FeaturedCardHeader from "./FeaturedCardHeader";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface FeaturedCardProps {
    title: string,
    tag: string,
    link: string,
    photo: string | StaticImport,
}

const FeaturedCard: FC<FeaturedCardProps> = ({title, tag, photo, link}) => {
    return(
        <div className="bg-secondary-background flex flex-col gap-2 flex-wrap p-2 rounded-lg">
            <FeaturedCardHeader title={title} tag={tag} link={link} />
            <Image src={photo} alt={tag} className="rounded" />
        </div>
    );
};

export default FeaturedCard;