import React, { useState } from "react";
import LogoSL from "../Images/LogoSL.png";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom"; // Import Link from react-router-dom
import { useSelector } from "react-redux";
import axios from "axios";
import { CiLogin } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
    const { user, token } = useSelector((state) => state.auth);
    const isAuthenticated = user && token;
    console.log(isAuthenticated,"IsAuthenticated");
    console.log(user, "usereeeeeeeeeeeeaaaaaaaaa");
    console.log(token, "tokem");
    

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);

  }

  const handleLogout = async () => {
    try {
     const response = await axios.post(
       "https://specsland-backend.onrender.com/api/v1/logout",
       {}, // Empty object for data since there's no body content needed for logout
       {
         headers: { "Content-Type": "application/json" },
         withCredentials: true, // Include this if you’re using cookies for authentication
       }
     );
      if (response.status === 200) {
        // Clear any stored user data or token in localStorage or Redux
        localStorage.removeItem("token"); // Example: Clear token in local storage
        // Redirect user to the login page or show a message
        toast.success(response.data.message);

        setTimeout(() => {    
          window.location.href = "/";
        }, 3000);
      
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="sticky top-0 z-50">
      <div>
        <nav className="min-h-[10vh] bg-white shadow-md rounded-s flex items-center justify-around px-4">
          <NavLink to="/">
            <div className="flex items-center gap-4 font-roboto">
              <img src={LogoSL} className="w-[15%]" alt="Logo" />
              <h1>Phn : 6369538953</h1>
              <div className="">
                {user && token ? <p>Welcome, {user?.username}</p> : <p></p>}{" "}
              </div>
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
              {user && token ? (
                <NavLink to="/Userprofile">
                  <li>Profile</li>{" "}
                </NavLink>
              ) : (
                <li></li>
              )}
            </ul>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="">
                {" "}
                <CiLogin />
              </button>
            ) : (
              <Link
                to="/signup"
                className="flex items-center gap-4 border border-gray-300 rounded p-2 cursor-pointer"
              >
                <FaRegUserCircle className="text-3xl" />
                <p>Sign up</p>
              </Link>
            )}

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
        <div className={`${open ? "block" : "hidden"}  min-h-[90vh] md:hidden`}>
          <ul className="flex flex-col items-left justify-start lg:min-h-[90vh] min-h-[100vh] bg-secondary text-white">
            <li
              onClick={handleClose}
              className="font-roboto text-3xl hover:bg-black p-4 m-1"
            >
              Home
            </li>
            <li
              onClick={handleClose}
              className="font-roboto text-3xl hover:bg-black p-4 m-1"
            >
              Categories
            </li>
            <li
              onClick={handleClose}
              className="font-roboto text-3xl hover:bg-black p-6 m-1"
            >
              Products
            </li>
            <li
              onClick={handleClose}
              className="font-roboto text-3xl hover:bg-black p-6 m-1"
            >
              Offers
            </li>
            <Link to="/signup" className="flex items-center  ">
              <li
                onClick={handleClose}
                className="font-roboto text-3xl hover:bg-black p-6 m-1"
              >
                Sign up
              </li>
            </Link>
            <li
              onClick={handleClose}
              className="font-roboto text-3xl hover:bg-black p-6 m-1"
            >
              Cart
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
