import React from 'react'
import { useState,useEffect } from 'react';
import { ThemeProvider } from '../context/theme';
import {FaMoneyBillAlt,FaTruck,PiCertificateFill,RiRecycleFill}  from '../icons/index'
import Header from '../component/Header'
import HeroSection from '../component/HeroSection';
import Service from '../component/Service';
import FeatureSection from '../component/FeatureSection';
import OfferSection from '../component/OfferSection';
import ReviewCard from '../component/ReviewCard';
import LogoContainer from '../component/LogoContainer';
import Footer from '../component/Footer';
import ThemeBtn from '../component/ThemeBtn';
import ProductCard from '../component/ProcuctCard';
import GoToTop from '../component/GoToTop';



const SERVICE_DATA = [
  { value1: 'Free Shipping', value2: 'Above $5 Only', icon: <FaTruck className='text-3xl text-[#8bc34a]' /> },
  { value1: 'Certified Organic', value2: '100% Guarantee', icon: <PiCertificateFill className='text-3xl text-[#8bc34a]' /> },
  { value1: 'Huge Savings', value2: 'At Lowest Price', icon: <FaMoneyBillAlt className='text-3xl text-[#8bc34a]' /> },
  { value1: 'Easy Return', value2: 'No Question Asked', icon: <RiRecycleFill className='text-3xl text-[#8bc34a]' /> },
];

const TREND_PRODUCT = {
  'Assorted Coffee': { category: 'Groceries', img: 'coffee-asorted', price: 35.00 },
  'Hand Sanitizer': { category: 'Groceries', img: 'sanitizer', price: 15.00 },
  'Handpicked redchillies': { category: 'Groceries', img: 'red-chillies', price: 45.00 },
  'Organic face scrub': { category: 'Groceries', img: 'face-wash', price: 95.00 },
};
const BEST_PRODUCT = {
  'Organic Honey': { category: 'Groceries', img: 'organic-honey', price: 35.00 },
  'Fresh Organic Juice': { category: 'Juice', img: 'orage-juice-kariz', price: 25.00 },
  'Diabetic cookies': { category: 'Groceries', img: 'cashew-butter-500', price: 45.00 },
  'Natural Extracted Edible Oil': { category: 'Groceries', img: 'edible-oil', price: 95.00 },
};

const FEATURE_DATA = [
  { product: 'Fresh Vegetables', img: 'https://media.istockphoto.com/id/1603440845/photo/lemons-with-green-leaves-isolated-on-transparent-background.jpg?s=612x612&w=is&k=20&c=-zWyqKpGHJ97fkDQviOaBZ3xlMvgQy82wxy4FBT9Fwk=' },
  { product: 'Fresh and Green', img: 'https://media.istockphoto.com/id/1603440845/photo/lemons-with-green-leaves-isolated-on-transparent-background.jpg?s=612x612&w=is&k=20&c=-zWyqKpGHJ97fkDQviOaBZ3xlMvgQy82wxy4FBT9Fwk=' },
  { product: 'Organic Legume', img: 'https://media.istockphoto.com/id/1603440845/photo/lemons-with-green-leaves-isolated-on-transparent-background.jpg?s=612x612&w=is&k=20&c=-zWyqKpGHJ97fkDQviOaBZ3xlMvgQy82wxy4FBT9Fwk=' },
  // Add more feature data as needed
];

const CUSTOMER_REVIEW_DATA = [
  { custName: 'Mila Kunis', clients: 'client02' },
  { custName: 'Loki', clients: 'client01' },
  { custName: 'Loki', clients: 'client02' },
  // Add more customer review data as needed
];


function Home() {
  
  const [themeMode, setThemeMode] = useState("light")

  const [price, setPrice] = useState(0.00);
  const [cartValue, setCartValue] = useState(0);

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])




  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

       <Header price={price} cartvalue={cartValue} setCartvalue={setCartValue} />
       <div className="w-full  bg-gray-50 dark:bg-black ">
             <div className="w-full flex justify-end py-4">
                 <ThemeBtn />
             </div>
             </div>
     <HeroSection />
     <div className='flex flex-row max-sm:flex-col'>
       {SERVICE_DATA.map(({ value1, value2, icon }, index) => (
         <Service key={index} value1={value1} value2={value2} value3={icon} />
       ))}
     </div>
     <h2 className='font-bold text-3xl max-sm:text-xl py-10 text-center font-serif dark:text-white dark:bg-black'>Trending Products</h2>
     <div className='h-auto w-auto flex flex-row max-sm:flex-col justify-evenly max-sm:justify-center max-sm:flex-wrap items-center max-sm:px-10 py-8 dark:bg-black'>
       {Object.entries(TREND_PRODUCT).map(([productName, { category, img, price }]) => (
         <ProductCard
           key={productName}
           category={category}
           productName={productName}
           image={img}
           productPrice={price}
         />
       ))}
     </div>
     <div className='flex justify-around w-full py-6 max-sm:flex-wrap h-auto bg-gray-200 dark:bg-black '>
       {FEATURE_DATA.map(({ product, img }, index) => (
         <FeatureSection key={index} products={product} productImg={img} />
       ))}
     </div>
     <OfferSection />
     <h2 className='font-bold text-3xl max-sm:text-xl py-10 text-center font-serif dark:text-white dark:bg-black'>Best Selling Products</h2>
     <div className='h-auto w-auto flex flex-row max-sm:flex-col justify-evenly max-sm:justify-center max-sm:flex-wrap items-center max-sm:px-10 py-8 dark:bg-black'>
       {Object.entries(BEST_PRODUCT).map(([productName, { category, img, price }]) => (
         <ProductCard
         key={productName}
         category={category}
         productName={productName}
         image={img}
         productPrice={price}
         />
         ))}
     </div>
     <h2 className='pt-10 font-serif text-3xl text-center font-medium dark:bg-black dark:text-white'>Customers Reviews</h2>
     <div className='flex justify-around max-sm:flex-wrap py-5  h-auto bg-white dark:bg-black'>
       {CUSTOMER_REVIEW_DATA.map(({ custName, clients }, index) => (
         <ReviewCard key={index} custName={custName} clients={clients} />
       ))}
     </div>
     <LogoContainer />
     <GoToTop/>
     <Footer />
     </ThemeProvider>
   </>
 );
  
}

export default Home