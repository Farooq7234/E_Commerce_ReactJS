import React, {useEffect} from 'react'
import { products } from '../mockData.js';
import Hero from './Hero';
import Services from './Services.jsx';
import Features from './Features.jsx';
import Offer from './Offer.jsx';
import ReviewCard from './ReviewCard.jsx';
import Logos from './Logos.jsx';
import ProductCard from '../ProductCard.jsx';
import { login } from '../../redux/slice/authSlice.js';
import { useDispatch } from 'react-redux';


function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await authService.getCurrentUser();
      if (user) {
        dispatch(login());
      }
      
    };
    fetchCurrentUser();
  }, [dispatch]);

  return (
    <>
      <div className='dark:text-white dark:bg-black bg-[#f8f6f3] flex flex-col gap-10'>
        {/* HERO SECTION */}
        <Hero />
        <hr className='opacity-15' />
        {/* SERVICE SECTION */}
        <Services />
        {/* TRENDING PRODUCTS SECTION */}
        <div className='py-5 flex flex-col justify-center items-center  gap-7'>
          <h2 className='font-bold text-2xl sm:text-3xl text-center font-serif'>Trending Products</h2>
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
          <h2 className='font-bold text-2xl sm:text-3xl  text-center font-serif '>Best Selling Products</h2>
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
      
      </div>

    </>
  );

}

export default Home