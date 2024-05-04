import React from 'react'
import { FaMoneyBillAlt, FaTruck, PiCertificateFill, RiRecycleFill } from '../icons/icon'
import HeroSection from '../component/Sections/HeroSection';
import Service from '../component/Sections/ServiceSection';
import FeatureSection from '../component/Sections/FeatureSection';
import OfferSection from '../component/Sections/OfferSection';
import ReviewCard from '../component/ReviewCard';
import LogoSection from '../component/Sections/LogoSection';
import ProductCard from '../component/ProcuctCard';
import GoToTop from '../component/GoToTop';
import { products } from '../component/mockData';


const SERVICE_DATA = [
  { value1: 'Free Shipping', value2: 'Above $5 Only', icon: <FaTruck className='text-3xl text-[#8bc34a]' /> },
  { value1: 'Certified Organic', value2: '100% Guarantee', icon: <PiCertificateFill className='text-3xl text-[#8bc34a]' /> },
  { value1: 'Huge Savings', value2: 'At Lowest Price', icon: <FaMoneyBillAlt className='text-3xl text-[#8bc34a]' /> },
  { value1: 'Easy Return', value2: 'No Question Asked', icon: <RiRecycleFill className='text-3xl text-[#8bc34a]' /> },
];


const FEATURE_DATA = [
  { product: 'Fresh Vegetables', img: "https://cdn.pixabay.com/photo/2016/03/23/04/44/fruits-and-vegetables-1274079_1280.png" },
  { product: 'Fresh and Green', img: "https://cdn.pixabay.com/photo/2016/02/23/17/44/apple-1218166_1280.png" },
  { product: 'Organic Legume', img: "https://cdn.pixabay.com/photo/2018/04/17/23/04/grilled-vegetables-3329075_1280.png" },
  // Add more feature data as needed
];

const CUSTOMER_REVIEW_DATA = [
  { custName: 'Mila Kunis', clients: 'client02' },
  { custName: 'Loki', clients: 'client01' },
  { custName: 'Loki', clients: 'client02' },
  // Add more customer review data as needed
];


function Home({ themeMode }) {

  const logo = (themeMode == 'dark') ? true : false
  console.log(logo);
  console.log(themeMode)

  return (
    <>
      <div className='dark:text-white dark:bg-black bg-slate-50 '>
        <HeroSection />
        <div className='flex flex-row max-sm:flex-col'>
          {SERVICE_DATA.map(({ value1, value2, icon }, index) => (
            <Service key={index} value1={value1} value2={value2} value3={icon} />
          ))}
        </div>

      {/* Trending Product Section */}
        <div className='py-5 flex flex-col gap-7'>
          <h2 className='font-bold text-3xl max-sm:text-xl text-center font-serif'>Trending Products</h2>
          <ProductCard />
        </div>

        <div className='flex justify-around  py-6 max-sm:flex-wrap bg-gray-200 dark:bg-black '>
          {FEATURE_DATA.map(({ product, img }, index) => (
            <FeatureSection key={index} products={product} productImg={img} />
          ))}
        </div>

      {/* Offer section */}
        <OfferSection />

      {/* Best selling Product Section */}
        <div className='py-5 flex flex-col gap-7'>
          <h2 className='font-bold text-3xl max-sm:text-xl text-center font-serif '>Best Selling Products</h2>
          <ProductCard />
        </div>

      {/* Customer Reviews Section */}
        <h2 className='pt-10 font-serif text-3xl text-center font-medium text-[#8bc34a]'>Customers Reviews</h2>
        <div className='flex justify-around items-center flex-wrap'>
          {CUSTOMER_REVIEW_DATA.map(({ custName, clients }, index) => (
            <ReviewCard key={index} custName={custName} clients={clients} />
          ))}
        </div>
        <LogoSection />
        <GoToTop />

      </div>

    </>
  );

}

export default Home