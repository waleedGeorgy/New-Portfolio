import SectionTitle from "@/components/SectionTitle";
import ExpandingFeaturedCard from "@/components/cards/myWork/ExpandingFeaturedCard";

export default function MyWorkSection(){
    return(
        <div className="pt-24 px-3 lg:px-8" id="myWork">
            <SectionTitle number="01" title="My Work" /> 
            {/* <GallerySwiper /> */}
            <div className="mt-16">
                <ExpandingFeaturedCard />
            </div>
        </div>
    );
}