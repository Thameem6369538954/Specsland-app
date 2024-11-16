import React, { useState,useEffect } from "react";
import SpecsB from "../Images/SpecsB.jpg";
import Sir from "../Images/Sir.jpg";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import profileMale from "../Images/profileMale.jpg";
import profileFemale from "../Images/profileFemale.jpg";
import { IoCloseCircleOutline } from "react-icons/io5";

const UserProfile = () => {

  const { user, token } = useSelector((state) => state.auth);
  const isAuthenticated = user && token;
  const [editform, setEditForm] = useState(false);
  const [activeSection, setActiveSection] = useState("AccountSetting");

  const handleEditForm = () => {
    setEditForm(!editform);
  };
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://specsland-backend.onrender.com/api/v1/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        localStorage.removeItem("token");
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

    const userDta = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
      console.log(userDta, "userIddddddddddd");

      const userId = userDta._id;
 
      

      
    
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    gender: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };


  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        mobileNumber: user.mobileNumber || "",
        gender: user.gender || "",
      });
    }
  }, [user]);

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({
     ...prevData,
     [name]: value, // Dynamically update the state

   }));
 };


  const validateForm = () => {
    if (formData.username.trim() === "") {
      setError("Username is required");
      return false;
    }
    if(formData.email.trim() === "") {
      setError("Email is required");
      return false;
    }
    if(formData.mobileNumber.trim() === "") {
      setError("Mobile Number is required");
      return false;
    }
    if(formData.gender.trim() === "") {
      setError("Gender is required");
      return false;
    }
    return true;
  };
   

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) {
      return;
    }

   
    console.log("FormData Updated data:", formData);

    try {
      if (!userId || typeof userId !== "string") {
        throw new Error("User ID is not properly defined");
      }

      const response = await axios.put(
        `https://specsland-backend.onrender.com/api/v1/update/${userId}`,
        formData
      );

      setSuccess("Profile updated successfully");
      setFormData({

        username: "",
        email: "",
        mobileNumber: "",
        gender: "",
      });

        toast.success(response.data.message === "Profile updated successfully");
        const updatedUser = response.data.data;
        console.log(" new Updated User :", updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        console.log("Response data:", response.data);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
     
      
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
      console.error("Error during profile update:", error);
    }
  };



  
  return (
    <>
      {isAuthenticated ? (
        <div className="w-full min-h-[60vh]">
          <div className="flex items-center justify-around">
            <h1 className="md:text-4xl text-2xl font-roboto text-gray-500 m-7">
              Account Setting
            </h1>
            <div className="md:flex flex-row ">
              <h1
                onClick={() => setActiveSection("AccountSetting")}
                className={`text-2xl font-roboto m-7 cursor-pointer ${
                  activeSection === "AccountSetting"
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                Account Setting
              </h1>
              <h1
                onClick={() => setActiveSection("Orders")}
                className={`text-2xl font-roboto m-7 cursor-pointer ${
                  activeSection === "Orders" ? "text-black" : "text-gray-500"
                }`}
              >
                Orders
              </h1>
            </div>
          </div>
          {editform && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="w-[70%] mx-auto p-6 bg-white shadow-md rounded relative">
                <IoCloseCircleOutline
                  onClick={handleEditForm}
                  className="text-red-400 absolute right-2 text-4xl cursor-pointer"
                />
                <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="">
                    <label className="block mb-1 font-medium ">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded"
                      placeholder="Username"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded"
                      placeholder="Mobile Number"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          )}
          <div className="flex-row sm:flex items-center justify-center  min-h-[80vh]">
            <div className="w-full sm:w-[50%] sm:w-[50%] min-h-[500px]">
              <div className="flex flex-col items-center justify-center min-h-[400px] gap-5">
                <img
                  src={
                    user?.gender === "male"
                      ? profileMale
                      : user?.gender === "female"
                      ? profileFemale
                      : Sir
                  }
                  className="w-[50%] rounded-full border border-secondary border-spacing-2"
                  alt=""
                />
                <button
                  onClick={handleEditForm}
                  className="md:text-3xl text-2xl font-roboto border border-black md:px-4 md:py-2 px-2 py-1 rounded-md"
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="sm:w-[70%] w-full min-h-[600px]">
              {activeSection === "AccountSetting" && (
                <div className="min-h-[400px]">
                  <ul className="flex flex-col items-start justify-center gap-3 w-full   min-h-[400px] mx-auto font-roboto">
                    <li className="md:flex items-center w-full px-4 py-2">
                      <p className="text-2xl md:text-3xl w-[50%]">Name</p>
                      <p className="text-2xl md:text-3xl w-[50%]">
                        {user?.username}
                      </p>
                    </li>
                    <li className="md:flex items-center w-full px-4 py-2">
                      <p className="text-2xl md:text-3xl w-[50%]">Email</p>
                      <p className="text-2xl md:text-3xl flex-1 pl-4 w-[50%]">
                        {user?.email}
                      </p>
                    </li>
                    <li className="md:flex items-center w-full px-4 py-2">
                      <p className="text-2xl md:text-3xl w-[50%]">
                        Mobile Number
                      </p>
                      <p className="text-2xl md:text-3xl flex-1 pl-4 w-[50%]">
                        {user?.mobileNumber}
                      </p>
                    </li>
                    <li className="md:flex items-center w-full px-4 py-2">
                      <p className="text-2xl md:text-3xl  w-[50%]">
                        gender
                      </p>
                      <p className="text-2xl md:text-3xl flex-1 pl-4 w-[50%]">
                        {/* {user?.gender ? {user?.gender} : "please login"} */}
                        {user?.gender || "please update profile"}
                      </p>
                      {/* <p className="text-2xl md:text-3xl flex-1 pl-4">{user?.gender}</p> */}
                    </li>
                    <li className="flex items-center w-full px-4 py-2">
                      <button
                        onClick={handleLogout}
                        className="text-2xl md:text-3xl font-roboto border border-black px-8 py-2 rounded-md"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              {activeSection === "Orders" && (
                <div className="overflow-y-auto max-h-[600px] no-scrollbar">
                  <div className="flex items-center justify-center border border-black min-h-20 font-roboto mb-4">
                    <img src={SpecsB} className="w-[30%]" alt="" />
                    <div className="w-[70%] border border-black min-h-[250px]">
                      <div className="m-3">
                        <p className="p-1">Product : mairu</p>
                        <p className="p-1">Price : ungga vappa</p>
                        <p className="p-1">Product : mairu</p>
                        <p className="p-1">Address: mairu</p>
                        <p className="p-1">Delivery Date: mairu</p>
                        <button className="px-14 py-2 bg-red-600 text-white rounded-lg hover:bg-white hover:border border-red-400 hover:text-red-600 mt-4">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center border border-black min-h-20 font-roboto mb-4">
                    <img src={SpecsB} className="w-[30%]" alt="" />
                    <div className="w-[70%] border border-black min-h-[250px]">
                      <div className="m-3">
                        <p className="p-1">Product : mairu</p>
                        <p className="p-1">Price : ungga vappa</p>
                        <p className="p-1">Product : mairu</p>
                        <p className="p-1">Address: mairu</p>
                        <p className="p-1">Delivery Date: mairu</p>
                        <button className="px-14 py-2 bg-red-600 text-white rounded-lg hover:bg-white hover:border border-red-400 hover:text-red-600 mt-4">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center border border-black min-h-20 font-roboto mb-4">
                    <img src={SpecsB} className="w-[30%]" alt="" />
                    <div className="w-[70%] border border-black min-h-[250px]">
                      <div className="m-3">
                        <p className="p-1">Product : mairu</p>
                        <p className="p-1">Price : ungga vappa</p>
                        <p className="p-1">Product : mairu</p>
                        <p className="p-1">Address: mairu</p>
                        <p className="p-1">Delivery Date: mairu</p>
                        <button className="px-14 py-2 bg-red-600 text-white rounded-lg hover:bg-white hover:border border-red-400 hover:text-red-600 mt-4">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <style jsx>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              scrollbar-width: none;
            }
          `}</style>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <NavLink to={"/login"}>
            <button className="px-14 py-2 bg-red-600 text-white rounded-lg hover:bg-white hover:border border-red-400 hover:text-red-600">
              LogIn
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default UserProfile;
