import React from 'react'
import { products } from '../mockData.js';
import Hero from './Hero';
import Services from './Services.jsx';
import Features from './Features.jsx';
import Offer from './Offer.jsx';
import ReviewCard from './ReviewCard.jsx';
import Logos from './Logos.jsx';
import ProductCard from '../ProductCard.jsx';
import ScrollToTop from './ScrollToTop.jsx';


//  const SERVICE_DATA = [
//    { value1: 'Free Shipping', value2: 'Above $5 Only', icon: <FaTruck className='text-3xl text-[#8bc34a]' /> },
//    { value1: 'Certified Organic', value2: '100% Guarantee', icon: <PiCertificateFill className='text-3xl text-[#8bc34a]' /> },
//    { value1: 'Huge Savings', value2: 'At Lowest Price', icon: <FaMoneyBillAlt className='text-3xl text-[#8bc34a]' /> },
//    { value1: 'Easy Return', value2: 'No Question Asked', icon: <RiRecycleFill className='text-3xl text-[#8bc34a]' /> },
//  ]



function Home({ themeMode }) {

  const logo = (themeMode == 'dark') ? true : false
  console.log(logo);
  console.log(themeMode)

  return (
    <>
      <div className='dark:text-white dark:bg-black bg-[#f8f6f3] flex flex-col gap-10 '>
        {/* HERO SECTION */}
        <Hero />
        <hr />
        {/* SERVICE SECTION */}
        <Services />
        {/* TRENDING PRODUCTS SECTION */}
        <div className='py-5 flex flex-col justify-center items-center  gap-7'>
          <h2 className='font-bold sm:text-3xl text-lg text-center font-serif'>Trending Products</h2>
          <div className='grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols- xl:grid-cols-4 gap-10'>
            {
              products
                .filter(grocery => grocery.popularity === "trending products")
                .map((grocery, index) => (
                  <ProductCard
                    productImage={grocery.productImage}
                    category={grocery.category}
                    productName={grocery.productName}
                    price={grocery.price}
                    key={index}
                  />
                ))
            }

          </div>
        </div>
        {/* FEATURED SECTION */}
        <Features />
        {/* OFFER SECTION*/}
        <Offer />
        {/* BEST SELLING PRODUCTS SECTION */}
        <div className='py-5 flex flex-col justify-center items-center gap-7'>
          <h2 className='font-bold text-lg sm:text-3xl  text-center font-serif '>Best Selling Products</h2>
          <div className='grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols- xl:grid-cols-4 gap-10'>
            {
              products
                .filter(grocery => grocery.popularity === "best selling")
                .map((grocery, index) => (
                  <ProductCard
                    productImage={grocery.productImage}
                    category={grocery.category}
                    productName={grocery.productName}
                    price={grocery.price}
                    key={index}
                  />
                ))
            }
          </div>
        </div>
        {/* CUSTOMER REVIEW SECTION */}
        <ReviewCard />
        {/* BRAND LOGOS SECTION*/}
        <Logos />
        {/* SCROLL TO TOP*/}
        <ScrollToTop />
      </div>

    </>
  );

}

export default Home