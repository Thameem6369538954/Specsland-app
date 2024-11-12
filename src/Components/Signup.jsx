import React, {useState,useEffect, useRef } from "react";
import gsap from "gsap";
import Log from "../Images/Log.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiSmileyXEyesLight } from "react-icons/pi";
import { LiaMehRollingEyesSolid } from "react-icons/lia";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showConpassword, setShowConpassword] = useState(false);

  const toggleConpasswordVisibility = () => {
    setShowConpassword(!showConpassword);
  };

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

  // Validate Username
  if (!data.username) {
    errors.username = "Username is required";
  } else if (data.username.length < 3) {
    errors.username = "Username must be at least 3 characters long";
  }

  // Validate Email
   if (!data.email) {
     errors.email = "Email is required";
   } else if (/[A-Z]/.test(data.email)) {
     errors.email = "Email must be in lowercase";
   } else if (
     !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|net|org|io|edu|gov|mil)$/.test(
       data.email
     )
   ) {
     errors.email = "Please enter a valid email address";
   }


  // Validate Password
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/[A-Z]/.test(data.password)) {
    errors.password = "Password must include at least one uppercase letter";
  } else if (!/[a-z]/.test(data.password)) {
    errors.password = "Password must include at least one lowercase letter";
  } else if (!/[0-9]/.test(data.password)) {
    errors.password = "Password must include at least one number";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
    errors.password =
      "Password must include at least one special character (e.g., !, @, #)";
  }

  // Validate Confirm Password
  if (!data.confrimPassword) {
    errors.confrimPassword = "Confirm Password is required";
  } else if (data.password !== data.confrimPassword) {
    errors.confrimPassword = "Passwords do not match";
  }

  // Validate Mobile Number
  if (!data.mobileNumber) {
    errors.mobileNumber = "Mobile Number is required";
  } else if (!/^\d+$/.test(data.mobileNumber)) {
    errors.mobileNumber = "Mobile Number must contain only digits";
  } else if (data.mobileNumber.length !== 10) {
    errors.mobileNumber = "Mobile Number must be exactly 10 digits";
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
                    Phone Number
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

                <div className="mb-4 relative">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                  <span
                    className="absolute right-3 top-9 cursor-pointer"
                    onClick={togglePasswordVisibility} // Trigger toggle on click
                  >
                    {showPassword ? (
                      <LiaMehRollingEyesSolid className="text-3xl" /> // Icon when password is visible
                    ) : (
                      <PiSmileyXEyesLight className="text-3xl" /> // Icon when password is hidden
                    )}
                  </span>
                  {errors.password && (
                    <p className="text-red-500 roboto mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="mb-4 relative">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showConpassword ? "text" : "password"}
                    id="confrimPassword"
                    value={data.confrimPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirm your password"
                  />
                  <span
                    className="absolute right-3 top-9 cursor-pointer"
                    onClick={toggleConpasswordVisibility} // Trigger toggle on click
                  >
                    {showConpassword ? (
                      <LiaMehRollingEyesSolid className="text-3xl" /> // Icon when password is visible
                    ) : (
                      <PiSmileyXEyesLight className="text-3xl" /> // Icon when password is hidden
                    )}
                  </span>
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
