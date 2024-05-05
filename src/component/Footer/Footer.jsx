import React from 'react';


function Footer() {
  return (
    <>
      <div className='bg-[#001524] h-full w-full flex justify-evenly items-center dark:bg-black py-4 max-sm:flex-col gap-2  border-t-2 border-t-gray-950 '>
        <h2 className='text-xl text-center font-serif font-semibold text-white max-sm:text-sm'>Download Our Mobile App</h2>
          <img className='h-10 w-auto max-sm:h-8 mr-2 max-sm:w-auto text-white' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" alt="Google Play Store" />
          <img className='h-10 w-auto max-sm:h-8 mr-2 max-sm:w-auto text-white' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" alt="Apple App Store" />
      </div>
      <div className='flex max-sm:flex-col gap-2 justify-center items-center dark:bg-black bg-[#001524] border-teal-50 h-auto w-full text-white max-sm:text-sm py-2'>
          <p>&copy; Copyright {new Date().getFullYear()}</p>
          <p>Created with 💓 by Umar farooq</p>
      </div>
    </>
  );
}

export default Footer;
