import React from 'react';
import { FaReact } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='bg-[#001524] h-full w-full flex justify-evenly items-center dark:bg-black py-4 px-4 border-t-2 border-t-gray-50 '>
        <h2 className='text-xl text-center font-serif font-semibold text-white max-sm:text-sm'>Download Our Mobile App</h2>
          <img className='h-10 w-auto max-sm:h-8 mr-2 max-sm:w-16 text-white' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" alt="Google Play Store" />
          <img className='h-10 w-auto max-sm:h-8 mr-2 max-sm:w-16 text-white' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" alt="Apple App Store" />
      </div>
      <div className='dark:bg-black bg-[#001524] border-teal-50 h-auto w-full flex justify-center items-center max-sm:flex-col py-2'>
        <p className='text-white max-sm:m-0 text-xs'>
          &copy; Copyright {new Date().getFullYear()} - Created using
        </p>
        <FaReact className='text-blue-400 ml-2 max-sm:m-0 text-2xl ' />
        <p className='text-white ml-2 max-sm:m-0 text-xs '>
          by <span className='font-sans capitalize max-sm:text-xs'>Umar Farooq</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
