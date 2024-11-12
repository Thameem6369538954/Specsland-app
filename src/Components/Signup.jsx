import React, {useState,useEffect, useRef } from "react";
import gsap from "gsap";
import Log from "../Images/Log.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current.children, // Target each child element of titleRef
      { opacity: 0, y: 50 }, // Initial state: hidden and below the starting position
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.1, // Delay between each character animation
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 1, // Delay for subtitle to animate after title finishes
        ease: "power3.out",
      }
    );
  }, []);
  const testToast = () => {
    toast.success("This is a test notification!");
  };

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confrimPassword: "",
    mobileNumber: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!data.username) {
      errors.username = "Username is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "Password must contain at least one uppercase letter";
      isValid = false;
    } else if (!/[a-z]/.test(formData.password)) {
      errors.password = "Password must contain at least one lowercase letter";
      isValid = false;
    } else if (!/[0-9]/.test(formData.password)) {
      errors.password = "Password must contain at least one number";
      isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      errors.password = "Password must contain at least one special character";
      isValid = false;
    }

    if (!data.confrimPassword) {
      errors.confrimPassword = "Confrim Password is required";
    }
   if (formData.mobileNumber.trim() === "") {
     errors.mobileNumber = "Mobile Number is required";
     isValid = false;
   } else if (!/^\d+$/.test(formData.mobileNumber)) {
     errors.mobileNumber = "Mobile Number must contain only digits";
     isValid = false;
   } else if (formData.mobileNumber.length !== 10) {
     errors.mobileNumber = "Mobile Number must be exactly 10 digits";
     isValid = false;
   }
    if (data.password !== data.confrimPassword) {
      errors.confrimPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Check the data object before sending it
    console.log("Form data to be sent:", data);

    try {
      const res = await axios.post(
        "https://specsland-backend.onrender.com/api/v1/userRegister",
        data, // Sending form data here
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from backend:", res.data);

      if (res.data.message === "User Registered successfully") {
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
        toast.success(res.data.message);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.error("Error response from backend:", err);
    }
  };

  return (
    <div>
      <div className="min-h-[auto] lg:flex  md:flex items-center justify-center">
        <div
          className="xl:w-[80%] lg:w-[50%] md:w-[50%] object-cover  min-h-[100vh] lg:flex md:flex hidden "
          style={{
            backgroundImage: `url(${Log})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center w-full">
            <div className="mt-20">
              <p
                ref={titleRef}
                className="xl:text-9xl lg:text-7xl md:text-6xl text-4xl font-bold font-copydesk text-white tracking-wide "
              >
                {Array.from("SpecsLand").map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </p>
              <h1
                ref={subtitleRef}
                className="lg:text-8xl md:text-7xl text-8xl font-copydesk text-black"
              >
                Sign Up
              </h1>
            </div>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className=" flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-5xl font-bold font-heading text-center mb-6 text-secondary">
                Sign Up
              </h2>

              <form
                onSubmit={handleSubmit}
                className="font-roboto text-lg tracking-wide"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={data.username}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xl mt-1">
                      {errors.username}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={data.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@mail.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 roboto mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="mobileNumber"
                    value={data.mobileNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                  {errors.mobileNumber && (
                    <p className="text-red-500 roboto mt-1">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <p className="text-red-500 roboto mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confrimPassword"
                    value={data.confrimPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirm your password"
                  />
                  {errors.confrimPassword && (
                    <p className="text-red-500 roboto mt-1">
                      {errors.confrimPassword}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between mt-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="text-center text-gray-600 mt-6 font-roboto text-xl">
                Already have an account ?{" "}
                <a href="/login" className="text-blue-500 underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
