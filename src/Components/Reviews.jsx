import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper/modules";

const Reviews = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ahamed",
      rating: 5,
      comment: "This product is fantastic! I've been using it for a week now, and I can already see a huge difference.",
      date: "October 30, 2024",
    },
    {
      id: 2,
      name: "Ahamed",
      rating: 5,
      comment: "This product is fantastic! I've been using it for a week now, and I can already see a huge difference.",
      date: "October 30, 2024",
    },
    {
      id: 3,
      name: "Ahamed",
      rating: 5,
      comment: "This product is fantastic! I've been using it for a week now, and I can already see a huge difference.",
      date: "October 30, 2024",
    },
    {
      id: 4,
      name: "Ahamed",
      rating: 5,
      comment: "This product is fantastic! I've been using it for a week now, and I can already see a huge difference.",
      date: "October 30, 2024",
    },
    {
      id: 5,
      name: "Ahamed",
      rating: 5,
      comment: "This product is fantastic! I've been using it for a week now, and I can already see a huge difference.",
      date: "October 30, 2024",
    },
    


  ]);
  return (
    <div className="min-h-[50vh] w-[90%] m-auto">
      <div className="">
        <div className="">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            pagination={{
              clickable: false,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.map((items) => {
              return (
                <SwiperSlide key={items.id}>
                  <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-8">
                    <div className="flex items-center p-4">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="User Avatar"
                      />
                      <div className="ml-4">
                        <h2 className="text-lg font-semibold">{items.name}</h2>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">&#9733;</span>
                          <span className="text-yellow-500 mr-1">&#9733;</span>
                          <span className="text-yellow-500 mr-1">&#9733;</span>
                          <span className="text-yellow-500 mr-1">&#9733;</span>
                          <span className="text-gray-400">&#9733;</span>
                          <span className="text-sm text-gray-500 ml-2">
                            {items.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="p-4">
                      <p class="text-gray-700">{items.comment}</p>
                    </div>
                    <div class="flex justify-end p-4 border-t">
                      <span class="text-sm text-gray-500">{items.date}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Reviews