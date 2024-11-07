import React from 'react'
import CaroselHeader from '../Components/CaroselHeader'
import Cate from "../Components/Cate/Cate"
import Products from '../Components/Products'
import Offerbar from '../Components/Offerbar'
import Reviews from '../Components/Reviews'
import Topsales from '../Components/Topsales'
// import Dummy from '../Components/Dummy'
const Home = () => {
  return (
    <div>
      <CaroselHeader />
      <Cate />
      <Products />
      <Topsales />
      <Offerbar />
      <Reviews />
      {/* <Dummy /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home