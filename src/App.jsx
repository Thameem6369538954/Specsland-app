import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Allroutes from './Routes/Allroutes'
import Footer from './Components/Footer'
import { BrowserRouter } from "react-router-dom";
import Loading from './Components/Loading'


function App() {
  const [count, setCount] = useState(0);

   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     // Simulate a loading time (e.g., fetching data)
     const timer = setTimeout(() => {
       setIsLoading(false); // Set loading to false after a delay
     }, 5000); // Adjust this time to your needs (2000 ms = 2 seconds)

     return () => clearTimeout(timer); // Clear timeout if the component unmounts
   }, []);



  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <Navbar />
            <Allroutes />
            <Footer />
          </BrowserRouter>
        )}
      </div>
    </>
  );
}

export default App
