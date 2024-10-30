import React,{useEffect} from 'react'
import axios from "../utils/Baseurl.js";
const form = () => {
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get("/products");
         console.log(response.data, "data received");
         setData(response.data); // Set the data to state if needed
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };

     fetchData(); // Call the async function
   }, []); 
  return (
    <div>form</div>
  )
}

export default form