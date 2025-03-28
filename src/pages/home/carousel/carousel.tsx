import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MinimalTypescriptCarousel() {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      className="w-full"
    >
      <SwiperSlide>
        <img
          src="./assets/image/carousel1.jpg"
          alt="Promotional Banner 1"
          className="h-auto w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./assets/image/carousel2.jpg"
          alt="Promotional Banner 2"
          className="h-auto w-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}
