import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import OFF from "../Images/OFF.png"
// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";



const Offerbar = () => {
  return (
    <div>
      <div className="md:min-h-[70vh] min-h-[30vh] flex flex-col items-center justify-center">
        <h1 className="text-6xl font-heading  p-10">super Offer</h1>
        <div className="md:w-[80%] w-[90%] md:min-h-[250px] min-h-[150px] bg-secondary rounded-md flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-[50%] ">
            <h1 className="md:text-6xl text-4xl font-heading">
              New Collection
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-[50%] relative">
            <img src={OFF} className="absolute drop-shadow-2xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offerbar
