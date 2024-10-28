import React from 'react'
import Men from "../Cate/Images/Men.jpg"
import Kids from "../Cate/Images/Kids.jpg"
import Women from "../Cate/Images/Women.jpg"

const Cate = () => {
  return (
    <div className="w-full min-h-[auto]  ">
      <div className="w-full min-h-[auto] py-[1em] flex flex-col items-center justify-center">
        <div className="">
          <h1 className="text-4xl font-heading text-center mb-8">Categories</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-[80%]  place-items-center m-auto">
            <div className="relative overflow-hidden   group ">
              <img src={Men} className="" alt="" />
              <div className="flex items-center h-full w-full justify-center absolute -bottom-10 bg-black/20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className='text-3xl font-heading border border-white px-4 py-2 rounded-md text-white'>Shop Now</button>
              </div>
            </div>
            <div className="relative overflow-hidden   group w-[75%] ">
              <img src={Women} alt="" />
              <div className="flex items-center h-full w-full justify-center absolute -bottom-10 bg-black/20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <button className='text-3xl font-heading border border-white px-4 py-2 rounded-md text-white'>Shop Now</button>

              </div>
            </div>
            <div className="relative overflow-hidden   group w-[75%] ">
              <img src={Kids} alt="" />
              <div className="flex items-center h-full w-full justify-center absolute -bottom-10 bg-black/20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <button className='text-3xl font-heading border border-white px-4 py-2 rounded-md text-white'>Shop Now</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cate