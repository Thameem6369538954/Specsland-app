import React from 'react'

const Reviews = () => {
  return (
    <div className="min-h-[50vh] w-[90%] m-auto">
      <div className="lg:grid lg:grid-cols-3  min-h-[250px] gap-4 ">
        <div className="bg-white shadow-xl rounded-xl border border-black">
          <div className="bg-white shadow-xl min-h-12 rounded-xl border border-black"></div>
        </div>
        <div className="bg-white shadow-xl rounded-xl border border-black"></div>
        <div className="bg-white shadow-xl rounded-xl border border-black"></div>
      </div>
    </div>
  );
}

export default Reviews