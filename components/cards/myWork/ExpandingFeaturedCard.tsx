import FeaturedCard from "./FeaturedCard";
import gallery_images from "@/data/gallery_images";

export default function ExpandingFeaturedCard(){
    return (
        <div className="flex lg:flex-row flex-col flex-wrap justify-stretch items-stretch gap-3">
            {gallery_images.map((item, i) => (
                <div key={i} className="lg:w-[33%] h-full shadow-md shadow-black grow relative transition-all delay-200 duration-500 ease-in-out hover:grow-[4]">
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