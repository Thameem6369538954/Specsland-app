import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="min-h-[60vh]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="min-h-[250px] bg-red-500 w-[50%] m-[auto]"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-[250px] bg-red-500 w-[50%] m-[auto]"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
