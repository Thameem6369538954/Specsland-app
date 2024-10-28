import React, { useRef, useState } from "react";
import Bg from "../Images/Bg.jpg";
import ReadG from "../Images/ReadG.png";
import Lens from "../Images/Lens.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="w-full min-h-[50vh] w-[95%] m-auto">
        <h1 className="text-4xl font-heading text-center mb-8">
          Our Collections
        </h1>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div
              className="min-h-[300px]  bg-slate-600 rounded flex items-center justify-center flex-col"
              style={{
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-6xl font-heading text-center text-white">
                Sun glasses
              </h1>
              <img src={ReadG} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="min-h-[300px]  bg-slate-600 rounded flex items-center justify-center flex-col"
              style={{
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-6xl text-center font-heading text-white">
                System glasses
              </h1>
              <img src={ReadG} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="min-h-[300px]  bg-slate-600 rounded flex items-center justify-center flex-col"
              style={{
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-6xl font-heading text-center text-white">
                Reading glasses
              </h1>
              <img src={ReadG} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="min-h-[300px]  bg-slate-600 rounded flex items-center justify-center flex-col"
              style={{
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-6xl font-heading text-white text-center">
                Contact lens
              </h1>
              <img src={Lens} className="drop-shadow-2xl" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="min-h-[300px]  bg-slate-600 rounded flex items-center justify-center flex-col"
              style={{
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-6xl font-heading text-white">Accessories</h1>
              <img src={ReadG} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="min-h-[300px]  bg-slate-600 rounded flex items-center justify-center flex-col"
              style={{
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-6xl font-heading text-white">Sun glasses</h1>
              <img src={ReadG} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
