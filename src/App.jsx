import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Allroutes from './Routes/Allroutes'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <>
   <div>
    <Navbar />
    <Allroutes />
    <Footer />  

   </div>
   </>
  )
}

export default App
