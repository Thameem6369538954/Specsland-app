import React, { useState } from 'react'
import LogoSL from "../Images/LogoSL.png";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const [open, setOpen]= useState(false)

    const handleOpen = () =>{
        setOpen(!open)
    }
  return (
    <div className="sticky top-0 z-50" >
      <div>
        <nav className="min-h-[10vh] bg-white shadow-md rounded-s flex items-center justify-around px-4">
          <div className=" flex items-center gap-4">
            <img src={LogoSL} className="w-[15%]" alt="" />
            <h1>Phn : 6369538953</h1>
          </div>
          <div className="">
            <ul className="flex items-center justify-between gap-4 hidden md:flex lg:flex font-roboto text-lg">
              <li>Home</li>
              <li>Categories</li>
              <li>Products</li>
              <li>Offers</li>
            </ul>
            <div></div>
          </div>
          <div className="text-2xl md:hidden md:block">
            {open ? (
              <IoClose onClick={handleOpen} />
            ) : (
              <CgMenuRight onClick={handleOpen} />
            )}
          </div>
        </nav>
        <div
          className={`${open ? "block" : "hidden"}
        bg-red-300 min-h-[90vh] md:hidden
        `}
        >
          <ul className="flex flex-col items-center justify-between gap-4">
            <li>Home</li>
            <li>Categories</li>
            <li>Products</li>
            <li>Offers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar