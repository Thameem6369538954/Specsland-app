import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Log from "../Images/Log.jpg"
import { gsap } from "gsap";

const Login = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    // Animate both headings smoothly on load
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out", // Smooth easing for a natural appearance
        delay: 0.2, // Small delay before starting
      }
    );

    gsap.fromTo(
      subHeadingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5, // Start slightly after the first heading
      }
    );
  }, []);
    const dispatch = useDispatch();
    const [data,setData] = useState({
      email:"",
      password:""
    })


    const handleChange = (e) =>{
      const {id,value} = e.target;
      setData({...data,[id]:value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Form data to be sent:", data);

      try {
        const res = await axios.post(
          "https://specsland-backend.onrender.com/api/v1/login",
          data, // Sending form data here
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.data,"Response from backend");
        // console.log(res.token,"Response from backend");


        if (res.data.message === "User Registered successfully") {
          alert(res.data.message);
          window.location.href = "/";
          dispatch({ type: "LOGIN", payload: res.data.user });
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
      <div>
        <div className="min-h-[100vh] flex items-center justify-center">
          <div
            className="xl:w-[80%] lg:w-[60%] md:w-[60%] hidden lg:block md:block sm:block sm:w-[50%] 2xl:block bg-yellow-200 min-h-[100vh] "
            style={{
              backgroundImage: `url(${Log})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full min-h-[60vh] flex flex-col items-center justify-center ">
              <h1
                ref={headingRef}
                className="lg:text-8xl md:text-7xl sm:text-4xl text-7xl font-copydesk text-center text-white "
              >
                SPECSLAND
              </h1>
              <h1
                ref={subHeadingRef}
                className="text-7xl font-copydesk text-center mb-8"
              >
                Login
              </h1>
            </div>
          </div>
          <div className="lg:w-[50%] w-full ">
            {/* <h1>Login</h1> */}
            <div className=" flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      id="email"
                      value={data.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="confirm-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={data.password}
                      onChange={handleChange}
                      id="password"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Confirm your password"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Log in
                    </button>
                  </div>
                </form>

                <p className="text-center text-gray-600 mt-6 flex items-center justify-center gap-2">
                  <p>Don't have an account?</p>
                  <a href="/Signup" className="text-blue-500 hover:underline">
                    Signup
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login