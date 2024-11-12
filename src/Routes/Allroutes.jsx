import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import Dummy from '../Components/Dummy'
import Userprofile from '../Pages/Userprofile'
import Profileupdate from '../Components/Profileupdate'
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dummy" element={<Dummy />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Userprofile" element={<Userprofile />} />
        <Route path="/Profileupdate" element={<Profileupdate />} />
      </Routes>
    </div>
  );
}

export default Allroutes