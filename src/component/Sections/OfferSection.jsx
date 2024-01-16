import React, { useState } from 'react';
import ActionButton from '../ActionButton'; 

function OfferSection() {
  const [discount, setDiscount] = useState(25);

  return (
    <>
      <div className='max-sm:h-auto h-20 w-full bg-black flex justify-around items-center max-sm:flex-col max-sm:py-4'>
        <div className='max-sm:text-sm text-white text-2xl font-semibold animate-pulse font-serif'>
          Get {discount}% Off On Your First Purchase!
        </div>
        <ActionButton />
      </div>
      <div className=' h-auto w-full bg-gray-200 py-3'>
        <p className=' text-2xl text-center font-serif max-sm:text-lg w-auto'>
          Try It For Free. No Registration Needed.
        </p>
      </div>
    </>
  );
}

export default OfferSection;
