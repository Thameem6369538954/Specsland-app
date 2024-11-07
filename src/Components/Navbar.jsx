import React, { useState } from "react";
import LogoSL from "../Images/LogoSL.png";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="sticky top-0 z-50">
      <div>
        <nav className="min-h-[10vh] bg-white shadow-md rounded-s flex items-center justify-around px-4">
          <NavLink to="/">
          <div className="flex items-center gap-4">
            <img src={LogoSL} className="w-[15%]" alt="Logo" />
            <h1>Phn : 6369538953</h1>

          </div>
          </NavLink>
          <div className="flex items-center justify-between gap-4 hidden md:flex lg:flex font-roboto text-xl">
            <ul className="flex items-center gap-4">
              <li>Home</li>
              <li className="relative group">
                Categories
                {/* Submenu */}
                <ul className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded p-2 text-base gap-2 pointer-events-auto">
                  <li className="hover:bg-gray-100 p-2 rounded">
                    <a href="/electronics">Electronics</a>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded">
                    <a href="/clothing">Clothing</a>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded">
                    <a href="/home-appliances">Home Appliances</a>
                  </li>
                </ul>
              </li>
              <li>Products</li>
              <li>Offers</li>
            </ul>
            <Link
              to="/signup"
              className="flex items-center gap-4 border border-gray-300 rounded p-2 cursor-pointer"
            >
              <FaRegUserCircle className="text-3xl" />
              <p>Sign up</p>
            </Link>
            <div className="flex items-center gap-4 border border-gray-300 rounded p-2 cursor-pointer">
              <FaOpencart /> <p>cart</p>
            </div>
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
          className={`${
            open ? "block" : "hidden"
          } bg-red-300 min-h-[90vh] md:hidden`}
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
};

export default Navbar;
