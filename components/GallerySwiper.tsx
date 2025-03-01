import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import gallery_images from "@/data/gallery_images";
import Image from "next/image";

export default function GallerySwiper() {
    return (
        <div className="h-full w-full">
            {/* Initializing the swiper */}
            <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{clickable: true}}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            className="mySwiper rounded-lg"
            >
                {/* Populating the swiper with images */}
                {gallery_images.map((image, id) => (
                    <SwiperSlide key={id}>
                        <Image
                            src={image.image}
                            alt={image.title}
                            className="object-cover w-full h-full object-left-top"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
