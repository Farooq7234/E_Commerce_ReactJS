import React from 'react'
import {FaMoneyBillAlt,FaTruck,PiCertificateFill,RiRecycleFill}  from '../icons/icon'
import HeroSection from '../component/Sections/HeroSection';
import Service from '../component/Sections/ServiceSection';
import FeatureSection from '../component/Sections/FeatureSection';
import OfferSection from '../component/Sections/OfferSection';
import ReviewCard from '../component/ReviewCard';
import LogoSection from '../component/Sections/LogoSection';
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
  { product: 'Fresh Vegetables', img:"https://cdn.pixabay.com/photo/2016/03/23/04/44/fruits-and-vegetables-1274079_1280.png" },
  { product: 'Fresh and Green',  img:"https://cdn.pixabay.com/photo/2016/02/23/17/44/apple-1218166_1280.png" },
  { product: 'Organic Legume',  img:"https://cdn.pixabay.com/photo/2018/04/17/23/04/grilled-vegetables-3329075_1280.png"},
  // Add more feature data as needed
];

const CUSTOMER_REVIEW_DATA = [
  { custName: 'Mila Kunis', clients: 'client02' },
  { custName: 'Loki', clients: 'client01' },
  { custName: 'Loki', clients: 'client02' },
  // Add more customer review data as needed
];


function Home({themeMode}) {

const logo =(themeMode == 'dark') ? true : false
console.log(logo);
console.log(themeMode)

  return (
    <>
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
         <FeatureSection key={index} products={product} productImg={img}  />
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
     <LogoSection />
     <GoToTop/>
   </>
 );
  
}

export default Home