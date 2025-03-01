import { FC } from "react";
import FeaturedCardHeader from "./FeaturedCardHeader";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface FeaturedCardProps {
    title: string,
    tag: string,
    link: string,
    photo: string | StaticImport,
    active?: boolean
}

const FeaturedCard: FC<FeaturedCardProps> = ({title, tag, photo, link, active}) => {
    return(
        <div className="bg-secondary-background flex flex-col gap-2 flex-wrap p-2">
            <FeaturedCardHeader title={title} tag={tag} link={link} />
            <div className="items-center justify-center">
                <Image src={photo} alt={tag} className="rounded-lg" />
            </div>
        </div>
    );
};

export default FeaturedCard;