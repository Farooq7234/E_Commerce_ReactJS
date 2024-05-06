import React from 'react'
// import { FaMoneyBillAlt, FaTruck, PiCertificateFill, RiRecycleFill } from '../../icons/icon'
import Hero from './Hero';
import Services from './Services.jsx';
import Features from './Features.jsx';
import Offer from './Offer.jsx';
import ReviewCard from './ReviewCard.jsx';
import Logos from './Logos.jsx';
import ProductCard from '../ProcuctCard.jsx';
import ScrollToTop from './ScrollToTop.jsx';


//  const SERVICE_DATA = [
//    { value1: 'Free Shipping', value2: 'Above $5 Only', icon: <FaTruck className='text-3xl text-[#8bc34a]' /> },
//    { value1: 'Certified Organic', value2: '100% Guarantee', icon: <PiCertificateFill className='text-3xl text-[#8bc34a]' /> },
//    { value1: 'Huge Savings', value2: 'At Lowest Price', icon: <FaMoneyBillAlt className='text-3xl text-[#8bc34a]' /> },
//    { value1: 'Easy Return', value2: 'No Question Asked', icon: <RiRecycleFill className='text-3xl text-[#8bc34a]' /> },
//  ]
//  const FEATURE_DATA = [
//    { product: 'Fresh Vegetables', img: "https://cdn.pixabay.com/photo/2016/03/23/04/44/fruits-and-vegetables-1274079_1280.png" },
//    { product: 'Fresh and Green', img: "https://cdn.pixabay.com/photo/2016/02/23/17/44/apple-1218166_1280.png" },
//    { product: 'Organic Legume', img: "https://cdn.pixabay.com/photo/2018/04/17/23/04/grilled-vegetables-3329075_1280.png" },
//    // Add more feature data as needed
//  ];


function Home({ themeMode }) {

  const logo = (themeMode == 'dark') ? true : false
  console.log(logo);
  console.log(themeMode)

  return (
    <>
      <div className='dark:text-white dark:bg-black bg-[#f8f6f3] flex flex-col gap-10 '>
        <Hero />
        {/* <div className='flex flex-row max-sm:flex-col'>
          {SERVICE_DATA.map(({ value1, value2, icon }, index) => (
            <Services key={index} value1={value1} value2={value2} value3={icon} />
          ))}
        </div> */}

        {/* Trending Product Section */}
        <div className='py-5 flex flex-col gap-7'>
          <h2 className='font-bold text-3xl max-sm:text-xl text-center font-serif'>Trending Products</h2>
          <ProductCard />
        </div>

        {/* Features Section */}

        <Features />

        {/* Offer section */}

        <Offer />

        {/* Best selling Product Section */}
        <div className='py-5 flex flex-col gap-7'>
          <h2 className='font-bold text-lg sm:text-3xl  text-center font-serif '>Best Selling Products</h2>
          <ProductCard />
        </div>

        {/* Customer Reviews Section */}
        
        <ReviewCard />

        {/* Logo Container */}

        <Logos />

        {/* Scroll to Top */}

        <ScrollToTop />

      </div>

    </>
  );

}

export default Home