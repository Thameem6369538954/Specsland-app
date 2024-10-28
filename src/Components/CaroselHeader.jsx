import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import BannerA from "../Images/BannerA.jpg";
import BannerB from "../Images/BannerB.jpg";
import DUM from "../Images/DUM.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Css/Caro.css"; // Make sure this file contains the styles above

export default () => {
  return (
    <div className="min-h-[0vh]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            className="min-h-[20vh] lg:min-h-[60vh] flex items-center justify-center"
            style={{
              backgroundImage: `url(${BannerA})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-[80%] flex flex-col items-start justify-center gap-3">
              <h1
                className="md:text-8xl text-3xl font-heading"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Our New Products Coming Soon
              </h1>
              <button
                className="text-3xl font-heading border border-black px-4 py-2 rounded-md"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* Additional slides */}
        <SwiperSlide>
          <div
            className="min-h-[20vh] lg:min-h-[60vh] flex items-center justify-center"
            style={{
              backgroundImage: `url(${BannerB})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
