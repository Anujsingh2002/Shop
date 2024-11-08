import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Sliderr from './components/sliderr/Sliderr'
import Products from './components/products/Products'
import TopProducts from './components/topProducts/TopProducts'
import Banner from './components/banner/Banner'
import Subscribe from './components/subscribe/Subscribe'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Popup from './components/popup/Popup'
// import AOS from "aos";
// import "aos/dist/aos.css";

// useEffect(() => {
//   AOS.init({
//     offset: 100,
//     duration: 800,
//     easing: "ease-in-sine",
//     delay: 100,
//   });
//   AOS.refresh();
// }, []);


const App = () => {
  const [orderPopup,setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div >
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Sliderr handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App