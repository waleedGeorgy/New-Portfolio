import FeaturedCard from "./FeaturedCard";
import gallery_images from "@/data/gallery_images";

export default function ExpandingFeaturedCard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {gallery_images.map((item, i) => (
                <div key={i} className="h-fit shadow-md shadow-black relative">
                    <FeaturedCard
                        title={item.title}
                        link={item.link}
                        tag={item.tag}
                        photo={item.image}
                    />
                </div>
            ))}
        </div>
    );
}